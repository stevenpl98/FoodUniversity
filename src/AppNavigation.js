import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from './screens/Home/HomeScreen';
import CategoriesScreen from './screens/Categories/CategoriesScreen';
import RecipeScreen from './screens/Recipe/RecipeScreen';
import RecipesListScreen from './screens/RecipesList/RecipesListScreen';
import DrawerContainer from './screens/DrawerContainer/DrawerContainer';
import IngredientScreen from './screens/Ingredient/IngredientScreen';
import SearchScreen from './screens/Search/SearchScreen';
import IngredientsDetailsScreen from './screens/IngredientsDetails/IngredientsDetailsScreen';


import AuthScreen from './screens/AuthLoadingScreen';
import DashboardScreen from './screens/Dashboard';
import ForgotScreen from './screens/ForgotPasswordScreen';
import InitialScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


const MainNavigator = createStackNavigator(
  {

    Init: InitialScreen,
    Auth: AuthScreen,
    Dashboard: DashboardScreen,
    Forgot: ForgotScreen,
    Login: LoginScreen,
    Register: RegisterScreen,

    Home: HomeScreen,
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen
  },
  {
    initialRouteName: 'Init',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontFamily: 'FallingSkyCond'
      }
    })
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;