import { Component } from "react";
import { Grid } from "semantic-ui-react";
import React from 'react'
import UserTripsContainer from "./UserTripsContainer"

class UserTrips extends Component {
    render() {
        console.log(this.props)
        return (
            <Grid>
                <UserTripsContainer 
                    trip={this.props.trip}
                    user={this.props.user}
                    setTrip={this.props.setTrip}
                    getUserTrips={this.props.getUserTrips}
                    userTripsArray={this.props.userTripsArray}
                />
            </Grid>
        )
    }
}

export default UserTrips