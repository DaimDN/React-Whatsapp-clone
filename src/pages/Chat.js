import React, { Component } from 'react'
import Input from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button';
import '../pages/chat.css';

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state ={
            message : [
                {"Name": "daim",
                "Group" : "Mugals",
                "Message" : "Hello Everyone, How is everyone doing and how is life",
                "Date" : "12:05 PM"
            
            }
    
            
            ]
        }
        
    this.formHandler = this.formHandler.bind(this);
    this.SearchHandler = this.SearchHandler.bind(this);
    }


    formHandler(event){

        var Name = "Daim";
        var Group = "Mughals";
        var Message = this.message.value;
        var date = new Date();
        var today = date.toLocaleDateString();

        var Data = {"Name" : Name, "Group": Group, "Message" : Message, Date: today};

        this.setState((prevState)=>{
            return {
                message : prevState.message.concat(Data)
            }
        })

        this.message.value = "";

        event.preventDefault();

    }

    SearchHandler(){

    }
    render() {
        console.log(this.state.message)
        return (
            <div className="container" style={{boxShadow: '0px 0px 13px 1px black', marginTop: '10px', height: '83vh'}}>
        <div style={{display: "flex", flex : '1', }}>
            <div style={{width: '30%', backgroundColor: '#F1F1F1', height: '83vh'}}>
       <div className="title2">
           <Input onKeyPress={this.SearchHandler} ></Input>
       </div>
       </div>




            <div>
            <div className="chat">
            <div className="title">  <p className="text-white text">{this.state.message[0].Group}</p></div>

            {this.state.message.map((list)=>{

                return <div>   <div class="aqua text-white">
            {list.Message}
            <br/><br/>
           <div className="chat-text"> {list.Date} </div>    
            
            </div>
            <div class="aqua-text">Sent by : {list.Name}</div>
             </div>
            })}
          



            
            </div>
           
           
            
           
            
            <div style={{position: "relative", bottom: '0vh', display: 'flex', flex: '1', width: '65vw'}}>

            <form onSubmit={this.formHandler} method="post">
            <Input
             inputRef={(msg)=> this.message = msg} 
                placeholder="Enter Message"
              color="secondary" style={{width: '59vw'}}
               variant="outlined">

               </Input>

               
            <Button type="submit" color="secondary" variant="contained" style={{height: '57px'}} >Send</Button>

            </form>

            </div>
           
            </div>
        </div>
                
            </div>
        )
    }
}
