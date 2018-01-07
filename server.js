'use strict';

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/`));
app.listen(8808);
console.log('Server up and running');

app.get('/data', (req, res) => {
  res.status(200).json([
      {'title': 'Title 1', 'description': 'Description 1', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/sample-1.jpg', 'link': '#a'},
      {'title': 'Title 2', 'description': 'Description 2', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/office.jpg', 'link': '#b'},
      {'title': 'Title 3', 'description': 'Description 3', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/sample-1.jpg', 'link': '#c'},
      {'title': 'Title 4', 'description': 'Description 4', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/office.jpg', 'link': '#d'},
      {'title': 'Title 5', 'description': 'Description 5', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/sample-1.jpg', 'link': '#e'},
      {'title': 'Title 6', 'description': 'Description 6', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/office.jpg', 'link': '#f'},
      {'title': 'Title 7', 'description': 'Description 7', 'detail': 'Some information about the image.', 'image': 'http://materializecss.com/images/sample-1.jpg', 'link': '#g'}
    ]);
});

app.get('/menu', (req, res) => {
  res.status(200).json([
      {'title': 'Home', 'link': '#home'},
      {'title': 'About', 'link': '#about'},
      {'title': 'Contacts', 'link': '#link'}
    ]);
});