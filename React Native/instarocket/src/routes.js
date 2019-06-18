import { createAppContainer, createStackNavigator } from 'react-navigation'

import Feed from './pages/Feed'
import New from './pages/New'

export default createAppContainer(
  createStackNavigator({
    Feed,
    New
  }, {
      initialRouteName: 'Feed',
      defaultNavigationOptions: {
        headerTitle: 'InstaRocket',
        headerTintColor: '#000',
        headerBackTitle: null
      },
      mode: 'modal'
    })
)