var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Router = ReactRouter.Route;
var IndexRouter = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
    <Router>
        <Route path='/' component={Main}>                    /** This is ALWAYS ACTIVE. Kind of a header/footer area. Also activates child routes */
            <Route path='/home' component={Home} />          /** Since this is under Main component (path = '/'), it will be activated on home with main*/
        </Route>
    </Router>
);

module.exports = routes;