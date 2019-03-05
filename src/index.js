import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


//ButtonClicks Component made
class ButtonClicks extends React.Component {
    
    //ES6 Constructor sets the state of clicks to 0
    constructor(props){
        super(props);
        this.state = {
            clicks: 0

        }

        //Setting the context of the .this 
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    //Changes the click state
    onButtonClick(){
        this.setState({
            clicks: this.state.clicks + 1
        });
    }


    
    //The actual html of the button
    render(){
        return (
            <div>
                <h1>This is my button clicker made with react. I hope you enjoy</h1>
                     <h3>Clicks: {this.state.clicks}</h3>   
                     <button onClick={this.onButtonClick}>Click Me!!</button> 
            </div>    
        );
    }
}





ReactDOM.render(<ButtonClicks />, document.getElementById('root'));
