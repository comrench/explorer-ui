import { fromJS } from "immutable";

export const initialState = fromJS({
  stocksInfo: {},
  loading: true,
  structure: [],
});

export const dashReducer = (state, { type, payload }) => {
  const dashState = state || initialState;
  switch (type) {
    case "GET_STOCK":
      return { loading: true };
    case "STOCK_RECEIVED":
      return {
        ...dashState,
        stocksInfo: payload,
        loading: false,
      };
    default:
      return dashState;
  }
};
