import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  View,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import backgroundImage from '../../assets/images/backgroundImage';
import BackgroundFormStyles from './styles';

interface BackgroundFormProps {
  searchbar?: React.ReactNode;
  children: React.ReactNode;
  profileImageElement?: React.ReactNode;
  mainTitleElement?: React.ReactNode;
  editButtonElement?: React.ReactNode;
  updateProfileButtonElement?: React.ReactNode;
  editMode?: boolean;
  imageBackgroundStyle: StyleProp<ViewStyle>;
  backgroundFormChildrenContainerStyle: StyleProp<ViewStyle>;
  profileHeaderContainerStyle?: StyleProp<ViewStyle>;
  searchbarContainerStyle?: StyleProp<ViewStyle>;
}

class BackgroundForm extends React.Component<BackgroundFormProps, {}> {
  render(): React.ReactNode {
    return (
      <ImageBackground
        source={backgroundImage}
        style={this.props.imageBackgroundStyle}>
        <View style={this.props.profileHeaderContainerStyle}>
          {/* !this.props.editMode not working here because it can be undefined*/}
          {this.props.editMode === false && (
            <View style={BackgroundFormStyles.placeholderForEditButton} />
          )}
          {this.props?.mainTitleElement}
          {this.props?.editButtonElement &&
            !this.props?.editMode &&
            this.props.editButtonElement}
        </View>
        <View style={this.props.searchbarContainerStyle}>
          {this.props?.searchbar}
        </View>
        <View style={BackgroundFormStyles.profileImageContainer}>
          {this.props?.profileImageElement}
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={this.props.backgroundFormChildrenContainerStyle}>
            {this.props.children}
          </View>
        </KeyboardAvoidingView>
        {this.props.updateProfileButtonElement}
      </ImageBackground>
    );
  }
}

export default BackgroundForm;
