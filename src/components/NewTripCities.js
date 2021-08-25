import { Component } from "react";
import { Grid } from "semantic-ui-react";
import React from 'react'
import NewTripCitiesContainer from "./NewTripCitiesContainer"

class NewTripCities extends Component {
    render() {
        return (
            <Grid>
                <NewTripCitiesContainer 
                    trip={this.props.trip}
                    setEndingLocation={this.props.setEndingLocation}
                    startingLocation={this.props.startingLocation}
                />
            </Grid>
        )
    }
}

export default NewTripCities