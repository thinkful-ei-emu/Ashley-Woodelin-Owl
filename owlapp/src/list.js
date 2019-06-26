import React from 'react';
import Participant from './participant'
import STORE from './store';

class List extends React.Component {

    render(props){

        //sort list so that inSession particpants appear before those not inSession
        let participantList = STORE.participants.sort(function compare(a, b){
            if(a.inSession < b.inSession){
                return 1;
            }
            else if(a.inSession > b.inSession){
                return -1;
            }
            else{
               
                return 0;
            }   
            
        }).map((participant) => {
           return (
            <Participant 
            key={participant.id} 
            name={participant.name}
            avatar={participant.avatar} 
            inSession={participant.inSession}
            onStage= {participant.onStage} 
              />
               
           )});  
           console.log(participantList);             

        //map particpant list 
        return(
            <div className="participant-list">
                {participantList}          
            </div>   

        )
            
            

        
    }

}

export default List;