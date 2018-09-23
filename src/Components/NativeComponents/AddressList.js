import React, { Component } from 'react';
import Address from './Address/Address';
import Header from './Address/Header';
import Detail from './Address/Detail';
import Auxiliary from '../../hoc/Auxiliary';

class AddressList extends Component {
    constructor() {
        super();
        this.state = {
            detail: null
        };
    }
    showDetailHandler(id) {
        const address = this.props.addressList[id];

        this.setState({
            detail: address
        });
    }

    render() {
        return (
            <Auxiliary>
                <div>
                    <h1 style={{ textAlign: 'center'}} >Customer Address List</h1>
                </div>
                <table style={{ borderCollapse: 'collapse', width: '100%' }} >
                    <Detail data={this.state.detail} showDetail={this.state.showDetail} />
                </table>
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