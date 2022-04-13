/**
 * @format
 */

import {AppRegistry,I18nManager} from 'react-native';
import App from './src/App.tsx';
import {name as appName} from './app.json';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
AppRegistry.registerComponent(appName, () => App);
