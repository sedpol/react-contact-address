import React, { Component } from 'react'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ToggleButton } from 'primereact/togglebutton';
import Auxiliary from '../hoc/Auxiliary';
import Address from '../Components/PrimeComponents/Address';
import AddressList from '../Components/NativeComponents/AddressList';
import MdAddressList from '../Components/ReactMDComponents/MdAddressList';
import { AddressService } from '../Services/AddressServices';

class Layout extends Component {

    constructor() {
        super();
        this.state = {
            primeMode: true,
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
        return (
            <Auxiliary>

                <div>
                    <ToggleButton onLabel='PrimeReact Mode On' offLabel='PrimeReact Mode Off'
                        style={{ width: '200px' }}
                        checked={this.state.primeMode}
                        onChange={(e) => this.setState({ primeMode: e.value })} />
                </div>

                <div>
                    <MdAddressList addressList={this.state.addressList} />
                </div>

                {
                    this.state.primeMode
                        ?
                        <div>
                            <Address addressList={this.state.addressList} />
                        </div>
                        :
                        <div >
                            <AddressList addressList={this.state.addressList} />
                        </div>
                }
            </Auxiliary>
        );
    }

}

export default Layout;