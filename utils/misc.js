import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const camelToKebabCase = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };
  
export const getTabIcon = (routeName, focused, size, color) => {
    let iconName;
  
    switch (routeName) {
      case 'React':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'React Native':
        iconName = focused ? 'person' : 'person-outline';
        break;
        case 'Node':
            iconName = focused ? 'person' : 'person-outline';
            break;
      default:
        iconName = 'default-icon';
    }
  
    return <Image source={require('../assets/icons/react.svg')} />;
  }
  