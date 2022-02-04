import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import Employements from './pages/admin/Employements';
import Jobs from './pages/admin/Jobs';
// import Reports from './pages/admin/Reports';
import User from './pages/admin/Users';
import SignIn from './pages/client/Signin';
import SignUp from './pages/client/Signup';
import Headers from './components/shared/Header';
import Home from './pages/client/Home';
import Categories from './pages/admin/Categories';
import UserProfile from './pages/admin/UserProfile';
import Blog from './pages/client/Blog';
import ProfileContent from './pages/client/Profile';
import MyProfileContent from './pages/client/MyProfile';
import PrivateRoute from './components/hoc/PrivateRoute';
import CustomRoute from './components/hoc/CustomRoute';
import AboutPage from './pages/client/About';
import PrivacyPolicy from './pages/client/Privacy';
import TermsAndConditions from './pages/client/Terms';
import Users from './pages/client/Users';
import Adverts from './pages/admin/Adverts';

function ClientRoutes() {
  return (
    <>
      <Headers />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/blog" component={Blog} />
      <CustomRoute
        exact
        path="/user_profile/:id"
        component={ProfileContent}
      />
      <CustomRoute
        exact
        path="/profile"
        component={MyProfileContent}
      />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/privacy"
        component={PrivacyPolicy}
      />
      <Route
        exact
        path="/terms"
        component={TermsAndConditions}
      />
      <Route exact path="/workers" component={Users} />
    </>
  );
}

function Routes() {
  return (
    <Switch>
      <PrivateRoute
        path="/dashboard"
        component={Dashboard}
        exact
      />
      <PrivateRoute path="/jobs" component={Jobs} exact />
      <PrivateRoute
        path="/employements"
        component={Employements}
        exact
      />
      <PrivateRoute path="/users" component={User} exact />
      <PrivateRoute
        path="/admin/adverts"
        component={Adverts}
        exact
      />
      <PrivateRoute
        path="/admin/categories"
        component={Categories}
        exact
      />
      <PrivateRoute
        path="/admin/user_profile/:id"
        component={UserProfile}
      />
      <ClientRoutes />
      <Route path="*" exact>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h2>404 Not Found</h2>
              <p>
                Something went wrong we couldn't find what
                your looking for
              </p>
              <Link to="/" className="btn btn-primary">
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default Routes;
