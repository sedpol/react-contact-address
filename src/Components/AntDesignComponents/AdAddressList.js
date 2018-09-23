import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import AddressDetail from '../Common/AddressDetail';
import Auxiliary from '../../hoc/Auxiliary';
import TableTitle from '../Common/TableTitle';

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
            <Auxiliary>
                <TableTitle/>
                <Table
                    columns={columns}
                    dataSource={this.props.addressList}
                    expandedRowRender={record => <AddressDetail data={record} />}
                >
                </Table>
            </Auxiliary>
        );
    }
}

export default AdAddressList;