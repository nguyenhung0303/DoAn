import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListUsers = () => {
    const [listUsers, setListUsers] = useState([]);
    const navigate = useNavigate(); // Hook để điều hướng

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let res = await axios.get('https://reqres.in/api/users?page=2');
                setListUsers(res.data.data || []);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleOnClickUser = (user) => {
        navigate(`/user/${user.id}`); // Điều hướng tới trang chi tiết người dùng
    };

    return (
        <div className="list-user-container">
            <div className="title">Users</div>
            <div className="list-user-content">
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => (
                        <div
                            className="child"
                            key={item.id}
                            onClick={() => handleOnClickUser(item)}
                        >
                            {index + 1} - {item.email}

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ListUsers;
