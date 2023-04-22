import React from 'react';
import {TextInput} from 'react-native';
import CredentialTextInputStyle from './styles';

interface CredentialTextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  editable?: boolean;
  onChangeText: (text: string) => void;
  placeholderTextColor: string;
}

class CredentialTextInput extends React.Component<
  CredentialTextInputProps,
  {}
> {
  render(): React.ReactNode {
    return (
      <TextInput
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        style={CredentialTextInputStyle.textInputStyle}
        placeholder={this.props.placeholder}
        placeholderTextColor={this.props.placeholderTextColor}
        secureTextEntry={this.props.secureTextEntry}
        editable={this.props?.editable}
      />
    );
  }
}

export default CredentialTextInput;
