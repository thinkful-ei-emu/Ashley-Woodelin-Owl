import React from 'react';

//name, avatar, and whether they are currently in the session. 
//Participants who are in the session should be shown before participants who have left.
class Participant extends React.Component {
    render(props){

       
       //if join in session should be true and should appear in chat

        return(
            <div className="session-participant">  
            
            <img src={this.props.avatar} alt={`${this.props.name}`} className="user-avatar"/> 
            <div className="participant-info">
            <h2>{this.props.name}</h2>
            <p>{this.props.inSession ? 'In Session' : ''}</p>
            </div>
                            
            </div>      
           
        );
    }
    
}

export default Participant;