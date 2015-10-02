'use strict'

import React from 'react'
import Item from './item'

export default class Items extends React.Component {
  render() {
    let items = this.props.items.map((item) => {
      return (
        <Item key={item.id} item={item} />
      );
    });
    return (
      <ul className="list-group">{items}</ul>
    );
  }
}
