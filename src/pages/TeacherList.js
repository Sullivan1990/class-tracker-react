import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Teachers from '../components/Teachers';
import TeacherContext from '../context/TeacherContext/teacherContext';

const TeacherList = () => {
    const teacherContext = useContext(TeacherContext);

    return (
        <div>
            <h1>Teacher List</h1>
            <Link to='/Teacher/Create' className='btn btn-dark'>
                Create New Teacher
            </Link>
            <Teachers teachers={teacherContext.teacherList} />
        </div>
    );
};

export default TeacherList;
