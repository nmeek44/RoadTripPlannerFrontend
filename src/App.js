import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CreateUserPage from './components/CreateUserPage';
import NavBar from "./components/NavBar";
import NewTrip from "./components/NewTrip";
import NewTripRoute from "./components/NewTripRoute";
import NewTripCities from "./components/NewTripCities";
import NewTripActivities from "./components/NewTripActivities";
import TripSummary from "./components/TripSummary";
import TripPlans from "./components/TripPlans";
import UserTrips from "./components/UserTrips";
import ProfilePage from "./components/ProfilePage";


const backend = 'http://localhost:3000/'
class App extends Component {
  state = {
    // userList: [],
    // activityList: [],
    user: null,
    userTripsArray: [],
    trip: null,
    startingLocation: null,
    locationList: [],
    endingLocation: null,
  }


  componentDidMount() {
    const JWT = localStorage.getItem("jwt");
    if (JWT !== null) {
      fetch("http://localhost:3000/me", {
        headers: {
          Authorization: `Bearer ${JWT}}`,
        },
      })
      .then((r) => r.json())
      .then((user) => {
        this.setUser(user);
      })

      this.getUserTrips()
    }
  }

  removeFromUserTrips = (id) => {
    const newTrips = this.state.userTripsArray.filter(ut => ut.id !== id)

    this.setState({
      userTripsArray: newTrips
    })
  }

  setUser = (userObject) => {
    this.setState({
      user: userObject
    })
  }

  setTrip = (tripObject) => {
    this.setState({
      trip: tripObject
    })
  }

  // addCityToTripState = (cityObject) => {
  //   // const newTrip = this.state.trip.locations.push(cityObject)
    
  //   this.setState({
  //     trip: {
  //       locations: [cityObject]
  //     }
  //   })
  // }
  
  setStartingLocation = (locationObject) => {
    this.setState({
      startingLocation: locationObject
    })
  }
  

  setEndingLocation = (locationObject) => {
    this.setState({
      endingLocation: locationObject
    })
  }

  setUserTripsArray = (tripsArray) => {
    this.setState({
      userTripsArray: tripsArray
    })
  }

  getUserTrips = () => {
    const JWT = localStorage.getItem("jwt")
      fetch(`http://localhost:3000/trips`, {
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      })
      .then(r => r.json())
      .then(data => {
          this.setState({
            userTripsArray: data
          })
      })
  }

  render() {

    return (
     <Router>
        <div className="App">
        <NavBar user={this.state.user} setUser={this.setUser} getUserTrips={this.getUserTrips} userTripsArray={this.state.userTripsArray} />
          <header className="App-header">
            <Route path='/'>
              {/* <NavBar/> */}
            </Route>
            <Switch>
              <Route exact path ='/login'>
                <LoginPage setUser={this.setUser}  getUserTrips={this.getUserTrips} userTripsArray={this.state.userTripsArray} />
              </Route>
              <Route exact path ='/profile'>
                <ProfilePage />
              </Route>
              <Route exact path='/createUser'>
                <CreateUserPage setUser={this.setUser} backend={backend}/>
              </Route>
              <Route exact path ='/newTrip'>
                <NewTrip setTrip={this.setTrip} trip={this.state.trip} user={this.state.user} setStartingLocation={this.setStartingLocation} startingLocation={this.state.startingLocation} addCityToTripState={this.addCityToTripState} />
              </Route>
              <Route exact path='/newTripRoute'>
                <NewTripRoute trip={this.state.trip}/>
              </Route>
              <Route exact path='/newTripCities/:id'>
                <NewTripCities trip={this.state.trip} setEndingLocation={this.setEndingLocation} endingLocation={this.state.endingLocation} startingLocation={this.state.startingLocation}/>
              </Route>
              <Route exact path='/newTripActivities'>
                <NewTripActivities trip={this.state.trip}/>
              </Route>
              <Route exact path='/tripSummary/:id'>
                <TripSummary setTrip={this.setTrip} trip={this.state.trip} endingLocation={this.state.endingLocation} startingLocation={this.state.startingLocation}/>
              </Route> 
              <Route exact path='/tripPlans'>
                {this.user ? <TripPlans /> : <h1>Please login to use this feature</h1>}
              </Route>
              <Route exact path='/userTrips'>
                <UserTrips user={this.state.user} getUserTrips={this.getUserTrips} setUserTripsArray={this.setUserTripsArray} userTripsArray={this.state.userTripsArray} trip={this.state.trip} setTrip={this.setTrip} setStartingLocation={this.setStartingLocation} startingLocation={this.state.startingLocation} setEndingLocation={this.setEndingLocation} endingLocation={this.state.endingLocation} removeFromUserTrips={this.removeFromUserTrips}/>
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
