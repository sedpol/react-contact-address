import React from 'react';
import classes from './Detail.css';
import AddressDetail from '../../Common/AddressDetail';
const detail = (props) => {

    if (props.data === null) {
        return null;
    }

    return (
        <div className={classes.Detail}>
            <AddressDetail data={props.data} />
            <div>
                <button onClick={props.hideDetail} >close</button>
            </div>
        </div>
    );
}

export default detail;