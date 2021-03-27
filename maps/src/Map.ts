
interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    getMarkerContent(): string;
};

export class Map {

    private googleMap: google.maps.Map;

    addMarker(mappable: Mappable): void {

        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: { lat: mappable.location.lat, lng: mappable.location.lng }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.getMarkerContent(),

            });

            infoWindow.open(this.googleMap, marker);
        });
    };

    constructor (element: string) {

        let mapOptions: google.maps.MapOptions = {
            zoom: 1,
            center: { lat: 0, lng: 0 }
        }

        const htmlElement = document.getElementById(element)
        this.googleMap = new google.maps.Map(htmlElement, mapOptions);

    }
};