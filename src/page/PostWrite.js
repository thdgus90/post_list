import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addPost} from "../redux/modules/posts";

// import Post from "../components/Post";

const PostWrite = () => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.posts.list)
  const [category, setCategory] = React.useState("");
  const [name, setName] = React.useState("");
  const [score, setScore] = React.useState("");
  const [description, setDescription] = React.useState("");


  const addPostButton = () => {

    dispatch(addPost({
        id: postList.length + 1,
        category: category,
        name: name,
        score: score,
        description: description
      }));
  }

  return(
    <div>
    포스트 라이트 페이지
    <p>카테고리</p>
    <input
      type="text"
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
      }}
    />
    <p>이름</p>
    <input
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
    <p>점수</p>
    <input
      type="text"
      value={score}
      onChange={(e) => {
        setScore(e.target.value);
      }}
    />
    <p>설명</p>
    <input
      type="text"
      value={description}
      onChange={(e) => {
        setDescription(e.target.value);
      }}
    />
     <button onClick={addPostButton}>추가</button>
  </div>
  
  );
  
};

export default PostWrite;
