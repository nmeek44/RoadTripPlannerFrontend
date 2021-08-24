import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {Button} from 'semantic-ui-react';


function LoginPage({setUser, getUserTrips}) {

    const history = useHistory()


    const [formData, setformData] = useState({
        username:"",
        password:"",
    });


    const [errors, setErrors] = useState([])

    function handleChange(e) {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: formData
            }),
        })
        .then((r) => {
            return r.json().then((data) => {
                if (r.ok) {
                    return data;
                } else {
                    throw data;
                }
            });
        })
        .then((data) => {
            const {user, jwt} = data
            localStorage.setItem("jwt", jwt);
            setUser(user);
            //getUserTrips()
            history.push('/UserTrips')
        })
        .catch((error) => {
            setErrors(error.errors);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    autoComplete="off"
                    value={formData.username}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.map((error) => (
                    <p style={{ color: "red" }} key={error}>
                        {error}
                    </p>
                ))}
                <Button type='submit' content='Login' primary />
            </form>
        </div>
    )
}


export default LoginPage;