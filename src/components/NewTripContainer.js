import React, { useState } from 'react'
import { Form, Button, Segment, Header, Grid} from 'semantic-ui-react'
import { useHistory } from 'react-router'

const NewTripContainer = (props) => {
  
    const [formData, setformData] = useState({
        startLatitude:"",
        startLongitude:"",
        name:""
    });

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.id]: e.target.value });
    }

    const [unfinished, setUnfinished] = useState(false)
    const history = useHistory()

    const createTrip = (e) => {
        e.preventDefault()

        // if (formData.startLocation !== "") {
        const jwt = localStorage.getItem("jwt")
            return fetch("http://localhost:3000/createTrip", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`,
                },
                body: JSON.stringify({
                    trip: formData
                })
            })
            .then(r => r.json())
            .then((tripObj) => {
                props.setTrip(tripObj)
                history.push('/newTripCities')
            })

        // } else {
        //     setUnfinished(true)
        //     setTimeout(() => setUnfinished(false), 3000)
        // }
        
    }



    return (
        <Segment placeholder>
            <Grid columns={1} relaxed='very' stackable>
                <Grid.Column>
                    <Header as='h2'>Starting Location</Header>
                    <Form onSubmit={createTrip}>
                        <Form.Input
                            id='name'
                            label='tripName'
                            placeholder='My Trip'
                            // value={formData.tripName}
                            onChange={handleChange}
                        />
                        <Form.Input
                            id='startLatitude'
                            label='Starting Location Latitude'
                            placeholder='Input City Latitude'
                            // value={formData.startLocation}
                            onChange={handleChange}
                        />
                        <Form.Input
                            id='startLongitude'
                            label='Starting Location Longitude'
                            placeholder='Input City Longitude'
                            // value={formData.endLocation}
                            onChange={handleChange}
                        />
                        <Button type='submit' content='Start!' primary />
                    </Form>
                    {/* {unfinished ? <Message negative header='New Trip not completed' content="Please fill out all lines of the form to continue" /> : null} */}
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default NewTripContainer;