import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroContainer: {
    position: 'relative',
    width: screenWidth,
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logo: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: [{ translateX: -100 }],
    width: 200,
    height: 80,
    resizeMode: 'contain',
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001F5B',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#333',
  },
  orderButton: {
    alignSelf: 'center',
    backgroundColor: '#001F5B',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 8,
    marginVertical: 20,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mostPopularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001F5B',
    textAlign: 'center',
    marginVertical: 25,
    letterSpacing: 1,
  },
  featuredCar: {
    width: screenWidth - 40,
    height: 180,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  thumbnailList: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  thumbnail: {
    width: 120,
    height: 90,
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});

export default styles;
