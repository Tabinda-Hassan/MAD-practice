import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropsChild from './PropsChild';

export default function ParentComponent()
{
    return (
        <View style={Styles.container}>
            <Text style={Styles.boldText}>Hello!</Text>
            <Name name="Tabinda"></Name> // Passing a prop
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});


//Props (short for properties) are used to pass data from a parent component to a child component in React Native.
// The ParentComponent imports and uses the Name component.

/*
export default → This makes ParentComponent the default export of this file, meaning it can be imported in another file
function ParentComponent() → This defines a functional React component named ParentComponent
return (...) → The return statement contains JSX (JavaScript XML), which is a syntax extension for writing UI components.
<View> → A core React Native component used as a container for layout and grouping other components. It acts like a <div> in web development.
<Text> → A core React Native component used to display text.



*/