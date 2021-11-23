import React from 'react';
import { useState } from 'react';

const Teacher = (props) => {
    const { teacher, onSubmit, buttonText } = props;

    const [name, setName] = useState(teacher.teacherName);
    const [email, setEmail] = useState(teacher.teacherEmail);

    return (
        <div className='row justify-content-center mt-4'>
            <div className='col-5 border justify-content-start'>
                <form onSubmit={onSubmit}>
                    <div className='form-group p-1 my-2 text-left'>
                        <label htmlFor='teachername'>Teacher Name</label>
                        <input
                            type='text'
                            name='teacherName'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='form-group p-1 my-2 text-left'>
                        <label htmlFor='teacherEmail'>Teacher Email</label>
                        <input
                            type='text'
                            name='teacherEmail'
                            className='form-control '
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <input type='submit' value={buttonText} />
                </form>
            </div>
        </div>
    );
};

export default Teacher;
