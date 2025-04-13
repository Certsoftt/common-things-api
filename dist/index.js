'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function Get(input) {
  this.input = input;
  this.response;
  this.data;
}
Get.prototype.api = async function () {
  let endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  const [fetch, setFetch] = react.useState();
  if (this.input == "posts") {
    if (endpoint == "") {
      this.response = await fetch(`https://jsonplaceholder.typicode.com/${this.input}`);
      this.data = this.response.json().then(result => {
        setFetch(result);
      });
    } else {
      this.response = await fetch(`https://jsonplaceholder.typicode.com/${this.input}/${endpoint}`);
      this.data = this.response.json().then(result => {
        setFetch(result);
      });
    }
  }
  return fetch;
};

exports.Get = Get;
