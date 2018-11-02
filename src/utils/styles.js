import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  mainBlueContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(35, 106, 240)',
  },
  flatTextInput: {
    marginVertical: 12,
    height: 40,
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderColor: 'red',
  },
  borderTextInput: {
    marginVertical: 5,
    height: 38,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderColor: 'rgb(220, 220, 220)',
    borderWidth: 1,
  },
  bigOrangeButton: {
    backgroundColor: 'rgb(245, 92, 6)',
    borderRadius: 4,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '800',
  }
});

const fonts = StyleSheet.create({
  CastledownBold: {
    fontFamily: 'castledown-bold'
  },
  CastledownFun: {
    fontFamily: 'castledown-fun'
  },
  CastledownRegular: {
    fontFamily: 'castledown-regular'
  },
  RobotoBlack: {
    fontFamily: 'Roboto-Black'
  },
  RobotoBlackItalic: {
    fontFamily: 'Roboto-BlackItalic'
  },
  RobotoBold: {
    fontFamily: 'Roboto-Bold'
  },
  RobotoBoldItalic: {
    fontFamily: 'Roboto-BoldItalic'
  },
  RobotoItalic: {
    fontFamily: 'Roboto-Italic'
  },
  RobotoLight: {
    fontFamily: 'Roboto-Light'
  },
  RobotoLightItalic: {
    fontFamily: 'Roboto-LightItalic'
  },
  RobotoMedium: {
    fontFamily: 'Roboto-Medium'
  },
  RobotoMediumItalic: {
    fontFamily: 'Roboto-MediumItalic'
  },
  RobotoRegular: {
    fontFamily: 'Roboto-Regular'
  },
  RobotoThin: {
    fontFamily: 'Roboto-Thin'
  },
  RobotoThinItalic: {
    fontFamily: 'Roboto-ThinItalic'
  },
  RobotoSlabBold: {
    fontFamily: 'RobotoSlab-Bold'
  },
  RobotoSlabLight: {
    fontFamily: 'RobotoSlab-Light'
  },
  RobotoSlabRegular: {
    fontFamily: 'RobotoSlab-Regular'
  },
  RobotoSlabThin: {
    fontFamily: 'RobotoSlab-Thin'
  },
  OpenSans: {
    fontFamily: 'OpenSans'
  }
});

module.exports = {
  styles,
  fonts
};
