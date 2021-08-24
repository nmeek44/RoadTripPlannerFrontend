import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router'
import {} from 'semantic-ui-react'

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

    return (
        <h1>Hello</h1>
    )
}

export default TripSummary