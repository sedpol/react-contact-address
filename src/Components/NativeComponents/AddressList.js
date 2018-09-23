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
        const address = this.props.addressList[id];

        this.setState({
            data: address
        });
    }

    hideDetailHandler = () => {
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