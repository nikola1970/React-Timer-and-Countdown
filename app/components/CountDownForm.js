var React = require("react");


var CountDownForm = React.createClass({

    onSubmit: function(e){
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;
        if (strSeconds.match(/^[0-9]+$/)) {
            this.refs.seconds.value = "";
            this.props.onSetCountDown(parseInt(strSeconds, 10));
        } else {
            alert("Enter a valid number!");
            this.refs.seconds.value = "";   
        }
    },

    render: function(){
        return (
            <div className="countdown-form">
                <form ref="name" onSubmit={this.onSubmit} className="countdown-form">
                    <div className="form-group">
                        <input type="text" ref="seconds" placeholder="Enter number of seconds" className="form-control" />
                        <button type="submit" className="btn btn-primary">Go!</button>
                    </div>
                </form>
            </div>
        );
    }


});


module.exports = CountDownForm;