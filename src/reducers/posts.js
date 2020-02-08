import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable'

const { Type, Creators } = createActions({
    loadPostData: ['payload'],
    addPostData: ['key', 'data'],
    failedDataLoad: ['error']
});

export const ActionTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
    allPosts: [],
    data: [],
    error: null,
    fetching: false
});

export const fetchingPosts = state => ({
    ...state,
    fetching: true,
});

export const addPostData = (state, { key, data }) => {
    const newPost = { ...state.posts, [key]: data }

    return ({ 
        ...state,
        allPosts: ...newPost,
        fetching: false
    })
};

export const fetchFailed = (state, { error,}) => ({
    ...state,
    error,
    fetching: false,
    data: { title: " 404: Server could not be found." }
});

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOAD_POST_DATA]: fetchingPosts,
    [Types.ADD_POST_DATA]: addPostData,
    [Types.FAILED_FETCH]: fetchFailed,
});
