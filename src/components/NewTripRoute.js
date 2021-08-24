import { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import React, { useState } from 'react'
import NewTripRouteContainer from "./NewTripRouteContainer"

class NewTripRoute extends Component {
    render() {
        return (
            <Grid>
                <NewTripRouteContainer 
                    trip={this.props.trip}
                    setEndingLocation={this.props.setEndingLocation}
                />
            </Grid>
        )
    }
}

export default NewTripRoute