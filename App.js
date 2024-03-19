import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import { styles } from './AppStyle';

export default function App() {
  return (
    <View style={styles.container}>
     <StatusBar backgroundColor="#00E5E5" barStyle="dark-content" />
      <Image style={styles.imagens}
        source={require('./assets/Astronauta.jpg')}
      />
         <Text style={styles.texto}>Esse é um pequeno passo para o homem,
         mas um gigantesco salto para a humanidade</Text>
      
    </View>
  );
}


