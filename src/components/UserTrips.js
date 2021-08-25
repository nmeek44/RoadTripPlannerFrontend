import { Component } from "react";
import { Grid } from "semantic-ui-react";
import React from 'react'
import UserTripsContainer from "./UserTripsContainer"

class UserTrips extends Component {
    render() {
        return (
            <Grid>
                <UserTripsContainer 
                    trip={this.props.trip}
                    user={this.props.user}
                    setTrip={this.props.setTrip}
                    getUserTrips={this.props.getUserTrips}
                    userTripsArray={this.props.userTripsArray}
                    setStartingLocation={this.props.setStartingLocation}
                    startingLocation={this.props.startingLocation}
                    setEndingLocation={this.props.setEndingLocation}
                    endingLocation={this.props.endingLocation}
                    removeFromUserTrips={this.props.removeFromUserTrips}
                />
            </Grid>
        )
    }
}

export default UserTrips