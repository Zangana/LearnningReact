import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, PageHeader, Jumbotron,Button } from 'react-bootstrap';
import {Panel} from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current: 0
    };
  }
  
  toggle(index) {
    this.setState({
      current: index
    })
  }
  
  render() {

    var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
    }
    
    return (
      <div>
      <Navbar id="navi">
          <Nav>
               <NavItem eventKey={1} href="#">
                   Home 
                </NavItem>
                <NavItem eventKey={2} href="#">
                   About
                </NavItem>
                <NavItem>
                   Simulator
                </NavItem>
          
          </Nav>
         </Navbar>
        
         <div id="simulator">
        <PageHeader >
           Ethical Simulator <small>Simple Website from react JS</small>
         </PageHeader>

        
         <Jumbotron>
        <h1>Hello People</h1>
        <p>
             You can learn more about ACM ethic code by clicking the button below. 
       </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
       </Jumbotron>
       </div>
        <div id="simulator">

       
          <a href="#nogo" onClick={this.toggle.bind(this, 1)}>StepOne<br/></a>
          <div className={`collapsible ${this.state.current === 1 ? 'open ': ''}`}>
            <p id="pragraph">Professional computer scientist for eight years <br/>
                *MS degree in software engineering <br/>
                *Working for Quality Computing Associates (QCA) as a project manager in the medical systems field <br/>
                *The company has good standing <br/>
                </p>
          </div>
      
          <a href="#nogo" onClick={this.toggle.bind(this, 2)}>StepTwo<br/></a>
          <div className={`collapsible ${this.state.current === 2 ? 'open ': ''}`}>
            <p id="pragraph">
            *Background information on the medical device called MARC <br/>
            -MARC is the Medical Assessing and Response Computer <br/>
            -Used for monitoring vital signs <br/>
            *The second version MARC II is being developed and will have GPS 
              functionality for locating patients that have medical emergencies<br/>
            </p>
          </div>
          <a href="#nogo" onClick={this.toggle.bind(this, 3)}>StepThree<br/></a>
          <div className={`collapsible ${this.state.current === 3 ? 'open ': ''}`}>
            <p id="pragraph">*QCA has been hired by HeWell Alliance to develop a software system that makes use of the MARC II. 
                Will be used in a major hospital <br/>
              *Deadline is approaching quickly and a bug has been found <br/>
            *The system will "very rarely" report a false emergency <br/>
            *You will likely not find the bug before the deadline <br/>
           </p>
          </div>
          <div id="outer">
           <a href="#nogo" onClick={this.toggle.bind(this, 4)}> Delay system and test</a> &nbsp;&nbsp;&nbsp;
            <div className={`collapsible ${this.state.current === 4 ? 'open ': ''}`}>
            <p id="pragraph">
            *Deadline is reached, not able to remove the only known bug <br/>
            *After informing HeWell, they are displeased but willing to hear you out.<br/>
                You tell them du to the critical nature of the software, it would go against
                your code of ethics to deploy the project in its current state
             *They extend the deadline by 3 months, the bug is not found, and HeWell<br/>
                   doesn't want to delay the deployment any longer
            </p>
            </div>

            <a href="#nogo" onClick={this.toggle.bind(this, 5)}>Random Decision Selection</a> &nbsp;&nbsp;&nbsp;
            <div className={`collapsible ${this.state.current === 5 ? 'open ': ''}`}>
            <p id="pragraph">
            *Deadline is reached, not able to remove the only known bug<br/>
            *You in inform HeWell that the solution works as intended except for the
              bug, they will take a week to evaluate their options concerning the bug <br/>
            *After the week they will seek and take your advice after that because of 
              your knowledge on the bug and the damage it could cause <br/>
            </p>
            </div>


            <a href="#nogo" onClick={this.toggle.bind(this, 6)}>Submit project on time with bugs</a>
            <div className={`collapsible ${this.state.current === 6 ? 'open ': ''}`}>
            <p id="pragraph">
            *You submit the code on time and HeWell is very pleased and you move 
              on to other projects, but after 6 months the bug surfaces <br/>
            *HeWell wants you to determine if it is a software issue and to fix it if it is.<br/>
            *HeWell is losing money due to false emergency notifications and they 
               are worried about stretching emergency services thin during an actual emergency <br/>
            </p>
            </div>

          </div>
        </div>
        <div>
          
         </div>
      </div>
      
    );
  }
}

export default App;
