import React from 'react';
import classes from './Address.css'
import Auxiliary from '../../../hoc/Auxiliary';
const address = (props) => {

    let style = null;
    if (props.address.selected) {
        style = {backgroundColor: '#cccccc' };
    }
    console.log(style);
    return (
        <Auxiliary>
            <tbody className={classes.Address}>
                <tr style={ style}>
                    <td style={{ width: '4em' }} > <button onClick={props.clicked}>Detail</button></td>
                    <td style={{ width: '10em' }} >{props.address.username}</td>
                    <td style={{ width: '10em' }} >{props.address.name} </td>
                    <td style={{ width: '15em' }} >{props.address.email}</td>
                    <td style={{ width: '10em' }} >{props.address.phone}</td>
                    <td style={{ width: '10em' }} >{props.address.website}</td>
                </tr>
            </tbody>
        </Auxiliary>
    );

}

export default address;