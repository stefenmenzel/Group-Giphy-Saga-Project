import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchForm extends Component{
    
    state = {
        searchString: ''
    }

    handleChange = (event) => {
        this.setState({
            searchString: event.target.value
        });
    }

    submitSearch = () => {
        this.props.dispatch({type: 'GET_SEARCH', payload: {query: this.state.searchString}});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitSearch}>
                    <input onChange={this.handleChange} type="text" placeholder="Search Jifs" />
                    <button type="submit">Search Jifs</button>
                </form>
            </div>
        )
    }
}

export default connect()(SearchForm);