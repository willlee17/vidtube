import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }

  onInputChange = (e) => {
    this.setState({
      term: e.target.value
    })
    this.props.onSearchTermChange(e.target.value)
  }

  render() {
    return(
      <div>
        <input
          onChange = {this.onInputChange}
          value={this.state.term}
          placeholder="Search videos here..."
        />
      </div>
    )
  }
}

export default SearchBar
