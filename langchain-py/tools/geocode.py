from arcgis.gis import GIS
from arcgis.geocoding import geocode

def geocodeLocation(address: str):
    """
    use this tool when you need to convert an address into geographic coordinates
    """

    gis = GIS("https://www.arcgis.com")
    
    results = geocode(address=address)
    location = results[0]['location']
    return (location['x'], location['y'])
