import React, {Component} from 'react'
import PropTypes from 'prop-types'

const FetchData = (ComposedComponent, url) => class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            data: []
        }
    }
    static propTypes = {
        afterUrl: PropTypes.string
    }

    componentWillUpdate(nextProps){
        console.log('fetch will update', nextProps.afterUrl)
        //this.fetchJson(nextProps.afterUrl)
    }

    componentWillReceiveProps(nextProps){
        console.log('fetch will props', nextProps.afterUrl)
        this.fetchJson(nextProps.afterUrl)
    }

    fetchJson(afterUrl){
        fetch(url + afterUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                    this.setState({
                        data: data,
                        isLoading: false
                    })
                }
            )
            .catch(ex => this.setState({data: []}))
    }

    componentWillMount() {

        this.setState({isLoading: true})
        this.fetchJson(this.props.afterUrl)

    }

    render(){
        return (
            <div>
                {
                (this.state.isLoading) ?
                    <div>Loading...</div> :
                    <ComposedComponent {...this.state}/>
                }
            </div>
        )
    }
}

export default FetchData