var React = require("react");
var {Link, IndexLink} = require("react-router");


var Navigation = props => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">React Timer and Countdown App</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><IndexLink to="/" activeClassName="active-link">Countdown</IndexLink></li>
                    <li><Link to="timer" activeClassName="active-link">Timer</Link></li>
                </ul>
             </div>
        </nav>
    );
}


module.exports = Navigation;