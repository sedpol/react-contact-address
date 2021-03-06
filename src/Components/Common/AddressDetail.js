import React from 'react';

const addressDetail = (props) => {

    if (props.data === null) {
        return null;
    }

    return (
        <div>
            Our user <strong>{props.data.username}</strong>, whose name is <strong>{props.data.name}</strong>,  works at <strong>{props.data.company.name}</strong>. 
            You should call <strong>{props.data.name}</strong> at <strong>{props.data.phone} </strong> or send email to <strong>{props.data.email}</strong> to give more information about membership. 

            You should send a brochure 2 times a month, her/his address is <strong>{props.data.address.suite}, {props.data.address.street} st. {props.data.address.city}, postcode: {props.data.address.zipcode}</strong>.
        </div>
    );
}

export default addressDetail;