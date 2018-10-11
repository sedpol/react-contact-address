import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddressList from './AddressList';
import Address from './Address/Address';

configure({adapter: new Adapter()});

describe ('<AddressList/> ', () => {

    it ('should return no <Address/> when addressList is empty! ', ()=>{
        const wrapper = shallow(<AddressList addressList = {[]}/>);

        expect(wrapper.find(Address)).toHaveLength(0);
    });

});