import { createSwitchNavigator, createStackNavigator} from 'react-navigation';
import Root from '../components/Root';
import LoginScreen from '../components/AuthComponents/LoginScreen';
import SignupScreen from '../components/AuthComponents/SignupScreen';
import HomeScreen from '../components/AppComponents/HomeScreen';

export const AppStack = createStackNavigator({
  MyAccount: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
}, {
  initialRouteName: 'MyAccount',
});

export const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      header: null
    },
  }
}, {
    initialRouteName: 'Login'
});


export const RootSwitch = createSwitchNavigator({
  Root: {
    screen: Root
  },
  App: {
    screen: AppStack
  },
  Auth: {
    screen: AuthStack
  },
}, {
  initialRouteName: 'Root'
});
