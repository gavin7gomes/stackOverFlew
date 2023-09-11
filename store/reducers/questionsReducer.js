import {
  RESET_QUESTIONS,
  SET_QUESTIONS,
} from "../types";

const initialState = {
  react: {
    currentPage: 0,
    questions: []
  },
  reactNative: {
    currentPage: 0,
    questions: []
  },
  nodejs: {
    currentPage: 0,
    questions: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS: {
      const { questions, tag, page} = action.payload;
      return {
        ...state,
        [tag]: {
          currentPage: page+1,
          questions: [...state[tag]?.questions , ...questions]
        }
      };
    }
    case RESET_QUESTIONS: {
      const { tag } = action.payload;
      return {
        ...state,
        [tag]: {
          currentPage: 0,
          questions: []
        }
      };
    }
    default: {
      return state;
    }
  }
};
