import './App.css';
import {
	ContactUs,
	Footer,
	Header,
	Login,
	Page404,
	ServicePage,
	Signup,
	SingleService,
	NewTour,
	ManageTour,
	MyBooking,
	ManageBooking,
	BookingUpdate
} from './components';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
	return (
		<>
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact={true} path="/">
							<Home />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/tours">
							<ServicePage />
						</Route>
						<PrivateRoute path="/tour/:tourId">
							<SingleService />
						</PrivateRoute>
						<PrivateRoute path="/newtour">
							<NewTour />
						</PrivateRoute>
						<PrivateRoute path="/managetour">
							<ManageTour />
						</PrivateRoute>
						<PrivateRoute path="/mybooking">
							<MyBooking />
						</PrivateRoute>
						<PrivateRoute path="/managebooking">
							<ManageBooking />
						</PrivateRoute>
						<PrivateRoute path="/updatebooking/:updateId">
							<BookingUpdate />
						</PrivateRoute>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/signup">
							<Signup />
						</Route>
						<Route path="/contactus">
							<ContactUs />
						</Route>
						<Route path="*">
							<Page404 />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
