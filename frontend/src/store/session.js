// Import the csrfFetch function from './csrf'.
import { csrfFetch } from './csrf';

// Define action type constants for setting and removing a user.
const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

// Define an action creator to set a user with payload.
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};

// Define an action creator to remove a user.
const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

// Define an async thunk action 'login' that dispatches a login request to the backend API using csrfFetch,
// sets the user in the state, and returns the response.
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password
    })
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

// Restore session user thunk
export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch("/api/session");
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

// Define the initial state of the session slice with 'user' set to 'null'.
const initialState = { user: null };

// Define a reducer function to handle actions related to the session state,
// updating the 'user' field based on the action type.
const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

// Export the 'sessionReducer' as the default export.
export default sessionReducer;
