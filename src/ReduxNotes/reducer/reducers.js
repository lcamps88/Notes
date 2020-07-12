import { ADD_NOTE, REMOVE_NOTE,SELECT_NOTE,EDIT_NOTE} from '../action/actions';

const initialState = {
  notes: [], selected: 0
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NOTE:
      console.log('Notes',state.notes);
      return {
        
        notes:[ ...state.notes, {title: action.title,content: action.content}]
        
      };
    case REMOVE_NOTE:
      return {
        notes: state.notes.filter((note, index) => index !== action.id)
      };
    case SELECT_NOTE:
        return  {...state, selected : action.id}
   
    case EDIT_NOTE:
      let newArr = state.notes;
      newArr.splice(state.selected,1,action.edit);
      console.log(newArr)
      return {...state,notes:newArr}
    default:
      return state;
  };
}

export default rootReducer;

