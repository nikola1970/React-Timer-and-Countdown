var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var Main = require("./components/Main.js");
var Timer = require("./components/Timer.js");
var CountDown = require("./components/CountDown.js");

require("bootstrap/dist/css/bootstrap.min.css");
require("./styles/overrides.scss");


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={CountDown} />
            <Route path="timer" component={Timer} />
        </Route>
    </Router>,
    document.getElementById("app")
);

