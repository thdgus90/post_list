import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

// allPost:DB에서 불러온 모든 데이터
export const getPost = createAction(GET_POST, (allPost) => ({allPost}));
// post:DB에 추가하는 포스트 데이터
export const addPost = createAction(ADD_POST, (post) => ({post}));
// postId: 찾아올 게시글 아이디 , post: 수정된 게시글
export const editPost = createAction(EDIT_POST, (postId, post) => ({postId, post}));
// postId: DB에서 삭제하는 포스트 아이디
export const deletePost = createAction(DELETE_POST, (postId) => ({postId}));

// 초기값 설정 (response로 받을거 미리정하기)
const initialState = {
    list: [
        {
            id: 1,
            category: "test11",
            name: "test11",
            score: "test11",
            description: "test11"
        },
        {
            id: 2,
            category: "test22",
            name: "test22",
            score: "test22",
            description: "test22"
        },
        {
            id: 3,
            category: "spring33",
            name: "test33",
            score: "test33",
            description: "test33"
        }
    ],
  };

// reducer
export default handleActions({
    [GET_POST]: (state, action) => produce(state, (draft) => {
        console.log("getPost");
        console.log(action.payload);
    }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
    }),
    [EDIT_POST]: (state, action) => produce(state, (draft) => {
        console.log("editPost");
        console.log(action.payload);
        let idx = draft.list.findIndex((p)=> p.id === action.payload.postId);
        draft.list[idx] = {...draft.list[idx], ...action.payload.post}
    }),
    [DELETE_POST]: (state, action) => produce(state, (draft) => {
        console.log("deletePost");
        console.log(action.payload);
    })

}, initialState);

