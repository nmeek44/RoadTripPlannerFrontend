import React, { useState } from 'react'
import { Form, Button, Segment, Header, Grid } from 'semantic-ui-react'
import { useHistory } from 'react-router'

const NewTripCitiesContainer = (props) => {
  
    const tripId = props.trip.id

    const startingLocation = props.startingLocation

    const [locationformData, setlocationformData] = useState({
        name:"",
        trip_id: tripId
    });

    const [endingformData, setendingformData] = useState({
        name:"",
        trip_id: tripId
    });


    const handleChangeLocation = (e) => {
        setlocationformData({ ...locationformData, [e.target.id]: e.target.value });
    }

    

    const handleChangeEndLocation = (e) => {
        setendingformData({ ...endingformData, [e.target.id]: e.target.value });
    }
    const [unfinished, setUnfinished] = useState(false)
    const history = useHistory()

    const createLocations = (e) => {
        e.preventDefault()

        const jwt = localStorage.getItem("jwt")
        // if (formData.startLocation !== "") {

            return (
                fetch("http://localhost:3000/createLocation", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                    body: JSON.stringify({
                        location: locationformData
                    })
                })
                .then(r => r.json())
                .then((Obj) => {
                    
                    fetch("http://localhost:3000/createLocation", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${jwt}`,
                        },
                        body: JSON.stringify({
                            location: endingformData
                        })
                    })
                    .then(r => r.json())
                    .then((tripObj) => {
                    props.setEndingLocation(tripObj.endingformData)
                    history.push(`/TripSummary/${tripId}`)
                    })
                })

                )
        // } else {
        //     setUnfinished(true)
        //     setTimeout(() => setUnfinished(false), 3000)
        // }
        
    }


    return (
        <Segment placeholder>
            <Grid columns={1} relaxed='very' stackable>
                <Grid.Column>
                    <Header as='h2'>New Trip Destinations</Header>
                    <Form onSubmit={createLocations}>
                        <Form.Input
                            id='name'
                            label='New Location'
                            placeholder='Input New City Destination'
                            // value={formData.startLocation}
                            onChange={handleChangeLocation}
                        />
                        <Form.Input
                            id='name'
                            label='Ending Location'
                            placeholder='Input the final Destination of your Trip'
                            // value={formData.endLocation}
                            onChange={handleChangeEndLocation}
                        />
                        <Button type='submit' content='Add New Cities!' primary />
                    </Form>
                    {/* {unfinished ? <Message negative header='New Trip not completed' content="Please fill out all lines of the form to continue" /> : null} */}
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default NewTripCitiesContainer;