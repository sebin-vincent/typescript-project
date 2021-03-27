import faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number,
        lng: number
    };

    getMarkerContent(): string {

        return `User : ${this.name}`;
    };

    constructor () {
        this.name = faker.name.firstName();
        let lat = parseFloat(faker.address.latitude());
        let lng = parseFloat(faker.address.longitude());
        this.location = { lat, lng }
    }
}