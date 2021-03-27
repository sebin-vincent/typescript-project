import faker from 'faker';

export class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    getMarkerContent(): string {

        return `Company : ${this.name}`;
    };

    constructor () {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        let lat = parseFloat(faker.address.latitude());
        let lng = parseFloat(faker.address.longitude());
        this.location = { lat, lng };
    };
}