import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField/TextField';
import Select from '@material-ui/core/Select/Select'
import Menuitem from '@material-ui/core/MenuItem/MenuItem';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';

export default class auth extends Component {
    constructor(props){
        super(props);
        this.state={
            data : []
        }

        this.FormHandler = this.FormHandler.bind(this);
        this.apiHandler = this.apiHandler.bind(this);
    }

    FormHandler(event){

        var name = this.name.value;
        var options = this.options.value;
        
        var datas = {Name : name, Group : options};

        this.setState({
            data : datas
        })

        event.preventDefault();
        this.apiHandler();
    }

    apiHandler(){

        alert(this.state.data.Name);
    }



    render() {

        return (
            <div className="mx-auto text-center" style={{marginTop: '10vh' }}>
           <Typography variant="h2">Messenger</Typography><br/> <br/>
           <form method="post" onSubmit={this.FormHandler}>
            <TextField inputRef={(name)=> this.name = name} color="secondary" style={{width: '400px'}} label="Enter UserName"  variant="outlined"/>

            <Select inputRef={(options)=> this.options = options} color="secondary" style={{width: '200px'}} label="Select Group"  variant="outlined" >
                <Menuitem value="Mughals">Mughals</Menuitem>
                <Menuitem value="Others">Others</Menuitem>
            </Select>
            &nbsp;
            <Button type="submit" color="secondary" variant="contained" size="large" style={{height: '3.6rem'}} >Start</Button>
            </form>
                
            </div>
        )
    }
}
