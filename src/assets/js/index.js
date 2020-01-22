import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Botao from './botao'
class Sistema extends Component{
    render(){
        return(
            <div>
                <h1>Olá Mundo!!!</h1>
                <Botao></Botao>
            </div>
        );
    }
}
ReactDOM.render(<Sistema/>, document.getElementById('container'));
