'use strict';

import React from 'react'
import ItemActions from '../actions/item_actions'

export default class Item extends React.Component {
  destroy(event) {
    ItemActions.destroy(this.props.item.id);
  }

  render() {
    return (
      <li className="list-group-item">
        <button type="button" className="btn btn-primary" onClick={this.destroy.bind(this)}>X</button>
        <div>{this.props.item.body}</div>
      </li>
    );
  }
}
