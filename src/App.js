import React, {useState} from 'react';
// import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
  background-color:${props => props.altStyle ? 'red' : 'green'};
  color: white;
  font:inherit;
  border:1px solid blue;
  padding:8px;
  cursor:pointer;
  &:hover{
    background-color:lightgreen;
    color:black;
  }
`

const App = props => {
  const [personState, setPersonState] = useState({
      persons:[
        {id:1, name:"Andrew",age:23, hobbies: "Hobbies: computer programming"},
        {id:2, name:"Steven",age:23, hobbies: null},
        {id:3, name:"Edwin",age:21, hobbies:null}
      ]
  });

  const [showPersons, setShowPersons] = useState(true);

  const deletePersonHandler = (idx) => {
    const persons = [...personState.persons];
    persons.splice(idx,1);
    setPersonState({persons});
  }

  /*const switchNameHandler = (newName) => { 
    setPersonState({persons:[
      {id:1, name:newName,age:23, hobbies: "Hobbies: computer programming"},
      {id:2, name:"Steve",age:23, hobbies: null},
      {id:3, name:"Ed",age:21, hobbies:null}
    ]});
  }*/

  const showPersonHandler = () => {
    setShowPersons(!showPersons);
  }

  const nameChangedHandler = (event, idx) => {
    const personIdx = personState.persons.findIndex(p => p.id === idx);

    const person = Object.assign({},personState.persons[personIdx]); 

    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIdx] = person;
    setPersonState({persons});
  }

  /*const style = {
    backgroundColor:'green',
    color: 'white',
    font:'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer',
    ':hover':{
      backgroundColor:'lightgreen',
      color:'black'
    }
  }*/

  return(
    //<StyleRoot>
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
        <StyledButton altStyle={showPersons} onClick={() => showPersonHandler()}>{showPersons ? 'hide persons' : 'show persons'}</StyledButton>
        {personState.persons.map(
          (p,idx) => 
            <Person 
              key={p.id}
              name={p.name} 
              age={p.age}
              altStyle={showPersons}
              //click={switchNameHandler.bind(this,"tester")}
              click={() => deletePersonHandler(idx)}
              change={(event) => nameChangedHandler(event,p.id)}>
              {p.hobbies != null ? p.hobbies : null}
            </Person>
        )}
    </div>
    //</StyleRoot>
);  
}

// export default Radium(App);
export default App;
