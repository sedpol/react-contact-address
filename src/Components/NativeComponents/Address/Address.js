import React, { Component } from 'react';
import classes from './Address.css'
import Auxiliary from '../../../hoc/Auxiliary';
class Address extends Component {

    render() {
        return (
            <Auxiliary>
                <tbody className={classes.Address}>
                    <tr>
                        <td style={{ width: '4em' }} > <button onClick={this.props.clicked}>Detail</button></td>
                        <td style={{ width: '10em' }} >{this.props.address.username}</td>
                        <td style={{ width: '10em' }} >{this.props.address.name} </td>
                        <td style={{ width: '15em' }} >{this.props.address.email}</td>
                        <td style={{ width: '10em' }} >{this.props.address.phone}</td>
                        <td style={{ width: '10em' }} >{this.props.address.website}</td>
                    </tr>
                </tbody>
            </Auxiliary>
        );
    }
}

export default Address;