import React from "react";

import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import {history} from '../redux/configStore'
import { useParams, useHistory } from "react-router";

const PostList = () => {
    const postList = useSelector(state => state.posts.list)
    console.log(postList)

  return (
  <React.Fragment>
      <div>
      <h2>포스트 리스트 페이지</h2>
</div>
<div>
    {postList.map((l)=>{
        return <Post key={l.id} post = {l}/>
    })}
</div>
<div>
    <button onClick={()=>{history.push('/write')}}>추가버튼</button>
</div>

      </React.Fragment>
  );
};

export default PostList;