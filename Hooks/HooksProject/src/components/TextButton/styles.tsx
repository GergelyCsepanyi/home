import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const TextButtonStyles = StyleSheet.create({
  touchableOpacityStyle: {
    alignSelf: 'flex-start',
  },
  textStyle: {
    color: Colors.darkBlue,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default TextButtonStyles;
