import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const ProfileScreenStyles = StyleSheet.create({
  profileHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  profileTextStyle: {
    flex: 10,
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  backgroundImageViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 122,
    height: '50%',
  },
  backgroundFormChildrenContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 10,
    justifyContent: 'flex-end',
  },

  buttonContainerStyle: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 40,
  },

  textButtonContainer: {justifyContent: 'center', paddingEnd: 5},

  filledButtonContainer: {
    height: 50,
    width: '90%',
    marginBottom: 20,
  },
});

export default ProfileScreenStyles;
