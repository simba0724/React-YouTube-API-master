import React, { Component } from "react";

// const searchBar = () => {
//     return (
//        <input />
//     )
// }

class searchBar extends Component {

    constructor(props) {
        super(props)
        this.state = { term: '' }
    }

    onInputChange = (term) => {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }

    render() {
        return (
            <div className="search-bar">
                <input
                   className="form-control" 
                   onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }    
}

export default searchBar;