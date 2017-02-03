var React = require("react");

var Clock = React.createClass({

    convertSeconds: function(totalSeconds){
        var minutes = Math.floor(totalSeconds / 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;

        var seconds = totalSeconds % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return `${minutes}:${seconds}`;
    },
    render: function(){
        var {totalSeconds} = this.props;
        return (
            <div className="clock">
                <span>{this.convertSeconds(totalSeconds)}</span>
            </div>
        );
    }
});

module.exports = Clock; 