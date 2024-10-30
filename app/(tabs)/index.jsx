import {
  Image,
  StyleSheet,
  Platform,
  FlatList,
  View,
  Text,
} from "react-native";
import React from "react";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  // Imagenes
  const images = [
    {
      id: "1",
      src: require('@/assets/images/partial-react-logo.png'),
      
      description: "imagen 1",
    },
    {
      id: "2",
      src: require('@/assets/images/favicon.png'),
      description: "imagen 2",
    },
    {
      id: "3",
      src: require('@/assets/images/icon.png'),
      description: "imagen 3",
    },
    {
      id: "4",
      src: require('@/assets/images/partial-react-logo.png'),
      description: "imagen 4",
    },
    {
      id: "5",
      src: require('@/assets/images/react-logo@3x.png'),
      description: "imagen 5",
    },
  ];
  // No se porque no me cargan kas imagenes, me da un error de carga, probe mil cosas y no pude solucionarlo, en el ta1 subi una imagen del logo con ese mismo formato
  // de ruta y no me dio ningun problema

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
