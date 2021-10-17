import React from "react";
import { history } from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";


const Post = ({post}) => {
    console.log('프롭스')
    console.log(post)

  return (
  <div style={{backgroundColor:'aliceblue', margin:'60px 0px'}}>
    <p>카테고리 : {post.category}</p>    
    <p>이름 : {post.name}</p>    
    <p>점수 : {post.score}</p>    
    <p>내용 : {post.description}</p>
    <button onClick={()=>{
      history.push(`/edit/${post.id}`);
    }}>수정</button>    
  </div>
  );
};

export default Post