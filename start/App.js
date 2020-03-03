import React from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

export default function App() {
  return (
    <AppNavigator/>
  );
}
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={{ color: '#fff' }}>Home</Text>
      </View>
    );
  }
}

class TrendingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={{ color: '#fff' }}>Trending</Text>
      </View>
    );
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={'home'}
          size={20}
          style={{ color: tintColor }}
        />
      )
    }
  },
  TrendingScreen: {
    screen: TrendingScreen,
    navigationOptions: {
      tabBarLabel: 'Trending',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name={'whatshot'} size={20} style={{ color: tintColor }} />
      ),
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#121212',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        paddingVertical: 5
      },
    }
});

const AppNavigator = createAppContainer(createStackNavigator({
  BottomTabNavigator: BottomTabNavigator
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#121212",
        borderBottomWidth: 0
      },
      headerLeft: <Image
        source={{ uri: 'https://raw.githubusercontent.com/Chandankkrr/react-native-youtube-ui/master/assets/images/yt_logo_rgb_dark.png'}}
        style={{ height: 22, width: 98, marginLeft: 10, }}
      />,
      headerRight: (
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='cast' size={25} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='videocam' size={25} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='search' size={25} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='account-circle' size={25} color={'#fff'} />
          </TouchableOpacity>
        </View>
      )
    }
  }
));


