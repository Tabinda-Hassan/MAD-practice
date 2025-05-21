import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from '../styles/shopStyles';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const carData = [
  {
    id: '1',
    name: 'HONDA VESSEL',
    price: '$5,004.00',
    image: require('../assets/images/car1.png'),
  },
  {
    id: '2',
    name: 'HODA FIT',
    price: '$5,343,529.00',
    image: require('../assets/images/car2.png'),
  },
  {
    id: '3',
    name: 'HUSTLER',
    price: '$6,289,632.00',
    image: require('../assets/images/car3.png'),
  },
  {
    id: '4',
    name: 'NISSAN DAYZ',
    price: '$599,826,352.00',
    image: require('../assets/images/car4.png'),
  },
  {
    id: '5',
    name: 'TOYOTA YARIS',
    price: '$5,398,377.00',
    image: require('../assets/images/car5.png'),
  },
  {
    id: '6',
    name: 'HAVAL',
    price: '$62,008,272.00',
    image: require('../assets/images/car6.png'),
  },
];

const CarShopScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [successId, setSuccessId] = useState(null);
  const navigation = useNavigation();

  const { addToCart, getTotalPrice, cartItems } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    setSuccessId(item.id);
    setTimeout(() => setSuccessId(null), 2000); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.carName}>{item.name}</Text>
      <Text style={styles.carPrice}>{item.price}</Text>

      <TouchableOpacity style={styles.cartButton} onPress={() => handleAddToCart(item)}>
        <Ionicons name="cart" size={20} color="#fff" />
      </TouchableOpacity>

      {successId === item.id && (
        <Text style={{ color: 'green', marginTop: 5 }}>Item added successfully</Text>
      )}
    </View>
  );

  return (
    <View style={`styles`.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search Products"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
        <Entypo name="grid" size={20} color="#001F5B" style={{ marginLeft: 10 }} />
        <Entypo name="menu" size={20} color="#001F5B" style={{ marginLeft: 10 }} />
      </View>

      {/* Car List */}
      <FlatList
        data={carData.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />

      {/* Continue Button with Total Price */}
      {cartItems.length > 0 && (
        <TouchableOpacity
          style={{
            backgroundColor: '#001F5B',
            padding: 15,
            margin: 10,
            borderRadius: 8,
            alignItems: 'center',
          }}
          onPress={() => Alert.alert('Cart Total', `$${getTotalPrice()}`)}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Continue (${getTotalPrice()})
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.footer}>
          <Text style={styles.footerText}>
            islamabadmotorcompany.com | 469-226-9613 | Blue Area, Islamabad.
          </Text>
        </View>
    </View>
    
  );
};

export default CarShopScreen;


