import { Middleware } from "redux";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action); // Dispatch action and get the result

  // Get the updated state
  const state = store.getState();

  // Save only the specific reducer's state (e.g., 'user')
  localStorage.setItem("user", JSON.stringify(state.user));

  return result;
};

export default localStorageMiddleware;
