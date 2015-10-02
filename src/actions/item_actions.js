'use strict';

import uuid from 'uuid'
import Dispatcher from '../dispatcher/dispatcher'

class ItemAction {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatch(params) {
    this.dispatcher.dispatch(params);
  }

  create(body) {
    this.dispatch({
      type: 'create',
      item: {id: uuid.v4(), body: body}
    });
  }

  destroy(id) {
    this.dispatch({
      type: 'destroy',
      id: id
    });
  }
}

export default new ItemAction(Dispatcher);
