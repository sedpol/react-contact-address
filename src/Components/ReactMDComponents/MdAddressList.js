import React, { Component } from 'react';
import {
    DataTable,
    TableBody, CardTitle, CardText, Card,
    Button, DialogContainer
} from 'react-md';
import Auxiliary from '../../hoc/Auxiliary';
import MdAddress from './Address/MdAddress';
import MdHeader from './Address/MdHeader';

class MdAddressList extends Component {


    state = { visible: false, address: null };

    show = (i) => {
        this.setState({
            visible: true,
            address: this.props.addressList[i]
        });
    };

    hide = () => {
        this.setState({ visible: false });
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

                <div className='content-section introduction'>
                    <h1 style={{ textAlign: 'center' }} >Customer Address List</h1>
                </div>
                <div>
                    <DialogContainer
                        id="simple-list-dialog"
                        visible={visible}
                        title=""
                        onHide={this.hide} >
                        {
                            (this.state.address !== null && this.state.address !== undefined) ?
                                (

                                    <Card style={{ maxWidth: 800 }} className="md-block-centered">
                                        <CardTitle title={this.state.address.username} subtitle="" />
                                        <CardText>
                                            <p> Our user <strong>{this.state.address.username}</strong>, whose name is
                                                <strong>{this.state.address.name}</strong>,  works at <strong>{this.state.address.company.name}</strong>.
                                                You should call <strong>{this.state.address.name}</strong> at
                                                <strong>{this.state.address.phone} </strong> or send email to <strong>{this.state.address.email}</strong>
                                                to give more information about membership.
                                            </p>
                                            <p>
                                                You should send a brochure 2 times a month, her/his address is <strong>{this.state.address.address.suite}, {this.state.address.address.street} st. {this.state.address.address.city}, postcode: {this.state.address.address.zipcode}</strong>.
                                            </p>
                                        </CardText>
                                    </Card>
                                )
                                :
                                <div />

                        }
                        <div>
                            <Button raised onClick={this.hide}>
                                close
                            </Button>
                        </div>

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