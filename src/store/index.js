import countReducer from "./01-count";
import favoriteThingsReducer from "./02-favoriteThings";
import youTubeVideoReducer from "./03-youTubeVideo";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
  youTubeVideo: youTubeVideoReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

// const store = createStore(rootReducer, applyMiddleware(thunk))
// store.subscribe(() => {
//     console.log(store.getState())
// })

export default store;
