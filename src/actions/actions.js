import C from '../constants/ActionType';

export const openModal = (obj) => {
    return {
        type: C.OPEN_MODAL,
        obj
    }
}

export const closeModal = (obj) => {
    return {
        type: C.CLOSE_MODAL,
        obj
    }
}