import React, {Component} from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

// import UserInput from './first assignment/UserInput';
// import UserOutput from './first assignment/UserOutput';

// import Validation from './second assignment/Validation';
// import Char from './second assignment/Char';

class App extends Component {
  //FIRST
  // state = {
  //   name : 'Rean'
  // }

  // changeNameHandler = event => {
  //   this.setState ({
  //     name : event.target.value
  //   })
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <UserInput 
  //         changed={this.changeNameHandler}
  //         currentName={this.state.name} />

  //       <UserOutput name={this.state.name} />
  //       <UserOutput name={this.state.name} />
  //       <UserOutput name={this.state.name} />
  //     </div>
  //   );
  // }



  //SECOND
  // state = {
  //   userInput : ''
  // }

  // printInputHandler = event => {
  //   this.setState ({
  //     userInput : event.target.value
  //   })
  // }

  // deleteCharHandler = index => {
  //   const characters = this.state.userInput.split('');
  //   characters.splice(index, 1);
  //   const updatedCharacters = characters.join('');
  //   this.setState({userInput : updatedCharacters});
  // }

  // render() {
  //   const charList = this.state.userInput.split('').map((char, index) => {
  //     return <Char 
  //               character={char} 
  //               key={index} 
  //               clicked={() => this.deleteCharHandler(index)}/>
  //   })
    
  //   return (
  //     <div className='App'>
  //       <input 
  //         type='text' 
  //         onChange={this.printInputHandler} 
  //         value={this.state.userInput}/>
  //       <p>{this.state.userInput}</p>

  //       <Validation textLength={this.state.userInput.length} />

  //       {charList}
  //     </div>
  //   )
  // }



  //TUTORIAL
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);