import React, { Component } from 'react';
import {
    DataTable,
    TableBody, CardTitle, CardText, Card,
    Button, DialogContainer
} from 'react-md';

import Auxiliary from '../../hoc/Auxiliary';
import MdAddress from './Address/MdAddress';
import MdHeader from './Address/MdHeader';
import TableTitle from '../Common/TableTitle';
import AddressDetail from '../Common/AddressDetail';
class MdAddressList extends Component {


    state = { visible: false, data: null };

    show = (i) => {
        this.setState({
            visible: true,
            data: this.props.addressList[i]
        });
    };

    hide = () => {
        this.setState({ visible: false, data: null });
    };

    handleKeyDown = (e) => {
        const key = e.which || e.keyCode;
        if (key === 13 || key === 32) {
            // also close on enter or space keys
            this.hide();
        }
    };

    render() {
        const { visible } = this.state;

        return (
            <Auxiliary>
                <TableTitle />
                <div>
                    <DialogContainer
                        id="simple-list-dialog"
                        visible={visible}
                        onHide={this.hide} >
                        <Card style={{ maxWidth: 800 }} className="md-block-centered">
                            <CardTitle title='Address Card' />
                            <CardText>
                                <AddressDetail data={this.state.data} />
                            </CardText>
                        </Card>
                        <Button raised onClick={this.hide}>
                            close
                        </Button>
                    </DialogContainer>
                </div>
                <DataTable plain>
                    <MdHeader />
                    <TableBody>
                        {
                            this.props.addressList.map((addr, i) => (
                                <MdAddress key={i} index={i} address={addr} showDialogClicked={this.show} />
                            ))
                        }
                    </TableBody>
                </DataTable>

            </Auxiliary >
        );
    }
}

export default MdAddressList;