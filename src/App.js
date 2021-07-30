import logo from './logo.svg';
import './App.css';

const backend = 'http://localhost:3000/'
class App extends Component {
  state = {
    userList: [],
    tripList: [],
    locationList: [],
    activityList: [],
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


  render() {

    return (
     <Router>
        <div className="App">
        <NavBar/>
          <header className="App-header">
            <Route path='/'>
              {/* <TitleBar?/> */}
            </Route>
            <Switch>
              <Route exact path ='/login'>
                <LoginPage/>
              </Route>
              <Route exact path='/createUser'>
                <CreateUserPage/>
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
