
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = () => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: '',
    })

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', friend)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        setFriend({
            name: '',
            age: '',
            email: '',
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={friend.name} onChange={handleChange} />
            <label htmlFor='age'>Age</label>
            <input type='text' name='age' value={friend.age} onChange={handleChange} />
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' value={friend.email} onChange={handleChange} />
            <button type='submit'>Add Friend</button>
        </form>
    )
}

export default AddFriend;