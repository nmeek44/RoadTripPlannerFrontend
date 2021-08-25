import React, { useState, useEffect } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import {useParams } from 'react-router'
import TripSummaryContainer from './TripSummaryContainer'

const TripSummary = (props) => {
 const {id} = useParams()

 useEffect(() => {
    const JWT = localStorage.getItem("jwt");

    if (JWT !== null) {
      fetch(`http://localhost:3000/trips/${id}`, {
        headers: {
          Authorization: `Bearer ${JWT}}`,
        },
    })
     .then(res => res.json())
     .then(returnTrip => props.setTrip(returnTrip))
    }
 }, [id])

 console.log(props)

    return(
        <div>
            <TripSummaryContainer trip={props.trip} endingLocation={props.endingLocation} startingLocation={props.startingLocation}/>
        </div>
    )
}

export default TripSummary