import * as action from "./action";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it("should create an action to search robots", () => {
  const text = "woo";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(action.setSearchField(text)).toEqual(expectedAction);
});

describe("handles requesting robots api", () => {
  it("REQUEST_ROBOTS_PENDING", () => {
    const store = mockStore();
    store.dispatch(action.requestRobots());
    const actions = store.getActions();
    console.log("actions", actions);
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(actions[0]).toEqual(expectedAction);
  });

  //   it("REQUEST_ROBOTS_SUCCESS", () => {
  //   return fetch("https://jsonplaceholder.typicode.com/users")
  //    .then()
  //   });
});
