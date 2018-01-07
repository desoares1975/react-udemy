import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.sendSearch = this.sendSearch.bind(this);
    this.submit = this.submit.bind(this);
  }

  sendSearch(event) {
    this.props.sendSearch(event);
  }

  submit(event) {
    this.props.submit(event);
  }
  
  render() {
    return (
      <form onSubmit={this.submit}>
        <div className="input-field col s6">
          <input placeholder="Search" onChange={this.sendSearch} type="text" value={this.props.search} />
          <label>Search</label>
        </div>
        <p>{this.props.search}</p>
      </form>
    );
  }
}

export default Search;