import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import BackgroundForm from '../../components/BackgroundForm';
import CredentialTextInput from '../../components/CredentialTextInput';
import FilledButton from '../../components/FilledButton';
import ProfileImage from '../../components/ProfileImage';
import ProfileScreenStyles from './styles';
import * as ImagePicker from 'react-native-image-picker';
import SocialSection from '../../components/SocialSection';
import {Stack} from 'react-native-spacing-system';
import TextButton from '../../components/TextButton';
import Images from '../../assets/images/Images';
import StorageService from '../../services/StorageService';
import Colors from '../../theme/Colors';

interface ProfileScreenState {
  user: {
    username: string | null;
    email: string;
    image: ImagePicker.Asset | string;
  };
  usernameError: string;
  emailError: string;
  editMode: boolean;
  followers: number;
  following: number;
}

type User = {
  username: string;
  email: string;
  image: string | {uri: string};
};

const INITIAL_USERDATA = {
  username: 'InitialUsername',
  email: 'InitialEmail@test.test',
  image: Images.profileImage,
};

const ProfileScreen = () => {
  const [user, setUser] = useState<User>({
    username: INITIAL_USERDATA.username,
    email: INITIAL_USERDATA.email,
    image: INITIAL_USERDATA.image,
  });
  const [usernameError, setUsernameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [editMode, setEditMode] = useState<boolean>(false);
  const [followers, setFollowers] = useState<number>(23);
  const [following, setFollowing] = useState<number>(234);

  const getDataFromLocalstorage = async () => {
    const user = {
      username: '',
      email: '',
      image: {uri: ''},
    };

    user.username =
      (await StorageService.getData('username')) || INITIAL_USERDATA.username;

    user.email =
      (await StorageService.getData('email')) || INITIAL_USERDATA.email;

    user.image =
      (await StorageService.getDataObj('image')) || INITIAL_USERDATA.image;

    setUser(user);

    //StorageService.clearStorage();
  };

  useEffect(() => {
    getDataFromLocalstorage();
  }, []);

  const toggleEditMode = () => {
    setEditMode(currentValue => !currentValue);
  };

  const handleEmailChange = (email: string) => {
    this.setState(prevState => ({
      user: {...prevState.user, email: email},
    }));
  };

  const handleUsernameChange = (username: string) => {
    setUser(prevState => ({
      ...prevState,
      username: username,
    }));
  };

  const handleUpdate = () => {
    setUsernameError('');
    setEmailError('');

    if (user.username === '') {
      setUsernameError('Username should be at least 1 character');
      return;
    }

    if (user.username.length > 20) {
      setUsernameError('Username cant be more than 20 characters');
      return;
    }

    if (!user.username.match(new RegExp(/^[a-zA-Z]{1,20}$/gm))) {
      setUsernameError('Username can contain only Latin letters');
      return;
    }

    if (!user.email.match(new RegExp(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/))) {
      this.setState({emailError: 'Invalid email pattern!'});
      return;
    }

    StorageService.storeData('username', user.username);
    StorageService.storeData('email', user.email);

    toggleEditMode();
  };

  const pickImageAndStoreState = async (): Promise<void> => {
    try {
      const result = await ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });

      if (!result || !result.assets) {
        throw new Error('Error during image selection!');
      }

      if (!result.assets[0].uri) {
        throw new Error('Image not found!');
      }

      if (result.didCancel) {
        return;
      }

      setUser(prevState => ({
        ...prevState,
        image: result?.assets ? result.assets[0] : INITIAL_USERDATA.image,
      }));

      StorageService.storeDataObj(
        'image',
        result?.assets ? result.assets[0] : INITIAL_USERDATA.image,
      );
    } catch (error) {
      console.log('ERROR during image selection:', error);
    }
  };

  const editButtonElement = () => {
    return (
      <View style={ProfileScreenStyles.textButtonContainer}>
        <TextButton
          color={Colors.white}
          text={'Edit'}
          onPress={() => toggleEditMode()}
        />
      </View>
    );
  };

  const updateProfileButtonElement = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={ProfileScreenStyles.buttonContainerStyle}>
        <View style={ProfileScreenStyles.filledButtonContainer}>
          <FilledButton
            title={editMode ? 'Update profile' : 'Show state'}
            onPress={() =>
              editMode
                ? handleUpdate()
                : console.log(user, editMode, followers, following)
            }
          />
        </View>
      </KeyboardAvoidingView>
    );
  };

  return (
    <>
      <BackgroundForm
        editMode={editMode}
        mainTitleElement={
          <Text style={ProfileScreenStyles.profileTextStyle}>My profile</Text>
        }
        profileHeaderContainerStyle={ProfileScreenStyles.profileHeaderContainer}
        imageBackgroundStyle={ProfileScreenStyles.backgroundImageViewStyle}
        backgroundFormChildrenContainerStyle={
          ProfileScreenStyles.backgroundFormChildrenContainer
        }
        updateProfileButtonElement={updateProfileButtonElement()}
        editButtonElement={editButtonElement()}>
        <ProfileImage
          disabled={!editMode}
          editMode={editMode}
          onPress={pickImageAndStoreState}
          image={user.image}
        />
        {!editMode && (
          <>
            <SocialSection followers={followers} following={following} />
            <Stack size={33} />
          </>
        )}
        <CredentialTextInput
          placeholder="Username"
          placeholderTextColor="black"
          value={user.username}
          onChangeText={username => handleUsernameChange(username)}
          editable={editMode}
        />
        <Stack size={5} />
        {usernameError && <Text>{usernameError}</Text>}
        <Stack size={10} />

        <CredentialTextInput
          placeholder="Email"
          placeholderTextColor="black"
          value={user.email}
          onChangeText={email => handleEmailChange(email)}
          editable={editMode}
        />
        <Stack size={5} />
        {emailError && <Text>{emailError}</Text>}
        <Stack size={10} />
      </BackgroundForm>
    </>
  );
};

export default ProfileScreen;
