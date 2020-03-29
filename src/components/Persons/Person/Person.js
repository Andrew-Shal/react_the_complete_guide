import React,{useRef,useEffect, useContext} from 'react';
import classes from './Person.module.css';
import Auxilary from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const Person = (props) => {
    let inpElemRef = useRef(null);

    useEffect(()=>{inpElemRef.current.focus()},[inpElemRef]);

    const authContext = useContext(AuthContext);

    return (
        <Auxilary>
            {authContext.authenticated ? <p>Authenticated!</p> : <p>please login!</p>}
            <p className="inline-b pr-10" onClick={props.clicked}>Hello, my name is {props.name} and I am {props.age}</p>
            <input ref={inpElemRef} className="inline-b" type="text" placeholder="update name" onChange={props.changed} value={props.name}></input>
            {props.children ? <p>{props.children}</p> : null}
        </Auxilary>
    );
}

Person.propTypes = {
    click:PropTypes.func,
    changed:PropTypes.func,
    name:PropTypes.string,
    age: PropTypes.number
}

export default withClass(Person,classes.Person)