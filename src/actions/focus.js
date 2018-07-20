import * as C from '../constants/ActionType';

export const setFocus = (title, content, id) => ({
    type: C.SET_FOCUS,
    title,
    content,
    id
});
