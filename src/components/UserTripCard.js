import { Card, Icon, Button } from 'semantic-ui-react'
import React from 'react'
import { useHistory } from 'react-router';



const UserTripCard = (props) => {
    
    const history = useHistory()
    let tripName = props.tripObject.name
    let locationsArray = props.tripObject.locations
    let startingCity = locationsArray[0].name
    let endingCity = locationsArray[locationsArray.length-1].name
    return(
                // <div onClick={() => {
                // props.setTrip(props.tripObject)
                //     history.push(`/TripSummary/${props.id}`)
                // }}>
        <div>    
            <Card>
                <Card.Content header={tripName}/>
                <Card.Content extra>
                    <Icon name='map signs'/>{startingCity}-{endingCity}
                    </Card.Content>
            </Card>
            <Button.Group>
                <Button 
                    positive
                    content='View'
                    onClick={() => {
                        props.setTrip(props.tripObject)
                        history.push(`/TripSummary/${props.id}`)
                        }}
                />
                <Button.Or />
                <Button
                    negative
                    content='Delete'
                    onClick={() => {}}
                />
            </Button.Group>
        </div>
    )
}

export default UserTripCard