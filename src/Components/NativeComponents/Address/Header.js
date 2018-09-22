import React from 'react';
import classes from './Header.css'
const header = (props) => {
    return (
        <thead className={classes.Header}>
            <tr >
                <th></th>
                <th>Nick</th>
                <th>Name</th>
                <th>E-Mail</th>
                <th>Phone</th>
                <th>Web Address</th>
            </tr>
        </thead>
    );
}

export default header;