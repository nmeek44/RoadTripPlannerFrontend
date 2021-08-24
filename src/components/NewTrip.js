import { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import React, { useState } from 'react'
import NewTripContainer from "./NewTripContainer"

class NewTrip extends Component {
    render() {
        return (
            <Grid>
                <NewTripContainer
                setTrip={this.props.setTrip} 
                trip={this.props.trip}
                user={this.props.user}
                />
            </Grid>
        )
    }
}

export default NewTrip