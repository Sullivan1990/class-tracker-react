import React, { useState, useContext, useEffect } from 'react';
import TeacherContext from '../context/TeacherContext/teacherContext';
import { useHistory } from 'react-router-dom';
import Teacher from '../components/Teacher';
import { Spinner } from 'react-bootstrap';

const ViewTeacher = ({ match }) => {
    const history = useHistory();
    const teacherContext = useContext(TeacherContext);
    const buttonText = 'Return';
    console.log(match.params);

    const { selectedTeacher, loading } = teacherContext;

    useEffect(() => {
        teacherContext.getTeacher(match.params.id);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        history.push('/teachers');
    };

    console.log(selectedTeacher);
    if (loading || selectedTeacher.teacherName === '') {
        return (
            <div>
                <div
                    className='row justify-content-center align-items-center'
                    style={{ height: '50vh' }}
                >
                    <Spinner animation='border' className='text-center' />
                </div>
            </div>
        );
    } else {
        return (
            <Teacher
                teacher={selectedTeacher}
                buttonText={buttonText}
                onSubmit={onSubmit}
            />
        );
    }
};

export default ViewTeacher;
