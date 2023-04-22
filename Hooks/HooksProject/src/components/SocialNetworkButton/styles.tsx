import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const SocialNetworkButtonStyles = StyleSheet.create({
  touchableOpacityStyle: {
    width: 45,
    height: 45,
    backgroundColor: Colors.lightRed,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 16,
    marginTop: 20,
  },
});

export default SocialNetworkButtonStyles;
