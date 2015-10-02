'use strict';

import React from 'react'
import ItemStore from '../stores/item_store'
import ItemForm from './item_form'
import Items from './items'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ItemStore.getState()
  }

  componentDidMount() {
    ItemStore.addListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    ItemStore.removeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState(ItemStore.getState());
  }

  render() {
    return (
      <div className="container">
        <ItemForm />
        <Items items={this.state.items} />
      </div>
    );
  }
}
