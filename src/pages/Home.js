import React, { Component } from 'react';
import { requestAllShapes } from '../helpers/fireUtils';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  async componentDidMount() {
    await requestAllShapes().then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <h1>Welcome Home</h1>
    )
  }
}
