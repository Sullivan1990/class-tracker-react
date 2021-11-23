import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const TeacherItem = (teacherItem) => {
    const { teacher } = teacherItem.teacherItem;
    
    let teacherDate = new Date(teacherItem.teacherItem.teacherStartDate);

    return (
        <Fragment>
            <td>{teacherItem.teacherItem.teacherId}</td>
            <td>{teacherItem.teacherItem.teacherName}</td>
            <td>{teacherItem.teacherItem.teacherEmail}</td>
            <td>{teacherDate.toDateString()}</td>
            <td className='justify-content-between'>
                <Link
                    to={`/Teacher/Edit/${teacherItem.teacherItem.teacherId}`}
                    className='mx-2'
                >
                    <i
                        className='fa fa-edit fa-2x'
                        style={{ color: '#6b8fd1' }}
                    />
                </Link>
                <Link
                    to={`/Teacher/Details/${teacherItem.teacherItem.teacherId}`}
                    className='mx-2'
                >
                    <i
                        className='fa fa-align-center fa-2x'
                        style={{ color: '#6b8fd1' }}
                    />
                </Link>
                <Link
                    to={`/Teacher/Edit/${teacherItem.teacherItem.teacherId}`}
                    className='mx-2'
                >
                    <i
                        className='fa fa-trash fa-2x'
                        style={{ color: '#6b8fd1' }}
                    />
                </Link>
            </td>
        </Fragment>
    );
};

export default TeacherItem;
