import axios from "axios";
import { RESET_QUESTIONS, SET_QUESTIONS } from "../types";
import { camelToKebabCase } from "../../utils/misc";
import { apiUrl } from "../../utils/constants";

export const fetchQuestions = ({tag="react", pageSize=10, order="desc", sort="activity"}) => async (dispatch, getState) => {
    const { questions } = getState();
    const page = questions[tag]?.currentPage;

    try {
        const response = await axios.get(apiUrl, {
          params: {
            page: page+1,
            pagesize: pageSize,
            order: order,
            sort: sort,
            tagged: camelToKebabCase(tag),
            site: 'stackoverflow',
          },
        });
        console.log(response.data);
        dispatch(setQuestions(response.data.items, page, tag, response.data.has_more))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
  };


  export const setQuestions = (questions, page, tag, has_more) => async (dispatch, getState) => {
    dispatch({
        type: SET_QUESTIONS,
        payload: {questions, page, tag, has_more}
    })
  };

  export const resetQuestions = (tag) => async (dispatch, getState) => {
    dispatch({
        type: RESET_QUESTIONS,
        payload: { tag }
    })
  };