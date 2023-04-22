import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FilledButtonStyles from './styles';

interface FilledButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  textColor?: string;
  backgroundColor?: string;
}

class FilledButton extends React.Component<FilledButtonProps, {}> {
  render(): React.ReactNode {
    return (
      <TouchableOpacity
        style={[
          FilledButtonStyles.touchableOpacityStyle,
          this.props.backgroundColor
            ? {
                backgroundColor: this.props.backgroundColor,
              }
            : {},
        ]}
        onPress={this.props.onPress}
        disabled={this.props.disabled}>
        <Text
          style={[
            FilledButtonStyles.textStyle,
            this.props.textColor ? {color: this.props.textColor} : {},
          ]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default FilledButton;
