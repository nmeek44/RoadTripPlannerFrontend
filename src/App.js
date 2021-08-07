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


const backend = 'http://localhost:3000/'
class App extends Component {
  state = {
    userList: [],
    tripList: [],
    locationList: [],
    activityList: [],
    username: '',
    userId: null,
  }

  componentDidMount() {
    this.fetchLists()
  }

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
      username: userObject.username,
      userId: userObject.id,
    })
  }


  render() {

    return (
     <Router>
        <div className="App">
        <NavBar setUser={this.setUser} userId={this.props.username} username={this.props.userId}/>
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
                <UserTrips />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
