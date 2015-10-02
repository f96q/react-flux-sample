'use strict';

import React from 'react'
import ItemActions from '../actions/item_actions'

export default class ItemForm extends React.Component {
  create(event) {
    let text = this.refs.itemText.getDOMNode().value;
    if (text) {
      ItemActions.create(text);
      this.refs.itemText.getDOMNode().value = '';
    }
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="itemText"></input>
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button" onClick={this.create.bind(this)}>+</button>
        </span>
      </div>
    );
  }
}