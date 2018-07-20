import * as C from '../constants/ActionType';

const INITIAL_STATE = [
    {
        title: 'Web Design',
        content: 'Analytics release series A financing launch party interaction design android angel investor.'
    },
    {
        title: 'UX Design',
        content: 'Analytics release series A financing launch party interaction design android angel investor.'
    },
    {
        title: 'Photogrpahy',
        content: 'Analytics release series A financing launch party interaction design android angel investor.'
    },
    {
        title: 'App Development',
        content: 'Analytics release series A financing launch party interaction design android angel investor.'
    }
];


export default function setFocus(state = INITIAL_STATE, action) {
    switch (action.type){
        case C.SET_FOCUS: {
            return [
                ...state,
                {
                    title: action.title,
                    content: action.content,
                    id: action.id
                }
            ]
        }
        default: return state;
    }
}