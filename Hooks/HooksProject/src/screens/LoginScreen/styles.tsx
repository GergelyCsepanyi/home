import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const LoginScreenStyles = StyleSheet.create({
  textStyle: {
    color: Colors.bluePurple,
  },

  backgroundImageViewStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundFormChildrenContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'flex-end',
  },

  filledButtonContainer: {
    height: 45,
    width: '100%',
  },

  forgetButtonContainer: {alignSelf: 'flex-start'},

  dontHaveButtonContainer: {alignSelf: 'center'},
});

export default LoginScreenStyles;
