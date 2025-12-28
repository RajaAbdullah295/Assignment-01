import { Colors } from '@/constants/theme';
import { router } from 'expo-router';
import React from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// Dummy user data
const user = {
  name: 'Your Name',
  email: 'test@student.com',
  skills: ['React Native', 'Guitar', 'Photography', 'Python'],
  bio: 'A passionate developer and musician looking to share my skills with the world. I love helping others learn new things!',
  rating: 4.8,
  sessionsCompleted: 12,
  skillsOffered: 3,
};

const myOffers = [
  {
    id: 1,
    title: 'React Native Development',
    category: 'Programming',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Guitar Lessons',
    category: 'Music',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Photography Basics',
    category: 'Photography',
    status: 'Completed',
  },
];

export default function ProfileScreen() {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => router.replace('/login')
        },
      ]
    );
  };

  const renderSkillTag = (skill: string) => (
    <View key={skill} style={styles.skillTag}>
      <Text style={styles.skillText}>{skill}</Text>
    </View>
  );

  const renderOfferCard = (offer: any) => (
    <View key={offer.id} style={styles.offerCard}>
      <View style={styles.offerHeader}>
        <Text style={styles.offerTitle}>{offer.title}</Text>
        <View style={[
          styles.statusBadge,
          offer.status === 'Active' ? styles.activeBadge : styles.completedBadge
        ]}>
          <Text style={[
            styles.statusText,
            offer.status === 'Active' ? styles.activeText : styles.completedText
          ]}>
            {offer.status}
          </Text>
        </View>
      </View>
      <Text style={styles.offerCategory}>{offer.category}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Info */}
        <View style={styles.userCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {user.rating}</Text>
            <Text style={styles.ratingText}>Average Rating</Text>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Skills</Text>
          <View style={styles.skillsContainer}>
            {user.skills.map(renderSkillTag)}
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.sessionsCompleted}</Text>
            <Text style={styles.statLabel}>Sessions Completed</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{user.skillsOffered}</Text>
            <Text style={styles.statLabel}>Skills Offered</Text>
          </View>
        </View>

        {/* My Offers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Skill Offers</Text>
          {myOffers.map(renderOfferCard)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: Colors.dark.card,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.border,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  logoutButton: {
    backgroundColor: Colors.dark.secondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  logoutText: {
    color: Colors.dark.text,
    fontSize: 14,
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  userCard: {
    backgroundColor: Colors.dark.card,
    margin: 24,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.dark.border,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.dark.button,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.dark.buttonText,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.text,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: Colors.dark.icon,
    marginBottom: 16,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  rating: {
    fontSize: 18,
    color: Colors.dark.text,
    fontWeight: '600',
  },
  ratingText: {
    fontSize: 14,
    color: Colors.dark.icon,
    marginTop: 4,
  },
  section: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    color: Colors.dark.icon,
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    backgroundColor: Colors.dark.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.dark.border,
  },
  skillText: {
    color: Colors.dark.text,
    fontSize: 14,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 24,
    gap: 16,
  },
  statItem: {
    flex: 1,
    backgroundColor: Colors.dark.card,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.dark.border,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.dark.icon,
    textAlign: 'center',
  },
  offerCard: {
    backgroundColor: Colors.dark.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.dark.border,
  },
  offerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.dark.text,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  activeBadge: {
    backgroundColor: Colors.dark.button,
  },
  completedBadge: {
    backgroundColor: Colors.dark.secondary,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  activeText: {
    color: Colors.dark.buttonText,
  },
  completedText: {
    color: Colors.dark.icon,
  },
  offerCategory: {
    fontSize: 14,
    color: Colors.dark.icon,
  },
});
