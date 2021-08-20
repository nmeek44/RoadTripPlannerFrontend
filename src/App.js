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
    userList: [],
    tripList: [],
    locationList: [],
    activityList: [],
    user: null,
  }

  setUser = (userObject) => {
    this.setState({
      user: userObject
    })
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

  fetchLists = () => {
    fetch(backend+'users')
    .then(r=> r.json())
    .then(userList => this.setState())

    fetch(backend+'trips')
    .then(r=> r.json())
    .then(tripList => this.setState())

    fetch(backend+'locations')
    .then(r=> r.json())
    .then(locationList => this.setState())

    fetch(backend+'activities')
    .then(r=> r.json())
    .then(activityList => this.setState())
  }

  setUser = (userObject) => {
    this.setState({
      user: userObject
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
                <NewTrip />
              </Route>
              <Route exact path='/newTripRoute'>
                <NewTripRoute />
              </Route>
              <Route exact path='/newTripCities'>
                <NewTripCities />
              </Route>
              <Route exact path='/newTripActivities'>
                <NewTripActivities />
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
