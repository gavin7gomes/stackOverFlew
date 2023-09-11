import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, Linking } from 'react-native';

const QuestionItem = ({ question }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
        Linking.openURL(question.link);
      }}>
      <View style={styles.metadata}>
        <Text style={styles.score}>{question.score}</Text>
        <Text style={styles.answerCount}>{question.answer_count} answers</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{question.title}</Text>
        <Text style={styles.link}>{question.link}</Text>
      <View style={styles.tagsContainer}>
          {question.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  metadata: {
    alignItems: 'center',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077cc',
  },
  answerCount: {
    fontSize: 12,
    color: '#555',
  },
  details: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  link: {
    fontSize: 14,
    color: '#0077cc',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#0077cc',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 4,
    borderRadius: 4,
    fontSize: 12,
  },
});

export default QuestionItem;
