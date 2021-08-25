import { Card, Icon, Button } from 'semantic-ui-react'
import React from 'react'
import { useHistory } from 'react-router';



const UserTripCard = (props) => {
    
    const history = useHistory()
    let tripName = props.tripObject.name
    let locationsArray = props.tripObject.locations
    let startingCity = locationsArray[0]
    let endingCity = locationsArray[locationsArray.length-1]


    let deleteTrip = () => {
        const jwt = localStorage.getItem("jwt")
        fetch(`http://localhost:3000/deleteTrip/trips/${props.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`
                },
            })
            .then(() => {
                //delete from state 
                props.removeFromUserTrips(props.id)
            })
           
    }

    return(
                // <div onClick={() => {
                // props.setTrip(props.tripObject)
                //     history.push(`/TripSummary/${props.id}`)
                // }}>
        <div>    
            <Card>
                <Card.Content header={tripName}/>
                <Card.Content extra>
                    <Icon name='map signs'/>{startingCity.name}-{endingCity.name}
                    </Card.Content>
            </Card>
            <Button.Group>
                <Button 
                    positive
                    content='View'
                    onClick={() => {
                        props.setTrip(props.tripObject)
                        props.setStartingLocation(startingCity)
                        props.setEndingLocation(endingCity)
                        history.push(`/TripSummary/${props.id}`)
                        }}
                />
                <Button.Or />
                <Button
                    negative
                    content='Delete'
                    onClick={() => {
                        console.log(props.tripObject)
                        console.log(props.tripObject.id)
                        deleteTrip()
                    }}
                />
            </Button.Group>
        </div>
    )
}

export default UserTripCard