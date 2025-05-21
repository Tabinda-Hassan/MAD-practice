import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const { cartItems, removeFromCart, getTotalPrice, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigation = useNavigation();
const getImageSource = (imageName) => {
  switch (imageName) {
    case 'car1.png':
      return require('../assets/images/car1.png');
    case 'car2.png':
      return require('../assets/images/car2.png');
    case 'car3.png':
      return require('../assets/images/car3.png');
   
    default:
      return require('../assets/images/car4.png'); // fallback
  }
};

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.itemContent}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Text style={styles.remove}>Remove</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={getImageSource(item.image)}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  </View>
);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}

      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>Total: ${getTotalPrice()}</Text>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={clearCart}
          >
            <Text style={styles.clearText}>Clear Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate('AccountInfo')}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#001F5B',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  cardContent: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

image: {
  width: 80,
  height: 80,
  borderRadius: 8,
  marginLeft: 10,
},
itemContent: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
image: {
  width: 80,
  height: 60,
  marginLeft: 10,
  borderRadius: 8,
},

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  remove: {
    color: 'red',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    gap: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001F5B',
  },
  clearButton: {
    backgroundColor: '#97bd99',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  clearText: {
    color: 'white',
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#001F5B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  continueText: {
    color: 'white',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default CartScreen;
