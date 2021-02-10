import {Component} from 'react';

class Greeting extends Component{
    render(){
        const {name,photo} = this.props;
        return(<div className='GREETING-ELEMENT'>
            <h1 className='heading'>Hello {name}</h1>
            <img src={photo} alt={name}/>
        </div>
        );
    }
}

export default Greeting;