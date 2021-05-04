import React from 'react';
import BlocoText from './bloco-text';

class BlocoHome extends React.Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                <img src={this.props.img} className="App-logo" alt="logo" />
                <BlocoText appname={this.props.title}/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {this.props.title}
                </a>
                </header>
            </div>
        )
    }
}

export default BlocoHome;