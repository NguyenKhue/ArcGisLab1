import { point_template_area } from "./pointTemplate.js";

export function createPolygon(paths,  name, location, color = [226, 119, 40]) {
    return {
        type: "polygon",
        rings: paths,
        symbol: {
            type: "simple-fill",
            color: [227, 139, 79, 0.4],
            outline: {
                color: color,
                width: 1
            }
        },
        Name: name,
        Location: location,
        popupTemplate: point_template_area
    }
}
