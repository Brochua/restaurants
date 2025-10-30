import { useMap } from "react-leaflet";

export default function MapPanHandler({focus}: {focus?: [number, number]}) {
    const map = useMap();

    if (focus) {
        console.log("f-", focus)
        map.flyTo(focus, 14);
    }

    return <></>
}