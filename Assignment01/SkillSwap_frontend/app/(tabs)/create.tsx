import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Colors } from '@/constants/theme';

const categories = [
  'Programming',
  'Music',
  'Art',
  'Wellness',
  'Photography',
  'Language',
  'Cooking',
  'Sports',
  'Other',
];

export default function CreateScreen() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    duration: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.category || !formData.duration) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    Alert.alert(
      'Success', 
      'Skill offer posted successfully!',
      [{ text: 'OK', onPress: () => {
        // Reset form
        setFormData({
          title: '',
          description: '',
          category: '',
          duration: '',
        });
      }}]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create Skill Offer</Text>
        <Text style={styles.headerSubtitle}>Share your expertise with others</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Skill Title *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Python Programming, Guitar Lessons"
              placeholderTextColor="#666"
              value={formData.title}
              onChangeText={(value) => handleInputChange('title', value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Description *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe what you'll teach and what learners can expect"
              placeholderTextColor="#666"
              value={formData.description}
              onChangeText={(value) => handleInputChange('description', value)}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Category *</Text>
            <View style={styles.categoryGrid}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryButton,
                    formData.category === category && styles.categoryButtonSelected,
                  ]}
                  onPress={() => handleInputChange('category', category)}
                >
                  <Text
                    style={[
                      styles.categoryButtonText,
                      formData.category === category && styles.categoryButtonTextSelected,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Session Duration *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., 1 hour, 2 hours, 30 minutes"
              placeholderTextColor="#666"
              value={formData.duration}
              onChangeText={(value) => handleInputChange('duration', value)}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Post Skill Offer</Text>
          </TouchableOpacity>
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
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.dark.icon,
  },
  content: {
    flex: 1,
  },
  form: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: Colors.dark.text,
    marginBottom: 12,
    fontWeight: '600',
  },
  input: {
    backgroundColor: Colors.dark.input,
    borderWidth: 1,
    borderColor: Colors.dark.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Colors.dark.text,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryButton: {
    backgroundColor: Colors.dark.secondary,
    borderWidth: 1,
    borderColor: Colors.dark.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryButtonSelected: {
    backgroundColor: Colors.dark.button,
    borderColor: Colors.dark.button,
  },
  categoryButtonText: {
    color: Colors.dark.text,
    fontSize: 14,
    fontWeight: '500',
  },
  categoryButtonTextSelected: {
    color: Colors.dark.buttonText,
  },
  submitButton: {
    backgroundColor: Colors.dark.button,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  submitButtonText: {
    color: Colors.dark.buttonText,
    fontSize: 16,
    fontWeight: '600',
  },
});
