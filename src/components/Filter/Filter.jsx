import { Component } from 'react';

export class Filter extends Component {
  state = {
    filter: '',
  };
  render() {
    return <input type="text" />;
  }
}
