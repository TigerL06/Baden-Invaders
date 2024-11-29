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
    zIndex: 10,
  },
  player: {
    width: 50,
    height: 50,
    position: 'absolute', // Position des Raumschiffs festlegen
    bottom: 30, // Verschiebt das Raumschiff nach unten
  },
  enemy: {
    width: 50,
    height: 50,
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
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default styles;
