import { useMap } from "react-leaflet";

export default function MapPanHandler({focus}: {focus?: [number, number]}) {
    const map = useMap();

    if (focus && focus[0] && focus[1]) {
        console.log(focus)
        map.flyTo(focus, 14);
    }

    return <></>
}