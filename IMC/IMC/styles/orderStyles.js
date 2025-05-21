import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#001F5B',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#001F5B',
  },
  pickerContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 10,
  },
  submitButton: {
    backgroundColor: '#001F5B',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
