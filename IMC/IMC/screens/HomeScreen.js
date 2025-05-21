import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/homeStyles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image source={require('../assets/images/hero.jpeg')} style={styles.headerImage} />
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        </View>

        {/* Welcome Section */}
        <Text style={styles.title}>WELCOME TO ISLAMABAD MOTOR COMPANY!</Text>
        <Text style={styles.subtitle}>WHERE LUXURY IS BEYOND DREAMS</Text>
        <Text style={styles.description}>
          We specialize in offering a stellar selection of branded, imported, and quality local used cars tailored to meet our customers' discerning tastes and needs in Islamabad and beyond. At our core, we are driven by the mission to deliver excellence, ensuring every vehicle we sell meets the highest quality and satisfaction standards.
        </Text>

        {/* Order Now Button */}
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => navigation.navigate('Car Shop')}
        >
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>

        {/* Most Popular Section */}
        <Text style={styles.mostPopularTitle}>MOST POPULAR</Text>

        {/* Featured car */}
        <Image source={require('../assets/images/car1.png')} style={styles.featuredCar} />

        {/* Horizontal ScrollView of more cars */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.thumbnailList}
        >
          <Image source={require('../assets/images/car2.png')} style={styles.thumbnail} />
          <Image source={require('../assets/images/car3.png')} style={styles.thumbnail} />
          <Image source={require('../assets/images/car4.png')} style={styles.thumbnail} />
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            islamabadmotorcompany.com | 469-226-9613 | Blue Area, Islamabad.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

