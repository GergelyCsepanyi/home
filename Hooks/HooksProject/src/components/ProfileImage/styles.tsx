import {StyleSheet} from 'react-native';

const ProfileImageStyles = StyleSheet.create({
  viewContainerStyle: {
    width: 75,
    marginBottom: 42,
    marginTop: -70,
    marginLeft: -290,
  },
  touchableOpacityStyle: {
    width: 75,
    borderRadius: 20,
  },
  imageStyle: {
    borderRadius: 20,
  },
  profileImageStyle: {
    width: 75,
    height: 75,
    borderRadius: 20,
  },
  cameraOnProfileImageStyle: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 5,
    top: 48,
  },
});

export default ProfileImageStyles;
