import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import thunk from "redux-thunk";

// Reducers
const reducer = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "LAUNCHES_LIMIT_100":
      return { ...state, shuttleArray: action.payload };
    default:
      return state;
  }
};

// To enable redux dev tools extension in browser.
const composeEnhancers =
  (typeof window != "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const makeStore = () =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore, { debug: true });
