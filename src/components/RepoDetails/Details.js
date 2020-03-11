import React, { Component } from 'react';
import { Button } from 'react-materialize';
import axios from 'axios';

class Details extends Component {
  
    constructor(props) {

        super(props);
    
        this.state = {
            repos: [],
            username :  props.id,
            reposelected:'',
            setrepo : this.setrepo.bind(this),
        };    
      }  
      componentDidMount() {
        var url=`https://api.github.com/users/${this.state.username}/repos`;
        console.log(url);
        axios.get(url)
          .then(res => {
            const repos = res.data;
            console.log(repos);
            this.setState({ repos });
          })
      }
      setrepo(repo){
        
        console.log(this.state.reposelected);
        this.setState({reposelected: repo});
        console.log(this.state.reposelected);
      }


    render(){
    return(
            <div>
              <h3>ID: {this.props.id}</h3>
              {this.state.repos.map((repo, index) => (
                  <p><a href={`/readme/${this.state.username}/${repo.name}`}> {repo.name}</a> !</p>
              ))}
            </div>          
          )};
}



export default Details;

