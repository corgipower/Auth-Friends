import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

const FriendsList = () => {
    const [friends, setFriends] = useState([{
        age: '',
        email: '',
        id: '',
        name: '',
    }]);

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => console.log(err));
    })
    
    return(
        <div>
            {friends.map(friend => (
                <p key={friend.id}>{friend.name} {friend.age} {friend.email}</p>
            ))}
            <AddFriend />
        </div>
    )
}

export default FriendsList;