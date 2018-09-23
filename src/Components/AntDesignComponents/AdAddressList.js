import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import AddressDetail from '../Common/AddressDetail';

class AdAddressList extends Component {

    render() {
        const columns = [
            { title: 'Nick', dataIndex: 'username', key: 'username' },
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'E-Mail', dataIndex: 'email', key: 'email' },
            { title: 'Phone', dataIndex: 'phone', key: 'phone' },
            { title: 'Web Address', dataIndex: 'website', key: 'website' }
        ];
        return (
            <Table
                columns={columns}
                dataSource={this.props.addressList}
                expandedRowRender = {record => <AddressDetail data = {record}/>}
            >
            </Table>
        );
    }
}

export default AdAddressList;