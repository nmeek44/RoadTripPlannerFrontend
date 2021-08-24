import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import UserTripCard from './UserTripCard'

class UserTripsContainer extends Component {
    componentDidMount(){
        console.log(this.props)
        this.props.getUserTrips()
    }


    render() {
        console.log(this.props)
        return (
            <Card.Group itemsPerRow={1}>
                    {this.props.userTripsArray.map(tripObject => <UserTripCard key={tripObject.id} id={tripObject.id} getUserTrips={this.props.getUserTrips} tripObject={tripObject} setTrip={this.props.setTrip} trips={this.props.trips}/>)}
            </Card.Group>
        )
    }
}



export default UserTripsContainer

// useEffect(() => {
//     fetch('http://localhost:3000/trips')
//     .then(r => r.json())
//     .then(fetchedTripsArray => {
//         props.setUserTripsArray(fetchedTripsArray)
//     })
// }, [props.userTripsArray])