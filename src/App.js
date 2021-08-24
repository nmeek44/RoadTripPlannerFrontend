import './App.css';
import React, {Component, useEffect} from 'react';
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


const backend = 'http://localhost:3000/'
class App extends Component {
  state = {
    // userList: [],
    // tripList: [],
    // activityList: [],
    user: null,
    trip: null,
    startingLocation: null,
    locationList: [],
    endingLocation: null,
  }

  // componentDidMount(setUser) {
  //   this.fetchLists()
  // }

  // fetch("http://localhost:3000", {
  // method: "GET",
  // headers: {
  //   Authorization: `Bearer <token>`,
  // },
  // }); 

  // fetchLists = () => {
  //   fetch(backend+'users')
  //   .then(r=> r.json())
  //   .then(userList => this.setState())

  //   fetch(backend+'trips')
  //   .then(r=> r.json())
  //   .then(tripList => this.setState())

  //   fetch(backend+'locations')
  //   .then(r=> r.json())
  //   .then(locationList => this.setState())

  //   fetch(backend+'activities')
  //   .then(r=> r.json())
  //   .then(activityList => this.setState())
  // }

  componentDidMount() {
    const currentTrip = this.state.trip

      if (currentTrip === null) {
        
      } else {
        fetch(`http://localhost:3000/${currentTrip.locations}`, {
          method: "GET",
          headers: {
          Authorization: `Bearer <token>`,
          },
        })
        .then(r=> r.json())
        .then((locationObjects)=> (
          this.setState({
            locationList: [locationObjects]
          })
        )); 
      }
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


  render() {

    return (
     <Router>
        <div className="App">
        <NavBar user={this.props.user} setUser={this.setUser}/>
          <header className="App-header">
            <Route path='/'>
              {/* <NavBar/> */}
            </Route>
            <Switch>
              <Route exact path ='/login'>
                <LoginPage setUser={this.setUser} backend={backend}/>
              </Route>
              <Route exact path='/createUser'>
                <CreateUserPage setUser={this.setUser} backend={backend}/>
              </Route>
              <Route exact path ='/newTrip'>
                <NewTrip setTrip={this.setTrip} trip={this.state.trip} user={this.state.user}/>
              </Route>
              <Route exact path='/newTripRoute'>
                <NewTripRoute trip={this.state.trip}/>
              </Route>
              <Route exact path='/newTripCities'>
                <NewTripCities trip={this.state.trip} setEndingLocation={this.setEndingLocation}/>
              </Route>
              <Route exact path='/newTripActivities'>
                <NewTripActivities trip={this.state.trip}/>
              </Route>
              <Route exact path='/tripSummary'>
                <TripSummary />
              </Route>
              <Route exact path='/tripPlans'>
                <TripPlans />
              </Route>
              <Route exact path='/userTrips'>
                <UserTrips user={this.props.user}/>
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
