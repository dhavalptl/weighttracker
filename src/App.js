import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import UserInput from './components/userInput';
import Weight from './components/weight';
import History from './components/history';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: 'bmi'
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <div className="maincontainer">
          <div className="main">
            <Menu pointing secondary size={'huge'}>
              <Menu.Item name='bmi' active={activeItem === 'bmi'} as={Link} to='/bmi' onClick={this.handleItemClick}>
                BMI
              </Menu.Item>
              <Menu.Item name='weight' active={activeItem === 'weight'} as={Link} to='/weight' onClick={this.handleItemClick}>
                Weight
              </Menu.Item>
              <Menu.Item name='history' active={activeItem === 'history'} as={Link} to='/history' onClick={this.handleItemClick}>
                History
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item name='addweight' active={activeItem === 'addweight'} as={Link} to='/addweight' onClick={this.handleItemClick}>
                  Add Weight
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <div className="content">
              <Route path="/bmi" component={UserInput} />
              <Route path="/weight" component={Weight} />
              <Route path="/history" component={History} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
