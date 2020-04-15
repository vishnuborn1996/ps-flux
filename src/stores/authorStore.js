import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import ActionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _authors = [];

class AuthorStore extends EventEmitter {
  addChangeListener(callback) {
    debugger;
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    debugger;
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAuthors() {
    return _authors;
  }
}

const store = new AuthorStore();

Dispatcher.register((action) => {
  debugger;
  switch (action.actionType) {
    case ActionTypes.LOAD_AUTHORS:
      _authors.push(action.authors);
      store.emit();
      break;
    default:
      break;
  }
});

export default store;
