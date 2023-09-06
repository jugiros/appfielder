import {Reducer} from 'redux';

export interface StateUrlState {
  urls: UrlItem[];
}

export interface UrlItem {
  name: string;
  url: string;
  state: boolean;
  data: string;
}

const initialState: StateUrlState = {
  urls: []
};

export interface AddUrlAction {
  type: 'ADD_URL';
  payload: UrlItem;
}

export interface DeleteUrlAction {
  type: 'DELETE_URL';
  payload: string;
}

export type StateUrlAction = AddUrlAction | DeleteUrlAction;

export const StateUrlReducer: Reducer<StateUrlState, StateUrlAction> = (
    state = initialState,
    action
) => {
  switch (action.type) {
    case 'ADD_URL':
      return {
        ...state,
        urls: [...state.urls, action.payload]
      };
    case 'DELETE_URL':
      return {
        ...state,
        urls: state.urls.filter((url) => url.url !== action.payload),
      };
    default:
      return state;
  }
};

export default StateUrlReducer;