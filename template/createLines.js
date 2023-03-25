import { point_template_area } from './pointTemplate.js';

export function createLines(paths,  name, location, color = [226, 119, 40]) {
    return {
        type: "polyline",
        paths: paths,
        symbol: {
            type: "simple-line",
            color: [226, 119, 40], // orange
            width: 2
        },
        Name: "Làng đại học",
        Location: "Quận Thủ Đức",
        popupTemplate: point_template_area
    }
}