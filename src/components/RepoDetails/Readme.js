import React, { Component } from 'react';
import { Button,Row, Col } from 'react-materialize';
import axios from 'axios';

class Readme extends Component {
  
    constructor(props) {

        super(props);
    
        this.state = {
            username :  this.props.username,
            reponame: this.props.repo,
            repos : '',
        };    
      }  
      componentDidMount() {
        var url=`https://raw.githubusercontent.com/${this.state.username}/${this.state.reponame}/master/README.md`
        axios.get(url)
          .then(res => {
            const repos = res.data;
            console.log(repos);
            this.setState({ repos });
          })
          if(this.state.repos){

          }else{
            this.setState({ repos:"Nothing here" });
          }
        
      }


    render(){
    return(
            <div>
              <center><h3>Readme</h3></center>
              <Row>
                <Col s={2}></Col>
                <Col s={7}>
              <h3>{this.state.repos}</h3>
              </Col>
              </Row>
            </div>          
          )};
}



export default Readme;

