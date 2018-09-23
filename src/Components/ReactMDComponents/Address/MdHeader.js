import React from 'react'
import {
    TableHeader,
    TableRow,
    TableColumn,
} from 'react-md';

const mdHeader = (props) => {
    return (
        <TableHeader>
            <TableRow>
                <TableColumn>Nick</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>E-Mail</TableColumn>
                <TableColumn>Phone</TableColumn>
                <TableColumn>Web Address</TableColumn>
            </TableRow>
        </TableHeader>
    );
};

export default mdHeader;