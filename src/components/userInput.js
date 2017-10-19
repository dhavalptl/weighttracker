import React, { Component } from 'react';
import Result from './result';
import InputForm from './inputForm';
import {Segment} from 'semantic-ui-react';
import './userInput.css';
class UserInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            bmi: null,
            fat: null
        }
        this.calculateResult = this.calculateResult.bind(this);
    }
    calculateResult(inputs){
        /*const bmiResult = bmi.bmiCalculate(parseInt(inputs.age, 10), parseFloat(inputs.height), parseFloat(inputs.weight));
        const fatResult = fat.fatCalculate(bmiResult.bmi, parseInt(inputs.age, 10), 'male');*/
        const bmiResult = 22.4;
        const fatResult = 10;
        this.setState({
            bmi: bmiResult,
            fat: fatResult + '%'
        });
    }
    render() {
        return (
            <Segment className="userInput">
                <InputForm handleCalculate={this.calculateResult}/>
                <Result bmiResult={this.state.bmi} fatResult={this.state.fat}/>
            </Segment>
        );
    }
}

export default UserInput;