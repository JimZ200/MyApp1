import { SafeAreaView, Text } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-reanimated'; 
import { Image } from 'react-native';

const A = ()=>{ 
  return <Text style={tw `text-blue-800 mt-18 ml-18 text-4xl`}>Component A</Text>
}

const B = ()=>{ 
  return <Image style={[tw `mx-auto mt-2 w-46 h-46`]} source={""} />
}

function App() {
  const value = "HI";
  return (
   <SafeAreaView>
     <A/>
     <B/>
   </SafeAreaView>
  );
}

export default App;
