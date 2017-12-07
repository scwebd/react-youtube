import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    // calling the parent method and passing it all the props
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
      this.setState({ term });
      this.props.onSearchTermChange(this.state.term);
  }

  render() {
    return (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter search term here!"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
    )
  }

}

export default SearchBar;
