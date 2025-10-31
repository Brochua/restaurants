import { DivIcon } from "leaflet";

export default function createSvgIcon(color: string = "black") {
    return new DivIcon({
        html: `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Simplified map pin -->
                <path d="M10 0C5 0 1 4 1 9C1 14 10 20 10 20S19 14 19 9C19 4 15 0 10 0Z" fill="${color}"/>
                <circle cx="10" cy="7" r="3" fill="white"/>
            </svg>
        `,
        className: 'custom-marker-icon',
        iconSize: [20, 20],
        iconAnchor: [10, 20]
    });
}