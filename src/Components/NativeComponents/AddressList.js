import React, { Component } from 'react';
import Address from './Address/Address';
import Header from './Address/Header';
import Detail from './Address/Detail';
import { AddressService } from '../../Services/AddressServices';
import Auxiliary from '../../hoc/Auxiliary';

class AddressList extends Component {
    constructor() {
        super();
        this.state = {
            addresses: [],
            detail: null
        };
        this.addressService = new AddressService();
    }

    componentDidMount() {
        this.addressService.getAllAddresses()
            .then(response => {
                this.setState({
                    addresses: response
                })
            }).catch(error => {
                console.log(error);
            });

    }

    showDetailHandler(id) {

        const address = this.state.addresses[id];

        this.setState({
            detail: address
        });

        console.log(address);
    }

    render() {
        return (
            <Auxiliary>
                <div>
                    <h1 style={{ textAlign: 'center' }} >Customer Address List</h1>
                </div>
                <table style={{ borderCollapse: 'collapse', width: '100%' }} >
                    <Detail data={this.state.detail} showDetail={this.props.showDetail} />
                </table>
                <table style={{ borderCollapse: 'collapse', width: '100%' }} >
                    <Header />
                    {
                        this.state.addresses.map((addr, i) => (
                            <Address
                                clicked={() => this.showDetailHandler(i)}
                                key={i}
                                address={addr}
                            />
                        ))
                    }
                </table>
            </Auxiliary>);
    }
}

export default AddressList;