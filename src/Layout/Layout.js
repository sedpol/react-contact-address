import React, { Component } from 'react'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ToggleButton } from 'primereact/togglebutton';
import Auxiliary from '../hoc/Auxiliary';
import Address from '../Components/PrimeComponents/Address';
import AddressList from '../Components/NativeComponents/AddressList';

class Layout extends Component {

    constructor() {
        super();
        this.state = {
            primeMode: true
        };
    }

    render() {
        return (
            <Auxiliary>

                <div>
                    <ToggleButton onLabel='PrimeReact Mode On' offLabel='PrimeReact Mode Off'
                        style={{ width: '200px' }}
                        checked={this.state.primeMode}
                        onChange={(e) => this.setState({ primeMode: e.value })} />
                </div>

                {
                    this.state.primeMode
                        ?
                        <div>
                            <Address />
                        </div>
                        :
                        <div >
                            <AddressList />
                        </div>
                }
            </Auxiliary>
        );
    }

}

export default Layout;