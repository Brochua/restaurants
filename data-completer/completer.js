import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';

const jsonPath = path.join('.', 'input.json');

const json = await fs.readFile(jsonPath);
const content = JSON.parse(json);

const newJsonPromises = content.map(async (r) => {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${r.name}&inputtype=textquery&locationbias=circle:30000:45.523082546463826:-73.61442966647277&key=${process.env.GOOGLE_MAPS_API_KEY}`
        // fields=address_components,geometry,adr_address,formatted_address,formatted_phone_number,price_level,rating,photo'
        // https://developers.google.com/maps/documentation/javascript/place-data-fields
        const resp = await fetch(url);
        if (!resp.ok) {
            console.error('DID NOT GET AN OK')
            throw new Error('Received not OK status from fetch');
        }
        const json = await resp.json();
        const placeId = json.candidates[0].place_id;
    
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=address_components,geometry,formatted_address,formatted_phone_number,website,current_opening_hours,price_level,rating,url&key=${process.env.GOOGLE_MAPS_API_KEY}`;
        const resp2 = await fetch(detailsUrl);
        const json2 = await resp2.json();
    
        const newObj = r;
        r.pId = placeId;
        r.address = json2.result.formatted_address;
        r.area = json2.result.address_components.find((val) => val.types.includes('sublocality'));
        if (r.area) {
            r.area = r.area.long_name;
        }
        r.phoneNumber = json2.result.formatted_phone_number;
        r.coordinates = [json2.result.geometry.location.lat, json2.result.geometry.location.lng];
        r.rating = json2.result.rating;
        r.url = json2.result.url;
        if (json2.result.current_opening_hours) {
            r.hours = json2.result.current_opening_hours.weekday_text.reduce((prev, curr) => {
                const data = curr.split(':');
                const day = data[0].toLowerCase();
                const hours = data.slice(1).join(':');
                prev[day] = hours;
                return prev;
            }, {});
            r.hours = json2.result.current_opening_hours.weekday_text;
        }
        r.website = json2.result.website;
        r.price = json2.result.price_level;
    
        return newObj;
    } catch (e) {
        console.error('SOMETHING WENT SO WRONGG AAAA');
        console.error(e);
    }
});

const newJson = await Promise.all(newJsonPromises);

await fs.writeFile('restaurants.json', JSON.stringify(newJson));

console.log('Data completion complete!')
