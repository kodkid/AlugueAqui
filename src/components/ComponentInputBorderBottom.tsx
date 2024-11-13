import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface ComponentTextInputProps {
    placeholder: string;
}

const ComponentInputBorderBottom: React.FC<ComponentTextInputProps> = ({ placeholder }) => {
    return (
        <TextInput 
            style={styles.textInput} 
            placeholder={placeholder} 
        />
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: '#ffb800', 
        borderBottomWidth: 1, 
        padding: 10,
        fontFamily: "sans-serif"
    },
});

export default ComponentInputBorderBottom;