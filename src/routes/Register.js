import React from 'react';
import {Container, Header, Input, Button} from "semantic-ui-react";
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class Register extends  React.Component{
    state={
        username:"",
        password:"",
        email:""
        
    }
    
    onChange = e => {
     const {name,value} = e.target;
     this.setState({[name]:value})
    }
    onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    });

    console.log(response);
  };
    render(){
        const {username,password,email} = this.state;
        
        return(
            <Container text>
                <Header as="h2">Register</Header>
                <Input name="username" onChange={this.onChange}  value ={username} placeholder="Username" fluid/>
                <Input name="email" onChange={this.onChange} value = {email} placeholder="Email" fluid/>
                <Input name="password" onChange={this.onChange} value={password} placeholder="Password" type = "password" fluid/>
                <Button onClick = {this.onSubmit}> Submit </Button>
            </Container>
            );
    }
    
}


const registerMutation = gql`
    mutation($username: String!, $email: String!, $password: String!){
        register(username: $username, email: $email, password: $password)
    }

`;
export default graphql(registerMutation)(Register);
