import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import "semantic-ui-css/semantic.min.css";


import { Table, Icon, Modal, Button, Header } from 'semantic-ui-react';
import TableTitle from '../Common/TableTitle';
import AddressDetail from '../Common/AddressDetail';
class SuiAddressList extends Component {
    state = { modalOpen: false, data: null }

    showDetailHandler = (i) => {
        this.setState({ modalOpen: true, data: this.props.addressList[i] });
    }

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Auxiliary>

                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size='small'
                >
                    <Header icon='address card outline' content='Address Card' />
                    <Modal.Content>
                        <AddressDetail data = {this.state.data}/>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='orange' onClick={this.handleClose} inverted>
                            <Icon name='close' /> close
                </Button>
                    </Modal.Actions>
                </Modal>

                <TableTitle />
                <Table color='orange'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                            </Table.HeaderCell>
                            <Table.HeaderCell>Nick</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>E-Mail</Table.HeaderCell>
                            <Table.HeaderCell>Phone</Table.HeaderCell>
                            <Table.HeaderCell>Web Address</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.props.addressList.map((data, i) => (
                                <Table.Row key={i}>
                                    <Table.Cell>
                                        <Icon name='zoom-in' size='big' onClick={() => this.showDetailHandler(i)} />
                                    </Table.Cell>
                                    <Table.Cell>{data.username}</Table.Cell>
                                    <Table.Cell>{data.name}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.phone}</Table.Cell>
                                    <Table.Cell>{data.website}</Table.Cell>
                                </Table.Row>
                            ))

                        }
                    </Table.Body>
                </Table>
            </Auxiliary>
        );
    }
}

export default SuiAddressList;