import React, { Component } from 'react'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SelectButton } from 'primereact/selectbutton';
import Auxiliary from '../hoc/Auxiliary';
import PrAddress from '../Components/PrimeComponents/PrAddress';
import AddressList from '../Components/NativeComponents/AddressList';
import MdAddressList from '../Components/ReactMDComponents/MdAddressList';
import SuiAddressList from '../Components/SymanticUIComponents/SuiAddressList';
import { AddressService } from '../Services/AddressServices';
import AdAddressList from '../Components/AntDesignComponents/AdAddressList';

class Layout extends Component {

    constructor() {
        super();
        this.state = {
            mode: 'ad',
            addressList: []
        };
        this.addressService = new AddressService();
    }

    componentDidMount() {
        this.addressService.getAllAddresses()
            .then(response => {
                this.setState({
                    addressList: response
                })
            }).catch(error => {
                console.log(error);
            });

    }

    render() {

        const options = [
            { label: 'Native', value: 'nt' },
            { label: 'PrimeReact', value: 'pr' },
            { label: 'React MD', value: 'md' },
            { label: 'Semantic UI', value: 'sui' },
            { label: 'Ant Design', value: 'ad' }
        ];

        let dataTable = "";
        if (this.state.mode === 'nt') {
            dataTable =
                <div>
                    <AddressList addressList={this.state.addressList} />
                </div>
        } else if (this.state.mode === 'pr') {
            dataTable =
                <div >
                    <PrAddress addressList={this.state.addressList} />
                </div>
        } else if (this.state.mode === 'md') {
            dataTable =
                <div>
                    <MdAddressList addressList={this.state.addressList} />
                </div>
        } else if (this.state.mode === 'sui') {
            dataTable =
                <div>
                    <SuiAddressList addressList={this.state.addressList} />
                </div>
        } else if (this.state.mode === 'ad') {
            dataTable =
                <div>
                    <AdAddressList addressList={this.state.addressList} />
                </div>
        }


        return (
            <Auxiliary>

                <div>
                    <SelectButton
                        style={{ width: '600px' }}
                        value={this.state.mode}
                        options={options}
                        checked={this.state.primeMode}
                        onChange={(e) => this.setState({ mode: e.value })} />
                </div>

                {
                    dataTable
                }
            </Auxiliary>
        );
    }

}

export default Layout;