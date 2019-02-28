import React from 'react';
import {Button} from 'reactstrap';
import data from './data.json'

export default class EthicsJson extends React.Component{

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            select: 0
        };
        this.callJson = this.callJson.bind(this);
    }
    toggle() {
        this.setState({
        });
    }

    callJson(select){
        this.setState({
            select: this.state.select + 1
        });
    }
    render() {
        let callButton;
        let headerButton;
        if(this.state.select < 7) {
            callButton = data.narratives[0].passages[this.state.select].passage;
            headerButton = data.narratives[0].passages[this.state.select].page;
        } else {
            alert("The passages is been reseted");
            this.state.select = 0;
        }
        return (
            <div>
                 <ul>
                      <li style={{fontWeight: "bold"}}> {headerButton}</li>
                       {callButton } 
                       
                 </ul>
                
                <Button id="continue" onClick={() => this.callJson(0)}>
                    Continue  
                </Button>

            </div>

        );
    }
}

