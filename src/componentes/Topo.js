import '../App.css';
import { Component } from 'react';
import logo from './logo.png'; 

class Topo extends Component {

    render() {

        return( 
                <div className="Topo">
                    <img src={logo} className="logo" alt="logo" />
                    <h1 className='titulo'> Portal de Notícias - AF </h1>
                </div>
        )
    }
}

export default Topo