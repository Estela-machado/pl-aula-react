import React from 'react';

class BlocoText extends React.Component {
    render(){
        return (
            <p>
                Esse é o meu primeiro aplicativo, o nome dele é {this.props.appname}.
            </p>
        )
    }
}

export default BlocoText;