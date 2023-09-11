import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../store/actions/questionsActions';
import QuestionItem from '../../components/QuestionItem/QuestionItem';
import LoaderWrapper from '../../components/LoaderWrapper/LoaderWrapper';

const NodeScreen = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const { nodeQuestions } = useSelector(({ questions }) => ({
    nodeQuestions: questions.nodejs.questions
  }));
  const loadNodeQuestions = async () => {
    setLoading(true);
    await dispatch(fetchQuestions({tag: "nodejs", pageSize: 10, order: "desc", sort: "hot"}));
    setLoading(false);
  }

  useEffect(() => {
    loadNodeQuestions()
    return () => {
      dispatch(resetQuestions("nodejs"))
    };
  }, [])

  return (
    <LoaderWrapper loading={loading}>
    <View style={styles.container}>
      <FlatList
      data={nodeQuestions}
      renderItem={({ item }) => <QuestionItem question={item} />}
      keyExtractor={(item) => item.question_id.toString()}
      onEndReached={async() => {
        await loadNodeQuestions()
      }}
    />
    </View>
    </LoaderWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NodeScreen;
