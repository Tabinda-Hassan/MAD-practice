import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 60) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  grid: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    margin: 7,
    borderRadius: 10,
    paddingBottom: 10,
    elevation: 3,
    shadowColor: '#aaa',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  carName: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#001F5B',
    textAlign: 'center',
  },
  carPrice: {
    color: '#001F5B',
    fontWeight: 'bold',
    marginTop: 5,
  },
  cartButton: {
    marginTop: 10,
    backgroundColor: '#001F5B',
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 5,
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    color: '#444',
    marginTop: 20,
  },
});

export default styles;

