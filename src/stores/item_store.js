'use strict';

import EventEmitter from 'eventemitter3'
import Dispatcher from '../dispatcher/dispatcher'

class ItemStore {
  constructor(dispatcher) {
    this.state = this.getInitialState();
    this.eventEmitter = new EventEmitter();
    this.dispatcher = dispatcher;
    this.changeEvent = 'change';
    this.dispatcher.register((action) => {
      this.invokeOnDispatch(action);
    });
  }

  getState() {
    return this.state;
  }

  getInitialState() {
    return {items: []};
  }

  addListener(listener) {
    this.eventEmitter.addListener(this.changeEvent, listener);
  }

  removeListener(listener) {
    this.eventEmitter.removeListener(this.changeEvent, listener);
  }

  emitChange() {
    this.eventEmitter.emit(this.changeEvent);
  }

  invokeOnDispatch(action) {
    switch (action.type) {
      case 'create':
        this.state.items.push(action.item);
        this.emitChange();
      break;

      case 'destroy': {
        for (let i in this.state.items) {
          if (action.id == this.state.items[i].id) {
            this.state.items.splice(i, 1);
            this.emitChange();
            break;
          }
        }
      }
      break;
    }
  }
}

export default new ItemStore(Dispatcher);
