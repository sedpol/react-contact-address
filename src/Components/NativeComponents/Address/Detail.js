import React from 'react';
import classes from './Detail.css';
import AddressDetail from '../../Common/AddressDetail';
const detail = (props) => {

    if (props.data === null) {
        return null;
    }

    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }} >
            <tbody className={classes.Detail}>
                <AddressDetail data={props.data} />
                <button onClick={props.hideDetail} >close</button>
            </tbody>
        </table>
    );
}

export default detail;