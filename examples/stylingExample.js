// there are 2 ways you can style in React Native:
// 1. inline styles
// 2. StyleSheet

// to use StyleSheet, you must import StyleSheet from react-native library
import { View, Text, StyleSheet } from "react-native";


// creating a StyleSheet object

const styles = StyleSheet.create({
    //syntax: name + colon + curly braces + comma
    container: {
        // syntax: what you are targeting + colon + style + comma
        backgroundColor: 'red',
    },
    containerText: {
        fontWeight: 'bold'
    }
});

// using the StyleSheet
function stylingExample() {

    return(
        <View style={ styles.container }>
            <Text style={ styles.containerText }>Hello StyleSheet!</Text>
        </View>
    );


}


// using inline styles

//the style prop takes in an 'object' that is why there are two sets of curly braces
// for inline, as opposed to the example above where the 'styles' variable we made is an object, so just one set of curly braces

function inlineStylingExample() {
    return(
        <View style={{backgroundColor: 'green',}}>
            <Text style={{fontWeight: 'thin',}}>Hello StyleSheet!</Text>
        </View>
    );
}


//using both inline styles and the StyleSheet in one component
//IMPORTANT - INLINE STYLES OVERRIDE THE STYLESHEET

function inlineAndStyleSheetExample() {

    //View background color will be green(from the inline style), not red(from the StyleSheet)
    // Text font will be bold(from the StyleSheet) and have the color purple(from the inline styles)
    return(
        <View style={[styles.container, {backgroundColor: 'green',}]}>
            <Text style={[styles.containerText, {color: 'purple',}]}>Hello StyleSheet!</Text>
        </View>
    );
}