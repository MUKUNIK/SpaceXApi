import React from "react";
import {Link} from 'react-router';
import  {Card, Button, ButtonToolbar, Col, Grid, Panel, FormGroup} from 'react-bootstrap'
import Responsive from 'react-responsive-decorator';


class App extends React.Component {
  render() {
    return(
     
     <div id = "link">
     <ButtonToolbar>
  <Button href="Launchpads">Launchpads</Button>

  <Button href="Missions">Missions</Button>
  </ButtonToolbar>
      {this.props.children}
      </div>
  
    )
  }
}

export default Responsive(App);

export class Launchpads extends React.Component {
  /*constuctor(props){
    this.state = {
    loading: true,
    Launch: null,
    active: false
  };
    this.handlechanged = this.handlechanged.bind(this)
    this.check = this.check.bind(this);
    }*/


    state = {
    loading: true,
    Launch: null,
    active: false
  };
  
async componentDidMount() {

    const url = "https://api.spacexdata.com/v3/launchpads";
    const response = await fetch(url);
   const data = await response.json();
    this.setState({ Launch: data, loading: false });
    }


   async  handlechanged() {
      this.setState({active: !this.state.active});
    }

    async check(item){
      return item.status == "Active";
    }

    render() {

   if (this.state.loading) {
      return <div>loading...</div>;
    }


   if (!this.state.Launch) {
   return <div>didn't get a person</div>;
    }

    if(!this.state.active){
    return (
      <div>
      Active <input type="checkbox" onChange={this.handlechanged}/>
      { this.state.Launch.map((item, i) => {
        return <Card bg="danger" text="white" style={{ width: '100%' }}>
  <Card.Body> 
        <ul className = "item">
        {i+1} <li> LOCATION : {item.location.name}, {item.location.region}, {item.location.latitude}, {item.location.longitude}</li>
        <li >STATUS : {item.status} </li>
        <li> DETAILS : {item.details} </li>
        </ul>
        </Card.Body>
        </Card>
      })}
      </div>
    );
  }
  else
  {
    return (
      <div>
      
      </div>
    );
  }
  }
}

export class Missions extends React.Component {
  state = {
    load: true,
    Missions: null
  };

async componentDidMount() {

    const url = "https://api.spacexdata.com/v3/missions";
    const response = await fetch(url);
   const data = await response.json();
    this.setState({ Missions: data, load: false });
    }

render() {

   if (this.state.load) {
      return <div>loading...</div>;
    }


   if (!this.state.Missions) {
   return <div>didn't get a person</div>;
    }

    return (
      <div>
      { this.state.Missions.map((item, i) => {
        return <Card border="Success" text="Black" style={{ width: '100%' }}>
  <Card.Body> 
        <ul className = "item">
        {i+1}<li>MISSION NAME : {item.mission_name}</li>
        <li >DESCRIPTION : {item.description} </li>
        
        {item.payload_ids.map((item1, i) => {
          return <p><Link to="Payload">{item1}</Link></p>
        })}

        </ul>
        </Card.Body>
        </Card>
      })}
      </div>
    );
  }
}

//Payload

export class Payload extends React.Component {
  state = {
    load: true,
    payload: null
  };

async componentDidMount() {

    const url = "https://api.spacexdata.com/v3/payloads/Telkom-4";
    const response = await fetch(url);
   const data = await response.json();
    this.setState({ payload: data, load: false });
    }

render() {

   if (this.state.load) {
      return <div>loading...</div>;
    }


   if (!this.state.payload) {
   return <div>didn't get a person</div>;
    }

var x = this.state.payload.toString();
console.log(x);

console.log(this.state.payload);
    return (
      <div>
      { x.map((item, i) => {
        return <p>item</p>
      })}
      </div>
    );
  }
}

