import React, { Component } from 'react'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SelectButton } from 'primereact/selectbutton';
import Auxiliary from '../hoc/Auxiliary';
import Address from '../Components/PrimeComponents/Address';
import AddressList from '../Components/NativeComponents/AddressList';
import MdAddressList from '../Components/ReactMDComponents/MdAddressList';
import { AddressService } from '../Services/AddressServices';

class Layout extends Component {

    constructor() {
        super();
        this.state = {
            mode: 'nt',
            addressList: []
        };
        this.addressService = new AddressService();
    }

    componentDidMount() {
        this.addressService.getAllAddresses()
            .then(response => {
                this.setState({
                    addressList: response
                })
            }).catch(error => {
                console.log(error);
            });

    }

    render() {

        const options = [
            { label: 'Native', value: 'nt' },
            { label: 'PrimeReact', value: 'pr' },
            { label: 'React MD', value: 'md' }
        ];

        let dataTable = "";
        if (this.state.mode === 'nt') {
            dataTable =
                <div>
                    <AddressList addressList={this.state.addressList} />
                </div>
        } else if (this.state.mode === 'pr') {
            dataTable =
                <div >
                    <Address addressList={this.state.addressList} />
                </div>
        } else if (this.state.mode === 'md') {
            dataTable =
                <div>
                    <MdAddressList addressList={this.state.addressList} />
                </div>
        }


        return (
            <Auxiliary>

                <div>
                    <SelectButton
                        style={{ width: '600px' }}
                        value={this.state.mode}
                        options={options}
                        checked={this.state.primeMode}
                        onChange={(e) => this.setState({ mode: e.value })} />
                </div>

                {
                    dataTable
                }
            </Auxiliary>
        );
    }

}

export default Layout;