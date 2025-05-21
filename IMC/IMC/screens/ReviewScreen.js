import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  Linking,
} from 'react-native';
import axios from 'axios';

const FIREBASE_URL = 'https://islamabadmotorcompany-1d5f0-default-rtdb.firebaseio.com/reviews.json';

const ReviewScreen = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const intervalRef = useRef(null);
const [name, setName] = useState('');

 
  useEffect(() => {
    fetchReviews();
  }, []);


  useEffect(() => {
    if (reviews.length > 0) {
      startSlider();
    }
    return () => clearInterval(intervalRef.current); 
  }, [reviews]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(FIREBASE_URL);
      const data = response.data || {};
      const reviewList = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setReviews(reviewList.reverse()); 
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const startSlider = () => {
    clearInterval(intervalRef.current); 
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); 
  };
const submitReview = async () => {
  if (!name || !rating || !comment) {
    Alert.alert('Validation', 'Please fill in name, rating, and comment');
    return;
  }
  try {
    await axios.post(FIREBASE_URL, {
      name,
      rating,
      comment,
    });
    Alert.alert('Success', 'Thanks for your feedback!');
    setName('');
    setRating('');
    setComment('');
    await fetchReviews(); 
  } catch (err) {
    console.error('Error submitting review:', err);
  }
};



  const openEmail = () => Linking.openURL('mailto:islamabadmotorcompany@gmail.com');
  const callCompany = () => Linking.openURL('tel:03005103430');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>YOUR WORDS</Text>
      <Text style={styles.subtitle}>Thanks in advance for your interest!</Text>

      
      <View style={styles.reviewBox}>
        {reviews.length > 0 ? (
          <>
            <Text style={styles.reviewName}>
              {reviews[currentIndex].name || 'Anonymous'}
            </Text>
            <Text style={styles.reviewRating}>
              Rating: {reviews[currentIndex].rating || 'N/A'}
            </Text>
            <Text style={styles.reviewComment}>
              "{reviews[currentIndex].comment || 'No comment'}"
            </Text>
          </>
        ) : (
          <Text style={styles.reviewComment}>No reviews yet.</Text>
        )}
      </View>

      <Text style={styles.shareTitle}>Share Your Experience With Us</Text>
      <Text style={styles.shareText}>
        We value your feedback! Rate, email, or call us to help us improve your experience.
      </Text>
<TextInput
  placeholder="Your Name"
  value={name}
  onChangeText={setName}
  style={styles.input}
/>

      
      <TextInput
        placeholder="Rating (1-5)"
        value={rating}
        keyboardType="numeric"
        onChangeText={setRating}
        style={styles.input}
      />
      <TextInput
        placeholder="Write your comments here..."
        value={comment}
        onChangeText={setComment}
        multiline
        numberOfLines={3}
        style={[styles.input, { height: 80 }]}
      />

      <TouchableOpacity style={styles.buttonRate} onPress={submitReview}>
        <Text style={styles.buttonText}>Rate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonEmail} onPress={openEmail}>
        <Text style={styles.buttonText}>Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCall} onPress={callCompany}>
        <Text style={styles.buttonText}>Call</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        islamabadmotorcompany.com | 051-226-9613 | BlueArea, Islamabad
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 27,
    paddingTop: 19,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#004D40',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#444',
  },
  reviewBox: {
    backgroundColor: '#fdfdfd',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    minHeight: 120,
  },
  reviewName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  reviewRating: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  reviewComment: {
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
  },
  shareTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004D40',
    textAlign: 'center',
    marginBottom: 10,
  },
  shareText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#444',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonRate: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonEmail: {
    backgroundColor: '#1E3D59',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonCall: {
    backgroundColor: '#8fbc8f',
    borderColor: '#8fbc8f',
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    color: '#444',
    marginTop: 20,
  },
});

export default ReviewScreen;
