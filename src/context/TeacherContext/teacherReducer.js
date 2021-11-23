import {
    GET_TEACHER,
    GET_TEACHERS,
    CREATE_TEACHER,
    UPDATE_TEACHER,
    DELETE_TEACHER,
    SET_LOADING,
    SET_TEACHERS,
    SET_LOADED,
    SET_UPDATED,
    CLEAR_UPDATED,
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_TEACHER:
            return {
                ...state,
                selectedTeacher: action.payload,
                loading: false,
            };
        case SET_TEACHERS:
            return {
                ...state,
                teacherList: action.payload,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_TEACHER:
            return {
                ...state,
                loading: false,
            };
        case SET_UPDATED:
            return {
                ...state,
                teacherUpdated: true,
            };
        case CLEAR_UPDATED:
            return {
                ...state,
                teacherUpdated: false,
            };
        default:
            return state;
    }
};
