import {
  Image,
  StyleSheet,
  Platform,
  Button,
  FlatList,
  View,
  Text,
} from "react-native";
import React, {useState} from "react";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  // Imagenes
  const images = [
    {
      id: "1",
      src: { uri: 'https://imgs.elpais.com.uy/dims4/default/89ad95d/2147483647/strip/true/crop/6004x4128+139+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fc5%2F81%2F1b4307484319bc3fe109a74fef16%2Fthe-strongest-vs-pena-17997475.jpg' }, 
      description: "imagen 1",
    },
    {
      id: "2",
      src: { uri: 'https://cdn.pixabay.com/photo/2024/02/22/05/40/natural-scenery-8589165_640.jpg' }, 
      description: "imagen 2",
    },
    {
      id: "3",
      src: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PixZnCUpWjg-5MOpAKn6A92tSolXBqfIAA&s' }, 
      description: "imagen 3",
    },
    {
      id: "4",
      src: { uri: 'https://st5.depositphotos.com/64145070/64693/i/450/depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg' }, 
      description: "imagen 4",
    },
    {
      id: "5",
      src: { uri: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-souvenirpixels-1619317.jpg&fm=jpg' }, 
      description: "imagen 5",
    },
  ];
 

  // Boton para cambiar imagenes

  const [imagenActual, setImagenActual] = useState(0);

  const cambiarImagen = () => {
    setImagenActual((indicePrevio) => (indicePrevio + 1) % images.length);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Galeria de imagens!</ThemedText>
        <HelloWave />
      </ThemedView>

      <View style={styles.mainImageContainer}>
        <Image source={images[imagenActual].src} style={styles.mainImage} />
        <Text style={styles.imageDescription}>
          {images[imagenActual].description}
        </Text>
        <Button title="Cambiar imagen" onPress={cambiarImagen} color="red" />
      </View>

      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.src} style={styles.image} />
            <Text style={styles.imageDescription}>{item.description}</Text>
          </View>
        )}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  mainImageContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  mainImage: {
    width: 200,
    height: 200,
    marginBottom: 8,
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  imageDescription: {
    marginTop: 4,
    fontSize: 14,
  },

  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
