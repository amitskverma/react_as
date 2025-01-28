import React, { useState } from 'react';
import { AddUser } from './apiService';
import './app.css';

const CreateUserDetails = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        age: '',
        work: '',
        mobile: '',
        email: '',
        address: '',
        salary: '',
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({}); // State to track form validation errors
    const [users, setUsers] = useState([]); // State to store the list of users

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    // Validate form inputs before submitting
    const validateForm = () => {
        const errors = {};

        // Name validation
        if (!newUser.name) {
            errors.name = 'Name is required.';
        }

        // Age validation (optional, should be a number)
        if (newUser.age && isNaN(Number(newUser.age))) {
            errors.age = 'Age must be a number.';
        }

        // Work validation
        const validWorkOptions = ['chef', 'waiter', 'manager'];
        if (!newUser.work || !validWorkOptions.includes(newUser.work)) {
            errors.work = 'Work must be one of: chef, waiter, manager.';
        }

        // Mobile validation
        if (!newUser.mobile) {
            errors.mobile = 'Mobile number is required.';
        } else if (!/^\d{10}$/.test(newUser.mobile)) {
            errors.mobile = 'Mobile number must be a valid 10-digit number.';
        }

        // Email validation (optional, must follow email format if provided)
        if (newUser.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(newUser.email)) {
            errors.email = 'Email must be a valid format.';
        }

        // Username validation
        if (!newUser.username) {
            errors.username = 'Username is required.';
        }

        // Password validation (optional)
        if (newUser.password && newUser.password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Validate the form before submitting
        if (!validateForm()) {
            return;
        }

        try {
            const createdUser = await AddUser(newUser); // Call the external AddUser function
            setUsers([...users, createdUser]); // Update the users list
            setNewUser({
                name: '',
                age: '',
                work: '',
                mobile: '',
                email: '',
                address: '',
                salary: '',
                username: '',
                password: '',
            }); // Clear the form
            setErrors({}); // Clear errors
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    };

    return (
        <div className="container_personlist">
            <div>
               <div>
                  <h3>Input detail</h3>
            <form className="user-form" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={handleInputChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={newUser.age}
                    onChange={handleInputChange}
                />
                {errors.age && <span className="error">{errors.age}</span>}

                <select name="work" value={newUser.work} onChange={handleInputChange}>
                    <option value="">Select Work</option>
                    <option value="chef">Chef</option>
                    <option value="waiter">Waiter</option>
                    <option value="manager">Manager</option>
                </select>
                {errors.work && <span className="error">{errors.work}</span>}

                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={newUser.mobile}
                    onChange={handleInputChange}
                />
                {errors.mobile && <span className="error">{errors.mobile}</span>}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleInputChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={newUser.address}
                    onChange={handleInputChange}
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={newUser.salary}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={handleInputChange}
                />
                {errors.username && <span className="error">{errors.username}</span>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={handleInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}

                <button type="submit">Add User</button>
            </form>
            </div>
            </div>  

        <div>
                {users.map((item, index) => (
                    <div className="flashcard" key={item.id || `user-${index}`}>
                        <h2>{item.name}</h2>
                        <p><span className="label">Age:</span> {item.age}</p>
                        <p><span className="label">Work:</span> {item.work}</p>
                        <p><span className="label">Mobile:</span> {item.mobile}</p>
                        <p><span className="label">Email:</span> {item.email}</p>
                        <p><span className="label">Address:</span> {item.address}</p>
                        <p><span className="label">Username:</span> {item.username}</p>
                    </div>
                ))}
            </div>


            
        </div>
    );
};

export default CreateUserDetails;
