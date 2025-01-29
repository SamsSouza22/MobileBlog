import { StyleSheet } from 'react-native';
import { WebView, View } from 'react-native-webview';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}> 
      <WebView
      style={styles.webview}
      source={{ uri: 'https://frontend-cvxux7qv9-samssouza22s-projects.vercel.app' }}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#f0f0f0', // Cor de fundo do contêiner
    padding: 10, // Espaçamento interno do contêiner
  },
  webview: {
    flex: 1, // Faz a WebView ocupar todo o espaço disponível no contêiner
    borderRadius: 10, // Bordas arredondadas para a WebView
  },
});