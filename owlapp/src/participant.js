import React from 'react';

//name, avatar, and whether they are currently in the session. 
//Participants who are in the session should be shown before participants who have left.
class Participant extends React.Component {
    render(){
        return(
            <div className="session-participant">      
            <h2>{this.props.name}</h2>
            <img src="{this.props.avatar}" alt="{this.props.name}" className="user-avatar"/> 
            <p>{this.props.inSession}</p>                    
            </div>      
           
        );
    }
    
}

export default Participant;