import { put, call, all, takeLatest } from 'redux-saga/effects';
import ActionTypes from '../reducers/posts';

export function* fetchingPosts({ key, data }) {
    let post = [];
    let postToAdd = []
    try {
        // call data, add here

        // sends data to update 
        // yield put(ActionTypes.addPostData(key, postToAdd))

    } catch(error) {
        yield put(ActionTypes.fetchFailed(error))
    }

};

export default function* root(){
    yield all([
        takeLatest(ActionTypes.LOAD_POST_DATA, fetchingPosts)
    ])
}