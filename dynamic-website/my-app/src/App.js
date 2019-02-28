import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText,CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
// import './App.css';
// import './bootstrap.css';
import EthicsJson from './buttons'
import PrincipleACM from './collapse'
import NarrativeCarousel from './carouselWindow'
//import cardComponent from './cards'
import {
  Button, Popover, PopoverHeader, PopoverBody, Collapse, Container, Row, Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Jumbotron,
  DropdownItem
} from 'reactstrap';

import EthicsPrinciple
  from './popover'
class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);

    this.state = {
      popoverOpen: false,
      isOpen: false,

    };

    this.state2 = {
      popoverOpen2: false,
      isOpen: false
    }

    this.state1 = {
      popoverOpen1: false,
      isOpen: false
    }

    this.state3 = {
      popoverOpen3: false,
      isOpen: false
    }

    this.state4 = {
      popoverOpen4: false,
      isOpen: false
    }

    this.state5 = {
      popoverOpen5: false,
      isOpen: false
    }

    this.state6 = {
      popoverOpen6: false,
      isOpen: false
    }

    this.containerStyle = {
      marginTop: "75px"
    }
  };

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,

    });
  }

  toggle1() {
    this.setState({
      popoverOpen1: !this.state1.popoverOpen1,

    });
  }

  toggle2() {
    this.setState({
      popoverOpen2: !this.state2.popoverOpen2,

    });
  }

  toggle3() {
    this.setState({
      popoverOpen3: !this.state3.popoverOpen3,

    });
  }

  toggle4() {
    this.setState({
      popoverOpen4: !this.state4.popoverOpen4,

    });
  }

  toggle5() {
    this.setState({
      popoverOpen5: !this.state5.popoverOpen5,

    });
  }

  toggle6() {
    this.setState({
      popoverOpen6: !this.state6.popoverOpen6,

    });
  }

  bar() {
    this.setState({
      isOpen: !this.state.isOpen,

    });
  }


  render() {
    return (
      <div className="App">
        <NarrativeCarousel>

        </NarrativeCarousel>
        <Navbar expand="md" dark color="primary" className="sticky-top" >
          {/* <Navbar expand="md" dark color="primary"> */}
          <NavbarBrand tag="a" href="/"><img style={{width: '65px', height: '65px', marginTop: '-25px', marginBottom: '-25px'}} src="coolACM.png"></img></NavbarBrand>
          <NavbarToggler onClick={this.bar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.ACM.org">ACM</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.jmu.edu">JMU</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Advisors
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" href="https://w3.cs.jmu.edu/kirkpams/">
                    Dr. Michael S. Kirkpatrick
                  </DropdownItem>
                  <DropdownItem tag="a" href="https://hcientist.cs.jmu.edu/" >
                    Dr. Michael Stewart
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>


        {/* <Container fluid style={this.containerStyle}> */}
        <Container>
          <Row>
            <Col xs="12">
              <div>
                <h1 className="display-3"> ACM Ethical Simulator</h1>
                <p className="lead">The Code is designed to inspire and guide the ethical conduct of all computing professionals, including current and aspiring practitioners, instructors, students, influencers, and anyone who uses computing technology in an impactful way.
                Additionally, the Code serves as a basis for remediation when violations occur. The Code includes principles formulated as statements of responsibility, based on the understanding that the public good is always the primary consideration.
        Each principle is supplemented by guidelines, which provide explanations to assist computing professionals in understanding and applying the principle</p>
                <hr className="my-2" />
              
              </div>
              <EthicsJson>

              </EthicsJson>
              <br />
              <CardDeck>
              <Card>
                <CardImg top width="100%" src="small-angel.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Angel</CardTitle>
                  <CardSubtitle>Angel mode</CardSubtitle>
                  <CardText>Please press begin button to start the Simulator with angel mode.</CardText>
                  <Button>Begin</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src="dynamic.jpeg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Dynamic</CardTitle>
                  <CardSubtitle>Dynamic mode</CardSubtitle>
                  <CardText>Please press begin button to start the simulator with dynamic mode.</CardText>
                  <Button>Begin</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src="evil.jpeg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Evil</CardTitle>
                  <CardSubtitle>Evil mode</CardSubtitle>
                  <CardText>Please press begin button to start the simulator with evil mode.</CardText>
                  <Button>Begin</Button>
                </CardBody>
              </Card>
            </CardDeck>
            </Col>
            {/* <Col xs="2" className="order-first">
              <h3>
                GENERAL ETHICAL PRINCIPLES.
              </h3>

              <PrincipleACM>

              </PrincipleACM>
              <EthicsPrinciple label="Section 1.1" header="1.1 Contribute to society and to human well-being, acknowledging that all people are stakeholders in computing.">
                <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
              </EthicsPrinciple>
              <EthicsPrinciple label="Section 1.2" header="1.2 Contribute to society and to human well-being, acknowledging that all people are stakeholders in computing.">
                <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
              </EthicsPrinciple>
              <EthicsPrinciple label="Section 1.3" header="1.3 Contribute to society and to human well-being, acknowledging that all people are stakeholders in computing.">
                <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
              </EthicsPrinciple>
              <EthicsPrinciple label="Section 1.4" header="1.4 Contribute to society and to human well-being, acknowledging that all people are stakeholders in computing.">
                <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
              </EthicsPrinciple>
              <EthicsPrinciple label="Section 1.5" header="1.5 Contribute to society and to human well-being, acknowledging that all people are stakeholders in computing.">
                <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
              </EthicsPrinciple>
            </Col> */}

          </Row>

        </Container>

        {/* <header className="App-header">
          <h1>ACM Code of Ethics and Professional Conduct</h1>
          <h3>1. GENERAL ETHICAL PRINCIPLES.</h3>
          <p>
             
            
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header> */}
        <footer style={{textAlign: 'center', backgroundColor: 'black', color: 'white'}}>
                 <p>----------------------------------------------------------------------------------------</p>
                 <p>This website is for experimenting Reactjs</p>
                 <p>copyright &copy;</p>
        </footer>
      </div>
      
    );
  }
}

export default App;
