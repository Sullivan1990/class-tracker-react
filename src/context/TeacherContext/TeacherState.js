import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import TeacherContext from './teacherContext';
import TeacherReducer from './teacherReducer';

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

const TeacherState = (props) => {
    const initialState = {
        selectedTeacher: {},
        teacherList: [],
        loading: false,
        loaded: false,
        teacherUpdated: false,
    };

    let apiURL = 'https://localhost:44355/api/';

    const [state, dispatch] = useReducer(TeacherReducer, initialState);

    // Get Teachers
    const getTeachers = async () => {
        
        setLoading();

        const res = await axios.get(apiURL + 'teacher');

        console.log(res.data);

        dispatch({
            type: SET_TEACHERS,
            payload: res.data,
        });

        console.log('teachers may be loaded');
    };
    // Get Teacher
    const getTeacher = async (teacherId) => {
        setLoading();

        const res = await axios.get(apiURL + `teacher/${teacherId}`);

        console.log(res.data);

        dispatch({
            type: GET_TEACHER,
            payload: res.data,
        });

        dispatch({
            type: CLEAR_UPDATED,
        });
    };

    const updateTeacher = (teacherId, teacher) => {
        setLoading();

        teacher.teacherId = teacherId;

        const res = axios
            .put(apiURL + `teacher/${teacherId}`, teacher)
            .then((res) => {
                setUpdated();
                console.log(
                    'teacher should be updated with status: ' + res.status
                );
                dispatch({
                    type: UPDATE_TEACHER,
                });
                console.log(initialState.teacherUpdated);
            });
    };

    // Create Teacher
    const createTeacher = (newTeacher) => {
        axios
            .post(apiURL + 'teacher', newTeacher)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        // post the list
        // Return to the List Page (re-get the list)
    };

    const deleteTeacher = (teacherId) => {};
    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    const setUpdated = () => dispatch({ type: SET_UPDATED });

    return (
        <TeacherContext.Provider
            value={{
                teacherList: state.teacherList,
                selectedTeacher: state.selectedTeacher,
                loading: state.loading,
                loaded: state.loaded,
                getTeacher,
                getTeachers,
                createTeacher,
                updateTeacher,
                deleteTeacher,
                setLoading,
            }}
        >
            {props.children}
        </TeacherContext.Provider>
    );
};

export default TeacherState;
