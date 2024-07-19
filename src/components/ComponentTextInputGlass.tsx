import React, { useState } from "react";
import { TextInput } from "react-native-paper";

interface ComponentTextInputProps {
  placeholder: string;
}

const ComponentTextInputGlass: React.FC<ComponentTextInputProps> = ({
  placeholder,
}) => {
  const [text, setText] = useState("");

  return (
    <TextInput
      label={placeholder}
      mode="outlined"
      outlineColor="#999"
      activeOutlineColor={"#665e66"}
      value={text}
      onChangeText={(text) => setText(text)}
      right={<TextInput.Icon icon="magnify" />} // Utilizando TextInput.Icon com o ícone de busca
    />
  );
};

export default ComponentTextInputGlass;
