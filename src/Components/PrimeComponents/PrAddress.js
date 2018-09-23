import React, { Component } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import TableTitle from '../Common/TableTitle';
import AddressDetail from '../Common/AddressDetail';
class PrAddress extends Component {

    constructor() {
        super();
        this.state = {
            expandedRows: null
        };
    }

    rowExpansionTemplate(data) {
        return (
            <AddressDetail data={data} />
        );
    }

    render() {
        return (
            <div>
                <TableTitle />
                <div>
                    <DataTable
                        value={this.props.addressList}
                        expandedRows={this.state.expandedRows}
                        onRowToggle={(e) => this.setState({ expandedRows: e.data })}
                        rowExpansionTemplate={this.rowExpansionTemplate}>

                        <Column expander={true} style={{ width: '4em' }} />
                        <Column field='username' header='Nick' style={{ width: '10em' }} />
                        <Column field='name' header='Name' style={{ width: '10em' }} />
                        <Column field='email' header='E-Mail' style={{ width: '15em' }} />
                        <Column field='phone' header='Phone' style={{ width: '10em' }} />
                        <Column field='website' header='Web Address' style={{ width: '10em' }} />

                    </DataTable>

                </div>
            </div>
        );
    }
}

export default PrAddress;