import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { geocode } from '@esri/arcgis-rest-geocoding';

export async function geocodeLocation(address) {
    const accessToken = process.env.ARCGIS_API_KEY;

    try {
        const response = await geocode({
            address,
            authentication: ApiKeyManager.fromKey(accessToken)
        });

        if (response.candidates && response.candidates.length > 0) {
            console.log("Geocode Response", response.candidates[0].location);
            return [response.candidates[0].location.x, response.candidates[0].location.y];
        } else {
            throw new Error("No candidates found for the given address.");
        }
    } catch (error) {
        console.error("Geocoding error:", error);
        throw error;
    }
}
