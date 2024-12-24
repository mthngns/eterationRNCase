import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.configure()
  .use(reactotronRedux()) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
if (__DEV__) {
  console.log('Reactotron başlatıldı!');
}

export default reactotron;
