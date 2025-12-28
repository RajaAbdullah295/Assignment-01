import { Colors } from '@/constants/theme';
import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// Dummy data for skill offers
const dummyOffers = [
  {
    id: 1,
    title: 'Python Programming',
    description: 'Learn Python from basics to advanced concepts',
    user: 'Ali Ahmed',
    category: 'Programming',
    duration: '2 hours',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Guitar Lessons',
    description: 'Acoustic guitar lessons for beginners',
    user: 'Fatima Khan',
    category: 'Music',
    duration: '1 hour',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Digital Art & Drawing',
    description: 'Learn digital art and illustration techniques',
    user: 'Ahmed Hassan',
    category: 'Art',
    duration: '1.5 hours',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Yoga & Meditation',
    description: 'Beginner-friendly yoga and mindfulness sessions',
    user: 'Sara Ali',
    category: 'Wellness',
    duration: '1 hour',
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Web Development',
    description: 'Full-stack web development with React and Node.js',
    user: 'Omar Sheikh',
    category: 'Programming',
    duration: '3 hours',
    rating: 4.6,
  },
  {
    id: 6,
    title: 'Photography Basics',
    description: 'Learn composition, lighting, and camera settings',
    user: 'Layla Ahmed',
    category: 'Photography',
    duration: '2 hours',
    rating: 4.8,
  },
];

export default function HomeScreen() {
  const renderOfferCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.offerCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.user}>👤 {item.user}</Text>
        <Text style={styles.duration}>⏱️ {item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SkillSwap</Text>
        <Text style={styles.headerSubtitle}>Discover skills to learn and share</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Available Skills</Text>
        <FlatList
          data={dummyOffers}
          renderItem={renderOfferCard}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: Colors.dark.card,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.border,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.dark.text,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.dark.icon,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  offerCard: {
    backgroundColor: Colors.dark.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.dark.border,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  category: {
    fontSize: 12,
    color: Colors.dark.button,
    backgroundColor: Colors.dark.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    fontWeight: '500',
  },
  rating: {
    fontSize: 14,
    color: Colors.dark.icon,
    fontWeight: '500',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.dark.icon,
    lineHeight: 20,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    fontSize: 14,
    color: Colors.dark.text,
    fontWeight: '500',
  },
  duration: {
    fontSize: 14,
    color: Colors.dark.icon,
  },
});