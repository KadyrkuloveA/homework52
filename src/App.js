import React, { Component } from 'react';
import './App.css';
import Num from './Components/Random36/random36'

class App extends Component{
    state ={
        numbers : [0,0,0,0,0],
    };
    ranNum = () => Math.floor(Math.random() * (37 - 5) + 5);

    newNumbers = () => {
        let numArr = [];
        for(let i = 1; i < 6;){
            let number = this.ranNum();
            if(numArr.includes(number)){
                continue;
            }
            numArr.push(number);
            ++i;
        }
        numArr.sort(function (x, y) {
            return x - y ;
        });
        let newArr = {...this.state};
        newArr.numbers = numArr;
        let numbers = newArr.numbers;
        this.setState({numbers});
    };
    render() {
        return (
            <div className="App">
                <div className="container">
                    <button onClick={this.newNumbers}>New Numbers</button>
                    <div className="row">
                        <Num number={this.state.numbers[0]}/>
                        <Num number={this.state.numbers[1]}/>
                        <Num number={this.state.numbers[2]}/>
                        <Num number={this.state.numbers[3]}/>
                        <Num number={this.state.numbers[4]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
