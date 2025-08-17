import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CosmoSudoku</Text>
      <Text style={styles.subtitle}>Bem-vindo ao jogo de Sudoku espacial!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#0a0a23',
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
