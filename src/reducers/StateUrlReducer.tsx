import { Reducer } from 'redux';

interface StateUrlState {
  urls: UrlItem[];
}

interface UrlItem {
  url: string;
  state: boolean;
  data: string;
}

const initialState: StateUrlState = {
  urls: [
    { url: 'https://google.com', state: true, data: 'Datos de prueba' }
  ]
};

// Definir las acciones
interface AddUrlAction {
  type: 'ADD_URL';
  payload: UrlItem;
}

interface UpdateStateAction {
  type: 'UPDATE_STATE';
  payload: {
    index: number;
    state: boolean;
  };
}

interface UpdateDataAction {
  type: 'UPDATE_DATA';
  payload: {
    index: number;
    data: string;
  };
}

type StateUrlAction = AddUrlAction | UpdateStateAction | UpdateDataAction;

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
    case 'UPDATE_STATE':
      return {
        ...state,
        urls: state.urls.map((urlItem, index) =>
            index === action.payload.index
                ? { ...urlItem, state: action.payload.state }
                : urlItem
        )
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        urls: state.urls.map((urlItem, index) =>
            index === action.payload.index
                ? { ...urlItem, data: action.payload.data }
                : urlItem
        )
      };
    default:
      return state;
  }
};

export default StateUrlReducer;