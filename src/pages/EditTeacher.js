import React, { useState, useContext, useEffect } from 'react';
import TeacherContext from '../context/TeacherContext/teacherContext';
import { useHistory } from 'react-router-dom';
import Teacher from '../components/Teacher';
import { Spinner } from 'react-bootstrap';

const EditTeacher = ({ match }) => {
    const history = useHistory();
    const teacherContext = useContext(TeacherContext);
    const buttonText = 'Return';
    console.log(match.params);

    const { selectedTeacher, loading, teacherUpdated } = teacherContext;

    useEffect(() => {
        if (teacherUpdated) {
            history.push('/teachers');
        }
        teacherContext.getTeacher(match.params.id);
    }, [teacherUpdated]);

    const onSubmit = (e) => {
        e.preventDefault();

        var today = new Date();
        var date =
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate();
        var time =
            today.getHours() +
            ':' +
            today.getMinutes() +
            ':' +
            today.getSeconds();
        var dateTime = date + ' ' + time;

        const teacher = {
            teacherName: e.target.teacherName.value,
            teacherEmail: e.target.teacherEmail.value,
            teacherStartDate: dateTime,
        };

        teacherContext.updateTeacher(match.params.id, teacher);
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

export default EditTeacher;
