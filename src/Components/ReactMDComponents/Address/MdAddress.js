import React, { Component } from 'react';
import {
    TableRow,
    TableColumn,
    Button
} from 'react-md';
import Auxiliary from '../../../hoc/Auxiliary';

class MdAddress extends Component {

    handleShowDialog = () => {
        this.props.showDialogClicked(this.props.index);
    }

    render() {
        return (
            <Auxiliary>

                <TableRow key={this.props.key}>
                    <TableColumn>
                        <Button raised onClick={this.handleShowDialog}>
                            Detail
                            </Button>
                    </TableColumn>
                    <TableColumn>{this.props.address.username}</TableColumn>
                    <TableColumn>{this.props.address.name}</TableColumn>
                    <TableColumn>{this.props.address.email}</TableColumn>
                    <TableColumn>{this.props.address.phone}</TableColumn>
                    <TableColumn>{this.props.address.website}</TableColumn>
                </TableRow>
            </Auxiliary>
        );
    }
};

export default MdAddress;