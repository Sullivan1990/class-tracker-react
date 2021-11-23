import React, { useContext, useEffect } from 'react';
import TeacherContext from '../context/TeacherContext/teacherContext';
import TeacherItem from './TeacherItem';
import { Spinner } from 'react-bootstrap';

const Teachers = () => {
    const teacherContext = useContext(TeacherContext);

    useEffect(() => {
        teacherContext.getTeachers();
    }, []);

    const { loading } = teacherContext;

    if (loading) {
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
            <div className='row'>
                <div className='col-2'></div>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>StartDate</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teacherContext.teacherList.map((teacher) => (
                                <tr>
                                    <TeacherItem
                                        key={teacher.teacherId}
                                        teacherItem={teacher}
                                    />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='col-2'></div>
            </div>
        );
    }
};

export default Teachers;
