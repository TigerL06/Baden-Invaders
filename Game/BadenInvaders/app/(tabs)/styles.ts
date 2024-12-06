import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: "auto",
    justifyContent: 'center',
  },
  gameArea: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  score: {
    position: 'absolute',
    top: 40,
    right: 20,
    fontSize: 24,
    color: 'white',
    fontWeight: "bold",
    zIndex: 10,
  },
  title:{
    position: 'absolute',
    top: 160,
    flex: 1,
    justifyContent: 'center', // Vertikale Zentrierung
    alignItems: 'center',    // Horizontale Zentrierung
    fontSize: 24,
    color: 'white',
    fontWeight: "bold",
    zIndex: 10,
  },
  title2:{
    position: 'absolute',
    top: 200,
    flex: 1,
    justifyContent: 'center', // Vertikale Zentrierung
    alignItems: 'center',    // Horizontale Zentrierung
    fontSize: 24,
    color: 'white',
    fontWeight: "bold",
    zIndex: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  player: {
    width: 50,
    height: 100,
    position: 'absolute', // Position des Raumschiffs festlegen
    bottom: 30, // Verschiebt das Raumschiff nach unten
  },
  enemy: {
    width: 100,
    height: 100,
    position: 'absolute',
  },
  bullet: {
    width: 10,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    position: 'absolute',
  },
  controls: {
    position: 'absolute',
    bottom: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
  topLeftButton: {
    position: 'absolute',
    top: 10, // Abstand vom oberen Rand
    left: 10, // Abstand vom rechten Rand
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  
});

export default styles;
