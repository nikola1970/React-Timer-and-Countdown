var React = require("react");
var Clock = require("./Clock");
var CountDownForm = require("./CountDownForm");
var Controls = require("./Controls");

var CountDown = React.createClass({

    getInitialState: function(){
        return {
            count: 0,
            countDownStatus: "stopped"
        }
    },

    startTimer: function(){
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            if (newCount >= 0) {
                this.setState({count: newCount});
            } else {
                clearInterval(this.timer);
                this.setState({countDownStatus: "stopped"})
            }
            
        }, 1000);
    },

    handleSetCountDown: function(seconds){
        this.setState({
            count: seconds,
            countDownStatus: "started"
        })
    },

    componentDidUpdate: function(prevProps, prevState){
        if (this.state.countDownStatus !== prevState.countDownStatus) {
            switch(this.state.countDownStatus) {
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({count: 0});
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    handleStatusChange: function(newStatus){
        this.setState({countDownStatus: newStatus});
    },


    render: function() {
        
        var {count, countDownStatus} = this.state;
        var renderControlArea = () => {
            if (countDownStatus != "stopped") {
                return <Controls countDownStatus={countDownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountDownForm onSetCountDown={this.handleSetCountDown} />;
            }
        };
        return (
            <div className="countdown">
                <h1>Countdown</h1>
                <Clock totalSeconds={this.state.count} />    
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = CountDown;