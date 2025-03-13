import React from 'react'
import {Text} from 'react-native'

const name = (props) =>
{
    return <Text>My name is {props.name}</Text> // The Name component receives name="Tabinda" as props
};

export default name;

/*
We receive props (props.name) inside the Name component.
The Text component displays dynamic data instead of a hardcoded name
*/