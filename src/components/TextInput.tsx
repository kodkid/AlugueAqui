import { useState } from 'react';
import { TextInput , TextInputProps } from 'react-native-paper';

const componentTextInput = () => {
    const [text, setText] = useState("");

    return (
        <TextInput
            mode="outlined"
            underlineColor={"##069e6e"}
            value={text}
            onChangeText={text => setText(text)}

        />
    );
};

export default componentTextInput;