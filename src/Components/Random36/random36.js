import React from 'react';

class num extends React.Component{
    render() {
        return(
            <div className='numBox'>
                <h3>{this.props.number}</h3>
            </div>
        )
    }
}

export default num;