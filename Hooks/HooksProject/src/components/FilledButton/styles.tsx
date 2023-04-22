import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const FilledButtonStyles = StyleSheet.create({
  touchableOpacityStyle: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 15,
    color: Colors.white,
  },
});

export default FilledButtonStyles;
