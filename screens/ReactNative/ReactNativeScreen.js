import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../store/actions/questionsActions';
import QuestionItem from '../../components/QuestionItem/QuestionItem';
import LoaderWrapper from '../../components/LoaderWrapper/LoaderWrapper';

const ReactNativeScreen = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const { reactNativeQuestions } = useSelector(({ questions }) => ({
    reactNativeQuestions: questions.reactNative.questions
  }));
  const loadReactNativeQuestions = async () => {
    setLoading(true);
    await dispatch(fetchQuestions({tag: "reactNative", pageSize: 10, order: "desc", sort: "hot"}))
    setLoading(false);
  }

  useEffect(() => {
    loadReactNativeQuestions()
    return () => {
      dispatch(resetQuestions("reactNative"))
    };
  }, [])

  return (
    <LoaderWrapper loading={loading}>
    <View style={styles.container}>
      <FlatList
      data={reactNativeQuestions}
      renderItem={({ item }) => <QuestionItem question={item} />}
      keyExtractor={(item) => item.question_id.toString()}
      onEndReached={async() => {
        await loadReactNativeQuestions()
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

export default ReactNativeScreen;
