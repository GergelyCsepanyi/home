import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import BackgroundForm from '../../components/BackgroundForm';
import CredentialTextInput from '../../components/CredentialTextInput';
import FilledButton from '../../components/FilledButton';
import SocialNetworkButtonForm from '../../components/SocialNetworkButtonForm';
import TextButton from '../../components/TextButton';
import {Stack} from 'react-native-spacing-system';
import Colors from '../../theme/Colors';
import LoginScreenStyles from './styles';
import useDeviceOrientation from '../../hooks/useDeviceOrientation';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const orientation = useDeviceOrientation();

  useEffect(() => {
    console.log('useEffect call');
  });

  useEffect(() => {
    console.log('useEffect call');
  }, []);

  useEffect(() => {
    console.log('useEffect call');
  }, [email]);

  return (
    <BackgroundForm
      imageBackgroundStyle={LoginScreenStyles.backgroundImageViewStyle}
      backgroundFormChildrenContainerStyle={
        LoginScreenStyles.backgroundFormChildrenContainer
      }>
      <CredentialTextInput
        placeholder="Email"
        placeholderTextColor={Colors.bluePurple}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <Stack size={15} />
      <CredentialTextInput
        placeholder="Password"
        placeholderTextColor={Colors.bluePurple}
        secureTextEntry={true}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <Stack size={30} />
      <View style={LoginScreenStyles.forgetButtonContainer}>
        <TextButton text="Forget Password?" />
      </View>
      <Stack size={40} />
      <View style={LoginScreenStyles.filledButtonContainer}>
        <FilledButton
          title="Sign In"
          onPress={() =>
            console.log("'Sign in' button was pressed", email, password)
          }
        />
      </View>
      <Stack size={18} />
      <Text style={LoginScreenStyles.textStyle}>or sign in with</Text>
      <Stack size={18} />

      <SocialNetworkButtonForm />
      <Stack size={30} />

      <View style={LoginScreenStyles.dontHaveButtonContainer}>
        <TextButton color={Colors.bluePurple} text="Don’t have an account?" />
      </View>
      <Stack size={10} />
    </BackgroundForm>
  );
};

export default LoginScreen;
