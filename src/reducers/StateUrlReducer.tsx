import { Reducer } from 'redux';

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
  urls: [
    { name: 'Google', url: 'https://google.com', state: true, data: 'Datos de prueba' },
    { name: 'Prueba 1', url: 'https://prueba.com', state: true, data: 'Datos de prueba 1' }
  ]
};

// Definir las acciones
interface AddUrlAction {
  type: 'ADD_URL';
  payload: UrlItem;
}

type StateUrlAction = AddUrlAction;

// Definir el reducer
const StateUrlReducer: Reducer<StateUrlState, StateUrlAction> = (
    state = initialState,
    action
) => {
  switch (action.type) {
    case 'ADD_URL':
      return {
        ...state,
        urls: [...state.urls, action.payload]
      };
    default:
      return state;
  }
};

export default StateUrlReducer;