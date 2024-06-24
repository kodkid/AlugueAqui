import React, { useState } from 'react';
import { TextInput , TextInputProps } from 'react-native-paper';

interface ComponentTextInputProps extends TextInputProps {
    placeholder: string;
}

const ComponentTextInput: React.FC<ComponentTextInputProps> = ({  placeholder , ...rest }) => {
    const [text, setText] = useState("");

    return (
        <TextInput
            placeholder={placeholder}
            mode="outlined"
            outlineColor="#90ee90"
            activeOutlineColor={"#069e6e"}
            value={text}
            onChangeText={text => setText(text)}
        />
    );
};

export default ComponentTextInput;