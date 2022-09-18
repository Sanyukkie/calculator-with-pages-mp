import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import HistoryScreen from './HistoryPage'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator 
    screenOptions={({route }) => ({ 
      tabBarIcon: ({ focused, color, size }) => {                       
        let iconName;            
        if (route.name === 'Home') {              
          iconName = 'calculator';            } 
          else if (route.name === 'History') {              
            iconName = 'archive';            
          }            
          return <Ionicons name={iconName} size={size} color={color} />;           
      },        
    })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  </NavigationContainer>);
};