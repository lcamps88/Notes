export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';


export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}

export function selectNote(index) {
    return { type: SELECT_NOTE, id: index };
 }

 export function editNote(index, edit) {
  return { type: EDIT_NOTE, id: index ,edit:edit };
}

