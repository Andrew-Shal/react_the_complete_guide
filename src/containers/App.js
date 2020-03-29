import React, {useState} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

const App = (props) => {
  const [personState, setPersonState] = useState({
      persons:[
        {id:1, name:"Andrew",age:23, hobbies: "Hobbies: computer programming"},
        {id:2, name:"Steven",age:23, hobbies: null},
        {id:3, name:"Edwin",age:21, hobbies:null}
      ]
  });
  
  const [showPersons, setShowPersons] = useState(false);

  const deletePersonHandler = (idx) => {
    const persons = [...personState.persons];
    persons.splice(idx,1);
    setPersonState({persons});
  }

  const showPersonHandler = () => {
    setShowPersons(!showPersons);
  }

  const [showCockpit, setShowCockpit] = useState(true);

  const nameChangedHandler = (event, idx) => {
    const personIdx = personState.persons.findIndex(p => p.id === idx);
    const person = {...personState.persons[personIdx]};//Object.assign({},personState.persons[personIdx]); 

    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIdx] = person;
    setPersonState({persons:persons});
  }

  const [authenticated,setAuthenticated] = useState(false);

  const loginHandler = () => {
    setAuthenticated(!authenticated);
  };

  let personList = null;

  if(showPersons){
    personList = <Persons
                persons={personState.persons}
                clicked={deletePersonHandler}
                changed={nameChangedHandler}
              />
  }

  return(
    <div className="App">
      <AuthContext.Provider value={{authenticated:authenticated,login:loginHandler}}>
        {showCockpit ? <Cockpit title={props.appTitle} clicked={showPersonHandler} showPersons={showPersons} login={loginHandler}/>: null}
      <button onClick={()=>{setShowCockpit(false)}}>Remove Cockpit</button>
      {personList}
      </AuthContext.Provider>
    </div>
  );  
}

export default withClass(App,"App");
