import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  logo: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001F5B',
    marginLeft: 10,
    flex: 1,
  },
  closeIcon: {
    padding: 4,
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    fontSize: 16,
    color: '#001F5B',
    paddingVertical: 10,
    fontWeight: '600',
  },
  menuItemPrimary: {
    fontSize: 16,
    color: '#007BFF',
    paddingVertical: 10,
    fontWeight: '700',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default styles;
