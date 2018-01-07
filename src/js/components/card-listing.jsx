import React from 'react';
import Card from './card';
import Search from './search'
import Axios from 'axios';

class CardListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'search': '', 'clicks': 0, 'data': [], 'response': []};
    this.addClick = this.addClick.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
    this.submit = this.submit.bind(this);
  }

  addClick() {
    this.setState(current => ({'clicks': ++current.clicks}));
  }

  sendSearch(event) {
    this.setState({'search': event.target.value});
    if (!event.target.value) {
      this.setState({'data': this.state.response});
    }
  }

  submit() {
    let filteredData = this.state.response.filter(item => {
      for (let key in item) {
        if (item[key].toLowerCase().indexOf(this.state.search.toLowerCase()) > -1) {
          return true;
        }
      }

      return false;
    });

    this.setState({'data': filteredData});

    event.preventDefault();
  }

  componentDidMount() {
    Axios.get('http://localhost:8808/data')
    .then(res => {
      this.setState({
        'data': res.data,
        'response': res.data
      });
    })
    .catch(e => {
      console.log(e);
    })
  }

  render() {
    let news = this.state.data;
    let row = [];
    let last = news.length - 1;
    let cols = +this.props.colsPerRows;
    let collection = [];
    
    news.forEach((item, i) => {
      row.push(item);

      if (row.length === cols || i === last) {
        collection.push(row);
        row = [];
      }
    });

    let cardsList = group => {
      return group.map((item, i) => {
        return (
          <div key={i} className={`col m${this.props.colSize}`}>
            <Card data={item} addClick={this.addClick} />
          </div>
        );
      });
    };

    let line = collection.map((group, i) => {
      return (
        <div key={i} className="row">
          {cardsList(group, this)}
        </div>
      );
    })

    return (
      <div>
        <div className="row">
          <Search sendSearch={this.sendSearch} search={this.state.search} submit={this.submit} />
        </div>
        <p>Total clicks {this.state.clicks}</p>
        {line}
      </div>
    );
  }
}

export default CardListing;