import React, { Component } from 'react';

class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        };
    }

    handleChange =({target:{value,name}})=>{
        this.setState({[name]:value});
    }

    handleSubmit= (event)=>{
        event.preventDefault();
        this.state({
            email:'',
            password:'',
        });
    }

    render() {
        const {email,password} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                onChange={this.handleChange}
                value={email}
                placeholder='Email'
                type='email'
                name='email'
                />

                <input
                onChange={this.handleChange}
                value={password}
                placeholder='Password'
                type='password'
                name='password'
                />

                <input
                type='submit'
                />
            </form>
        );
    }
}

export default SignInForm;
