import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = () => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
    })

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        setNewFriend({
            name: '',
            age: '',
            email: '',
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={newFriend.name} onChange={handleChange} />
            <label htmlFor='age'>Age</label>
            <input type='text' name='age' value={newFriend.age} onChange={handleChange} />
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' value={newFriend.email} onChange={handleChange} />
            <button type='submit'>Add Friend</button>
        </form>
    )
}

export default AddFriend;