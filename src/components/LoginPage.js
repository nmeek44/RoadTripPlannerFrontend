import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {Form, Button, Segment, Header, Message } from 'semantic-ui-react';

// const LoginPage = (props) => {

//     const [badLogin, setBadLogin] = useState(false)
//     const history = useHistory()
//     let foundUserObject

//     const checkIfUserExists = (userString) => {

//         return fetch(props.backend+'users')
//             .then(r => r.json())
//             .then(fetchedArray => {
//                 foundUserObject = fetchedArray.find(userObject => userObject.username === userString)
//             })
//     }

//     const login = (e) => {
//         checkIfUserExists(e.target.loginInput.value)
//         .then(() => {
//              if (foundUserObject !== undefined) {
//                 props.setUser(foundUserObject)
//                 history.push('userTrips')
//              } else {
//                  setBadLogin(true)
//                  setTimeout(() => setBadLogin(false), 3000)
//              }
//             })
//     }

//     return (
//         <Segment placeholder>
//             <Header as='h2'>Existing User</Header>
//             <Form onSubmit={login}>
//                 <Form.Input
//                     id='loginInput'
//                     icon='user'
//                     iconPosition='left'
//                     label='Username'
//                     placeholder='Username'
//                 />
//                 <Button type='submit' content='Login' primary />
//             </Form>
//                 <Button content='New User?' secondary onClick={() => history.push('/createUser')}/>
//             {badLogin ? <Message negative header='User does not exist' content="This user is not registered. Try again, or register a new user" /> : null}
//         </Segment>

//     )
// }
// export const localToken = () => 'Token'

// const authHeaders = () => {
//     return {..}
// }


function LoginPage({setUser}) {

    const [formData, setformData] = useState({
        username:"",
        password:"",
    });

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
        .then(r => r.json())
        .then((user) => {
            localStorage.setItem("jwt", user.jwt);
            setUser(user);
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
                <Button type='submit' content='Login' primary />
            </form>
        </div>
    )
}


export default LoginPage;