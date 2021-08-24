import { Card, Icon } from 'semantic-ui-react'
import React from 'react'
import { useHistory } from 'react-router';



const UserTripCard = (props) => {
    
    const history = useHistory()
    let tripName = props.tripObject.name
    let locationsArray = props.tripObject.locations
    let startingCity = locationsArray[0].name
    let endingCity = locationsArray[locationsArray.length-1].name
    return(
        <Card>
            <div onClick={() => {
                props.setTrip(props.tripObject)
                history.push(`/TripSummary/${props.id}`)
            }}>
                <Card.Content header={tripName}/>
                <Card.Content extra>
                    <Icon name='map signs'/>{startingCity}-{endingCity}
                </Card.Content>
            </div>
        </Card>
    )
}

export default UserTripCard