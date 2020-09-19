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
            
            }   ,
            {"Name": "daim",
                "Group" : "Mugals",
                "Message" : "Hello Everyone, How is everyone doing and how is life",
                "Date" : "12:05 PM"
            
            }   
            ,{"Name": "daim",
            "Group" : "Mugals",
            "Message" : "Hello Everyone, How is everyone doing and how is life",
            "Date" : "12:05 PM"
        
        }  , 
        {"Name": "daim",
                "Group" : "Mugals",
                "Message" : "Hello Everyone, How is everyone doing and how is life",
                "Date" : "12:05 PM"
            
            }             
            ],
            users: [
             {Name: "Daim", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Hashir", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Rauf", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
             {Name: "Amy", img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg"},
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
            <div className="container original" style={{boxShadow: '0px 0px 13px 1px black', marginTop: '10px', height: '83vh'}}>
        <div style={{display: "flex", flex : '1', }}>
            <div style={{width: '30%', backgroundColor: 'f1f1f1', height: '83vh'}}>
       
       <div class="your-class mx-auto" style={{width: '18vw'}}>
          {this.state.users.map((names)=>{
              return <div className="people"><img src={names.img} className="personImage"/> {names.Name}</div>
          })}
         </div>

         <hr/>
         <div className="usersection">
          {this.state.users.map((names)=>{
             return <div style={{}}>
             <div style={{marginTop: '2px'}}>
             <img src={names.img} className="personImage"></img>            
             <p style={{marginLeft: ''}}>{names.Name}</p>
           
           
             </div>
             <hr/>
              </div>
         })}
    

          </div>


         </div>
         




            <div>
            <div className="title">  <p className="text-white text">{this.state.message[0].Group}</p></div>

            <div className="chat" id="messages">

           
            {this.state.message.map((list)=>{

                return <div >   <div class="aqua text-white">
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
