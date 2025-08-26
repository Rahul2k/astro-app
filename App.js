import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JournalProvider } from './src/context/JournalContext';
import HomeScreen from './src/screens/HomeScreen';
import JournalScreen from './src/screens/JournalScreen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {defualt as mapping} from "./mapping.json";
import useCachedResources from './src/hooks/useCachedResources.js';

const Stack = createStackNavigator();

const App = () => {
    const isLoadingComplete = useCachedResources();
    
    return (
        <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
            <JournalProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Home"
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: 'rgb(246,237,229)',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    >
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{ 
                                title: 'Your Jyotish ॐ', 
                                headerTitleStyle:{
                                    color:'#000', 
                                    fontFamily: 'Tiro-Italic'
                                }
                            }}
                        />
                        <Stack.Screen
                            name="Journal"
                            component={JournalScreen}
                            options={{ 
                                title: 'My Journal', 
                                headerTitleStyle:{
                                    color:'#000', 
                                    fontFamily: 'Tiro-Italic'
                                }, 
                                headerTintColor:'#000'
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </JournalProvider>
        </ApplicationProvider>
    );
};

export default App;

