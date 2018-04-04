import React, {Component} from 'react'
import CountryList from './CountryList'
import FetchData from './FetchData'

export default class SearchCountries extends Component {
    static API = 'https://restcountries.eu/rest/v2/name/';

    constructor(props){
        super(props);
        this.state = {
            countryName: 'united'
        }
        this.HOC = FetchData(CountryList, SearchCountries.API)
    }

    onChange = (e) => this.setState({countryName: e.target.value.trim()});

    render(){
        return(
            <div className="container col-6 mt-2">
                <form className="form-group">
                    <input type="text" onChange={this.onChange} value={this.state.countryName} className="form-control form-control-lg" placeholder="input country name"/>
                    <this.HOC afterUrl={this.state.countryName}/>
                </form>
            </div>
        )
    }
}

