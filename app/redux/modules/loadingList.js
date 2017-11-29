// define constants for different actions
const UPDATE = 'uhs/schedule/UPDATE';
const UPDATE_SUCCESS = 'uhs/schedule/UPDATE_SUCCESS';
const UPDATE_FAIL = 'uhs/schedule/UPDATE_FAIL';

const SEARCH = 'uhs/schedule/SEARCH';
const SEARCH_SUCCESS = 'uhs/schedule/SEARCH_SUCCESS';
const SEARCH_FAIL = 'uhs/schedule/SEARCH_FAIL';
const UPDATE_TEST = 'UPDATE_TEST'
// initial state object, your may put more initial object here if needed
const initialState = {
  loading: false
};

// this will be used to `dispatch` actions, each `case` condition deal a kind of `action`
export default function loadingList(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
    case SEARCH:
      return {
        ...state,
        loading: true
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResult: action.result.data
      };
    case UPDATE_FAIL:
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.result.error
      };
      case UPDATE_TEST: 
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
// internal actions here
function _updateSchedule(data) {
  return {
    types: [UPDATE, UPDATE_SUCCESS, UPDATE_FAIL],
    promise: (client) => client.post('/schedule/update', {data})
  };
}

// this show how to `dispatch` sequential actions, See `clientMiddleware.js`
export function updateSchedule(data, callback) {
  return (dispatch) => {
    dispatch(_updateSchedule(data))
      .then(callback);
  };
}
// your action here, if it may have multiple `type` of result, use `types` field;
// note `post` (`data`) & `get` (`params`) has different arguments. See `clientMiddleware.js` under `redux/middleware` for detail
export function searchSchedule(params) {
  return {
    types: [SEARCH, SEARCH_SUCCESS, SEARCH_FAIL],
    promise: (client) => client.get('/schedule/search', {params}),
  };
}


export function updateDispathcer () {
  return  (dispatch)=>{
    dispatch(updateTest())
   console.log('test has been dispatched')
  }
}
export function updateTest (){
  return {
    type : UPDATE_TEST
  }
}