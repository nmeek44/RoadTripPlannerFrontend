import React, { useEffect, useState } from 'react'
import { Form, Button, Segment, Header, Divider, Grid, Message } from 'semantic-ui-react'
import { useHistory } from 'react-router'

const NewTripRouteContainer = (props) => {
  
    const tripId = props.trip.id

    const [endingformData, setendingformData] = useState({
        name:"",
        locationLatitude:"",
        locationLongitude:"",
        trip_id: tripId
    });

    const [locationformData, setlocationformData] = useState({
        name:"",
        locationLatitude:"",
        locationLongitude:"",
        trip_id: tripId
    });

    const handleChange = (e) => {
        setendingformData({ ...endingformData, [e.target.name]: e.target.value });
        setlocationformData({ ...locationformData, [e.target.name]: e.target.value });
    }

    const [unfinished, setUnfinished] = useState(false)
    const history = useHistory()

    const createLocations = (e) => {
        e.preventDefault()

        // if (formData.startLocation !== "") {

            return fetch("http://localhost:3000/createLocation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    location: {locationformData, endingformData}
                })
            })
            .then(r => r.json())
            .then((tripObj) => {
                props.setEndingLocation(tripObj.endingformData)
                history.push('/newTripRoute')
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
                    <Header as='h2'>New Trip Desitinations</Header>
                    <Form onSubmit={createLocations}>
                        <Form.Input
                            id='newLocation'
                            label='New Location'
                            placeholder='Input New City Destination'
                            // value={formData.startLocation}
                            onChange={handleChange}
                        />
                        <Form.Input
                            id='endingLocation'
                            label='Ending Location'
                            placeholder='Input the final Destination of your Trip'
                            // value={formData.endLocation}
                            onChange={handleChange}
                        />
                        <Button type='submit' content='Add New Cities!' primary />
                    </Form>
                    {/* {unfinished ? <Message negative header='New Trip not completed' content="Please fill out all lines of the form to continue" /> : null} */}
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default NewTripRouteContainer;