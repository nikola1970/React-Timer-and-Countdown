var React = require("react");
var Clock = require("./Clock");
var Controls = require("./Controls");

var Timer = React.createClass({
    getInitialState: function(){
        return {
            count: 0,
            timerStatus: "stopped"
        };
    },

    handleStatusChange: function(newChange){
        this.setState({
            timerStatus: newChange
        });
    },

    startTimer: function(){
        this.timer = setInterval(() =>{
            var newTime = this.state.count + 1;
            this.setState({count: newTime});
        }, 1000);
    },
    
    componentDidUpdate: function(prevProps, prevState){
        if (prevState.timerStatus !== this.state.timerStatus) {
            switch(this.state.timerStatus) {
                case "started":
                    this.startTimer()
                    break;
                case "stopped":
                    this.setState({count: 0})
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    render: function(){
        var {count, timerStatus} = this.state;
        return(
            <div className="timer">
                <h1>Timer</h1>
                <Clock totalSeconds={count}/>
                <Controls countDownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;
