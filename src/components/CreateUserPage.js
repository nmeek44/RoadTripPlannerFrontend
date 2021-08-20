import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Form, Button, Segment, Header, Message } from 'semantic-ui-react'

// const CreateUserPage = (props) => {

//     const [badRegister, setBadRegister] = useState(false)
//     const history = useHistory()
//     let foundUserObject

//     const checkIfUserExists = (userString) => {

//         return fetch(props.backend+'users')
//             .then(r => r.json())
//             .then(fetchedArray => {
//                 foundUserObject = fetchedArray.find(userObject => userObject.username === userString)
//             })
//     }

//     const register = (e) => {
//         checkIfUserExists(e.target.registerInput.value)
//         .then(() => {
//              if (foundUserObject === undefined) {
//                 let newUserObject = {
//                     username: e.target.registerInput.value
//                 }
//                 let postConfig = {
//                     method: "POST",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(newUserObject),
//                   }
//                 fetch(props.backend+'users', postConfig)
//                   .then(r => r.json())
//                   .then(postedUserObject => {
//                       props.setUser(postedUserObject)
//                       history.push('/newTrip')
//                   })
//              } else {
//                  setBadRegister(true)
//                  setTimeout(() => setBadRegister(false), 3000)
//              }
//             })
//     }

    
//     return (
//         <Segment placeholder>
//             <Header as='h2'>New User</Header>
//             <Form onSubmit={register}>
//                 <Form.Input
//                     id='registerInput'
//                     icon='user'
//                     iconPosition='left'
//                     label='Username'
//                     placeholder='Username'
//                 />
//                 <Button content='Register' primary />
//             </Form>
//             {badRegister ? <Message negative header='User already exists' content="This user is already registered. Log in with this user, or create a different user." /> : null}
//             <Button content='Existing User?' secondary onClick={() => history.push('/login')}/>
//         </Segment>
//     )

function CreateUserPage({setUser}) {

    const [formData, setformData] = useState({
        username:"",
        password:"",
    });

    function handleChange(e) {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3000/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: formData
            }),
        })
        .then(r => r.json())
        .then((data) => {
            localStorage.setItem("jwt", data.jwt);
            setUser(data.user);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create User</h1>
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
                <Button type='submit' content='Create User' primary />
            </form>
        </div>
    )
}

export default CreateUserPage