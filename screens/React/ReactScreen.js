import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, resetQuestions } from '../../store/actions/questionsActions';
import QuestionItem from '../../components/QuestionItem/QuestionItem';
import LoaderWrapper from '../../components/LoaderWrapper/LoaderWrapper';

const ReactScreen = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const { reactQuestions } = useSelector(({ questions }) => ({
    reactQuestions: questions.react.questions
  }));
  const loadReactQuestions = async () => {
    setLoading(true);
    await dispatch(fetchQuestions({tag: "react", pageSize: 10, order: "desc", sort: "hot"}))
    setLoading(false);
  }

  useEffect(() => {
    loadReactQuestions()
    return () => {
      dispatch(resetQuestions("react"))
    };
  }, [])

  return (
    <LoaderWrapper loading={loading}>
    <View style={styles.container}>
      <FlatList
      data={reactQuestions}
      renderItem={({ item }) => <QuestionItem question={item} />}
      keyExtractor={(item) => item.question_id.toString()}
      onEndReached={async() => {
        await loadReactQuestions()
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

export default ReactScreen;
