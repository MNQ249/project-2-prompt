import React, { Component } from 'react';
import MyList from './MyList';

class Search extends Component {
    render() {
        return (
            <div>
                <label>
                    Search city:
                </label>
                <input type="text"
                onChange={this.props.onChange}
                 value={this.props.value}></input>
                 <button>Ok</button>
            </div>
        )
    }
};

export default Search;

