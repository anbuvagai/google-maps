import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import * as Linking from "expo-linking";

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const destination = {
    latitude: 9.881917793666702,
    longitude: 78.07049882711758,
  }; // Example destination coordinates

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({});
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 9.881917793666702,
          longitude: 78.07049882711758,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {currentLocation && (
          <Marker coordinate={currentLocation} title="You are here" />
        )}
        <Marker coordinate={destination} title="Destination" />
      </MapView>
      <Button
        title="Start Navigation"
        onPress={() => {
          const url = `https://www.google.com/maps/dir/?api=1&destination=${destination.latitude},${destination.longitude}`;
          Linking.openURL(url);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "97%",
  },
});

export default App;
