import { Component } from 'react';
import Aloha from './'

class AlohaDashboard extends Component{
    mapAloha =(user)=>(
        <li>
            <Aloha name={`${user.firstName} ${user.surname}`}/>
        </li>
    );

    render(){
        const {users} = this.props;
        return <ul>{users.map(this.mapAloha)}</ul>;
    }
}
