import React from 'react';
import Card from './card';

class CardListing extends React.Component {
  render() {

    let news = [
      {'title': 'Title 1', 'description': 'Description 1', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/sample-1.jpg', 'link': '#a'},
      {'title': 'Title 2', 'description': 'Description 2', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/office.jpg', 'link': '#b'},
      {'title': 'Title 3', 'description': 'Description 3', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/sample-1.jpg', 'link': '#c'},
      {'title': 'Title 4', 'description': 'Description 4', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/office.jpg', 'link': '#d'},
      {'title': 'Title 5', 'description': 'Description 5', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/sample-1.jpg', 'link': '#e'},
      {'title': 'Title 6', 'description': 'Description 6', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/office.jpg', 'link': '#f'},
      {'title': 'Title 7', 'description': 'Description 7', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/sample-1.jpg', 'link': '#g'}
    ];
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
            <Card data={item} />
          </div>
        );
      });
    };

    let line = collection.map((group, i) => {
      return (
        <div key={i} className="row">
          {cardsList(group)};
        </div>
      );
    })

    return (
      <div>
        {line}
      </div>
    );
  }
}

export default CardListing;