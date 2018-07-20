import * as C from '../constants/ActionType';

const initialState = {
    modals: [],
}

 const modal = (state = initialState, action) => {
    switch (action.type){
        case C.OPEN_MODAL:
            return {
                ...state,
                modal: state.modals.concat(action.obj)
            }
        case C.CLOSE_MODAL:
            return {
                ...state,
                modals: state.modals.filter(item => item.id !== action.obj.id)
            }
        default:
            return state
    }
}

export default modal;