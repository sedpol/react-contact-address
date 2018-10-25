import React, { Component } from 'react';
import Address from './Address/Address';
import Header from './Address/Header';
import Detail from './Address/Detail';
import Auxiliary from '../../hoc/Auxiliary';
import TableTitle from '../Common/TableTitle';

class AddressList extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        };
    }
    showDetailHandler(id) {

        this.props.addressList.map(add => {
            return add.selected = false;
        });

        const address = this.props.addressList[id];

        address.selected = true;
        this.props.addressList[id] = address;

        this.setState({
            data: address
        });
    }

    hideDetailHandler = () => {
        this.props.addressList.map(address => {
            return address.selected = false;
        });

        this.setState({
            data: null
        });
    }

    render() {
        return (
            <Auxiliary>
                <TableTitle />
                <Detail data={this.state.data} hideDetail={this.hideDetailHandler} />

                <table style={{ borderCollapse: 'collapse', width: '100%' }} >
                    <Header />
                    {
                        this.props.addressList.map((addr, i) => (
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