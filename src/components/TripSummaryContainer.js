import React, { useState, useEffect } from 'react'
import { Card, Icon, Button, Feed } from 'semantic-ui-react'
import {useParams } from 'react-router'
import LocationFeed from './LocationFeed'

const TripSummaryContainer = (props) => {

 console.log(props)

 return(
    // <div onClick={() => {
    // props.setTrip(props.tripObject)
    //     history.push(`/TripSummary/${props.id}`)
    // }}>
<div>    
{/* <Card>
    <Card.Content header={props.trip.name}/>
    <Card.Content extra>
        <Icon name='map signs'/>{props.startingLocation.name}-{props.endingLocation.name}
        </Card.Content>
</Card>
<Button.Group>
    <Button 
        positive
        content='View'
        onClick={() => {
          
            }}
    />
    <Button.Or />
    <Button
        negative
        content='Delete'
        onClick={() => {
            
        }}
    />
</Button.Group> */}

<Card>
    <Card.Content>
      <Card.Header>{props.trip.name}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        {props.trip.locations.map(locationObject => <LocationFeed key={locationObject.id} id={locationObject.id} locationObject={locationObject} trip={props.trip}  startingLocation={props.startingLocation} endingLocation={props.endingLocation} removeFromUserTrips={props.removeFromUserTrips}/>)}
      </Feed>
    </Card.Content>
  </Card>
</div>
)
}



export default TripSummaryContainer