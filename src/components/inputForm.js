import React, { Component } from 'react';
import './inputForm.css';
import {Form, Button, Message, Input} from 'semantic-ui-react';
const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]
class UserInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: '',
            weight: '',
            height: '',
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const key = target.name;
        const value = target.value;
        this.setState({
            [key]: value
        });
    }
    calculate(event){
       event.preventDefault();
       if(!this.state.age || !this.state.height || !this.state.weight){
            this.setState({
                error: 'Enter all fields value'
            });
            return;
        }else{
            this.setState({
                error: ''
            });
        }
       this.props.handleCalculate(this.state);
    }
    render() {
        return (
            <div className="inputcontainer">
                {this.state.error && <Message negative><p>{this.state.error}</p></Message>}
                <Form onSubmit={this.calculate}>
                    <Form.Field>
                        <Form.Select options={genderOptions} placeholder='Gender' />
                    </Form.Field>
                    <Form.Field>
                        <Input type="number" name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Input type="number" step="any" name="height" value={this.state.height} placeholder="Height in Metre" onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Input type="number" step="any" name="weight" value={this.state.weight} placeholder="Weight in Kg" onChange={this.handleChange}/>
                    </Form.Field>
                    <Button type='submit'>Calculate</Button>
                </Form>
            </div>
        );
    }
}

export default UserInput;