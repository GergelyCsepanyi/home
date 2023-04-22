import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const SocialSectionStyles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    borderWidth: 0.5,
    borderColor: Colors.bluePurple,
    borderRadius: 20,
  },
  separatorStyle: {
    height: '40%',
    borderWidth: 0.5,
    borderColor: Colors.bluePurple,
    alignSelf: 'center',
  },
});

export default SocialSectionStyles;
