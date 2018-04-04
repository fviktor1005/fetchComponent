import React, {Component} from 'react'

const CountryList = ({data}) => {
    return(
            <div className="list-group">
                {
                    data.map(item =>
                        <a key={item.alpha2Code} href="#" className="list-group-item list-group-item-action">{item.name}</a>
                    )
                }

            </div>
    )
}

export default CountryList