import axios from 'axios';

export class AddressService {

    getAllAddresses() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(result => {
                const response = [];
                let i = 0;
                result.data.forEach(element => {
                    const el = {...element, key: element.id}
                    response[i++] = (el);
                });
                return response;
            });
    }
}

