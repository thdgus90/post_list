import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, editPost } from "../redux/modules/posts";
import { useParams } from "react-router";

const PostEdit = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.list);
  const index = postList.findindex(()=>{})
  console.log(postList);

  // 주소창에서 가져오는것 usePrams / props.match.param.id 로도 가져올수있음.
  console.log(params);
  const [updateCategory, getCategory] = React.useState("");
  const [updateName, getName] = React.useState("");
  const [updateScore, getScore] = React.useState("");
  const [updateDescription, getDescription] = React.useState("");

  // const editPostButton = () => {

  //   dispatch(editPost({
  //       category: category,
  //       name: name,
  //       score: score,
  //       description: description
  //     }));
  // }
    return(
        <div>
        포스트 라이트 페이지
        <p>카테고리</p>
        <input
          type="text"
          value={updateCategory}
          onChange={(e) => {
            getCategory(e.target.value);
          }}
        />
        <p>이름</p>
        <input
          type="text"
          value={updateName}
          onChange={(e) => {
            getName(e.target.value);
          }}
        />
        <p>점수</p>
        <input
          type="text"
          value={updateScore}
          onChange={(e) => {
            getScore(e.target.value);
          }}
        />
        <p>설명</p>
        <input
          type="text"
          value={updateDescription}
          onChange={(e) => {
            getDescription(e.target.value);
          }}
        />
        {/* <button onClick={editPostButton}>추가</button> */}
      </div>
    )
}

export default PostEdit;