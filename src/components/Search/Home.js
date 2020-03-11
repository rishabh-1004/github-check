import React, { Component } from 'react';
import { Row, Col, TextInput } from 'react-materialize';
import Button from 'react-materialize/lib/Button';

class Home extends Component {
constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    }
    
handleChange(event) {
    this.setState({value: event.target.value});
    }
      
  
    
  render(){
    return(
            <div>
              <h3>Check Public Repos</h3>
              <hr/>
                                
                <Row>
                <Col s={2}></Col>    
                <Col s={3} >
                    <TextInput 
                        style={{marginRight:'0px'}}
                        label="UserName" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        />
                </Col>
                <a style={{display: "table-cell"}} href={`/username/${this.state.value}`}>
                <Button 
                    node="button" 
                    style={{ marginRight: '0px', marginTop:'20px' }} 
                    waves="light">
                        Search 
                </Button>
                </a>
                </Row>              
            </div>
          )};
}

export default Home;

