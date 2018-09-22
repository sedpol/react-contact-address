import axios from 'axios';

export class AddressService {

    getAllAddresses() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
                .then(result => result.data);
    }
}

