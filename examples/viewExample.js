// to use the View component import View from the react-native library
import { View } from "react-native";

// View is the same as <div> in HTML
// it defines a division or a section
// if you want to group things together, wrap them in the View component

// HOW TO USE
// View tag (<View>) MUST have a closing tag (</View>)
// You can have as many or as little views as you want
// Views can be nested inside each other - meaning you can have a view component inside of another view component
function viewExample() {
    return (
        <View>
            <View>

            </View>
        </View>
    );
}