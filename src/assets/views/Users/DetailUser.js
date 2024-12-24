import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DetailUser = () => {
    const { id } = useParams(); // Lấy tham số từ URL
    const [user, setUser] = useState({});
    const navigate = useNavigate(); // Hook để điều hướng

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(res.data.data || {});
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        if (id) {
            fetchUser();
        }
    }, [id]);

    const isEmptyObj = Object.keys(user).length === 0;

    const handleClickBack = () => {
        navigate('/user');
    };

    return (
        <>
            <div>DetailUser id: {id}</div>
            {isEmptyObj === false && (
                <>
                    <div>Name: {user.first_name}</div>
                    <div>Mail: {user.email}</div>
                    <div>
                        <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
                    </div>
                    <button type="button" onClick={handleClickBack}>Back</button> {/* Nút quay lại */}
                </>
            )}
        </>
    );
};

export default DetailUser;
