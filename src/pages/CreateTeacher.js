import React, { useState, useContext } from 'react';
import TeacherContext from '../context/TeacherContext/teacherContext';
import { useHistory } from 'react-router-dom';
import Teacher from '../components/Teacher';

const CreateTeacher = () => {
    const history = useHistory();
    const teacherContext = useContext(TeacherContext);
    const buttonText = 'Create';

    const newTeacher = {
        teacherId: null,
        teacherName: '',
        teacherEmail: '',
        teacherStartDate: '',
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.teacherName.value);
        console.log(e.target.teacherEmail.value);

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
        teacherContext.createTeacher(teacher);
        history.push('/teachers');
    };

    return (
        <Teacher
            teacher={newTeacher}
            buttonText={buttonText}
            onSubmit={onSubmit}
        />
    );
};

export default CreateTeacher;
