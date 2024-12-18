import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles'; // Import der Stile

// Typdefinitionen
type Bullet = { id: string; x: number; y: number };
type Enemy = { id: string; x: number; y: number };

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<'Game' | 'ResetOptions'>('Game'); // Bildschirmverwaltung
  const [playerPosition, setPlayerPosition] = useState<number>(0); // Spielerposition
  const [bullets, setBullets] = useState<Bullet[]>([]); // Schüsse
  const [enemies, setEnemies] = useState<Enemy[]>([]); // Gegner
  const [score, setScore] = useState<number>(0); // Punktestand

  // Spielerbewegung
  const movePlayer = (direction: number) => {
    setPlayerPosition((prev) => Math.max(-150, Math.min(prev + direction * 10, 150)));
  };

  // Gegner spawnen (weniger schnell und keine Bewegung)
  useEffect(() => {
    if (currentScreen !== 'Game') return;

    const interval = setInterval(() => {
      const randomX = Math.random() * 300 - 150; // Zufällige Position im Bereich von -150 bis 150
      setEnemies((prev) => [
        ...prev,
        { id: Math.random().toString(), x: randomX, y: -50 }, // Gegner erscheinen oben
      ]);
    }, 2000); // Verlangsamt das Erzeugen der Gegner
    return () => clearInterval(interval);
  }, [currentScreen]);

  // Kollisionsprüfung und Punkte-Update
  useEffect(() => {
    if (currentScreen !== 'Game') return;

    const interval = setInterval(() => {
      setBullets((prev) =>
        prev
          .map((bullet) => ({ ...bullet, y: bullet.y - 10 })) // Schüsse bewegen sich nach oben
          .filter((bullet) => bullet.y > -400) // Schüsse entfernen, wenn sie das obere Ende erreichen
      );

      setEnemies((prevEnemies) =>
        prevEnemies.filter((enemy) => {
          const hit = bullets.some(
            (bullet) =>
              Math.abs(bullet.x - enemy.x) < 25 && Math.abs(bullet.y - enemy.y) < 25
          );
          if (hit) setScore((prevScore) => prevScore + 10); // Punkte erhöhen
          return !hit; // Entferne den getroffenen Gegner
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [bullets, currentScreen]);

  // Schüsse erzeugen
  useEffect(() => {
    if (currentScreen !== 'Game') return;

    const interval = setInterval(() => {
      setBullets((prev) => [
        ...prev,
        { id: Math.random().toString(), x: playerPosition, y: 80 }, // Schüsse erscheinen direkt vor dem Raumschiff
      ]);
    }, 300);
    return () => clearInterval(interval);
  }, [playerPosition, currentScreen]);

  if (currentScreen === 'ResetOptions') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Möchten Sie ein neues Spiel starten?</Text>
        <Text style={styles.title2}>Aktueller Score: {score}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setScore(0);
            setEnemies([]);
            setBullets([]);
            setPlayerPosition(0);
            setCurrentScreen('Game');
          }}
        >
          <Text style={styles.buttonText}>Neues Spiel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentScreen('Game')}
        >
          <Text style={styles.buttonText}>Weiterfahren</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/background.jpg')} style={styles.background}>
        <Text style={styles.score}>Score: {score}</Text>
        <View style={styles.gameArea}>
          {/* Spieler (Raumschiff unten positioniert) */}
          <Image
            source={require('@/assets/images/player.png')}
            style={[styles.player, { transform: [{ translateX: playerPosition }, { translateY: -120 }] }]} // Raumschiff unten
          />
          {/* Gegner */}
          {enemies.map((enemy) => (
            <Image
              key={enemy.id}
              source={require('@/assets/images/enemy.png')}
              style={[styles.enemy, { transform: [{ translateX: enemy.x }, { translateY: enemy.y }] }]}
            />
          ))}
          {/* Schüsse */}
          {bullets.map((bullet) => (
            <View
              key={bullet.id}
              style={[
                styles.bullet,
                { transform: [{ translateX: bullet.x }, { translateY: bullet.y }] },
              ]}
            />
          ))}
        </View>

        {/* Steuerung Buttons */}
        <View style={styles.controls}>
          <TouchableOpacity style={styles.button} onPress={() => movePlayer(-1)}>
            <Text style={styles.buttonText}>⬅️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => movePlayer(1)}>
            <Text style={styles.buttonText}>➡️</Text>
          </TouchableOpacity>
        </View>

        {/* Neue Buttons oben links */}
        <TouchableOpacity
          style={styles.topLeftButton}
          onPress={() => setCurrentScreen('ResetOptions')}
        >
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default App;
