import React, { Component } from 'react';
import axios from 'axios';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
class Address extends Component {

    constructor() {
        super();
        this.state = {
            addresses: null
        };
    }

    componentDidMount() {
        if (this.state.addresses === null) {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {

                    console.log(response);
                    this.setState({
                        addresses: response.data
                    })
                }).catch(error => {
                    console.log(error);
                });
        }
    }


    render() {
        return (
            <div>
                <DataTable value={this.state.addresses}>
                    <Column field = 'username' header='Nick'/>
                    <Column field = 'name' header='Name'/>
                    <Column field = 'email' header='E-Mail'/>
                    <Column field = 'phone' header='Phone'/>
                    <Column field = 'website' header='Web Address'/>

                </DataTable>

            </div >);
    }
}

export default Address;