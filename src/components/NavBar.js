import React, { useState } from 'react'
import { Menu, Message } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {

    const history = useHistory()
    const [loginPrompt, setLoginPrompt] = useState(false)

    return (
        <div style={{paddingBottom: '1%' } }>
        <Menu fluid widths={4}>
            <Menu.Item
                name='New Trip'
                onClick={() => {
                    if (props.user !== '') {
                        history.push('/newTrip')
                    } else {
                        setLoginPrompt(true)
                        setTimeout(() => setLoginPrompt(false), 2000)
                    }
                }}
            >
                New Trip
            </Menu.Item>
            {/* <Menu.Item
                name='Road Trip Planner'
            >
                Road Trip Planner
            </Menu.Item> */}
            <Menu.Item
                name='User Trip'
                onClick={() => {
                    if (props.user !== null) {
                        props.getUserTrips()
                        history.push('/userTrips')
                    } else {
                        setLoginPrompt(true)
                        setTimeout(() => setLoginPrompt(false), 2000)
                    }
                }}
            >
                User Trip
            </Menu.Item>
            <Menu.Item
                name='Login'
                onClick={() => {
                    history.push('/login')
                    // props.user === null ? history.push('/login') : history.push('/profile')
                }}
            >
                {/* {props.user === null ? 'Login' : 'Profile'} */}
            </Menu.Item>
        </Menu>
        {/* {loginPrompt ? <Message header='Please log in' content='This feature is only available to registered users. Please log in and try again.'/> : null} */}
    </div>
    )
}

export default NavBar