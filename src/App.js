import React from "react";
import { Route } from "react-router-dom";

import PostDetail from "./page/PostDetail";
import PostList from './page/PostList'
import PostWrite from "./page/PostWrite";
import PostEdit from "./page/PostEdit";

function App() {

  const [updateCategory, getCategory] = React.useState("");
  const [updateName, getName] = React.useState("");
  const [updateScore, getScore] = React.useState("");
  const [updateDescription, getDescription] = React.useState("");

  return (
    <div className="App">
      <Route path = '/' component = {PostList} exact/>
      <Route path = '/detail/:id' component = {PostDetail} exact/>
      <Route path = '/write' component = {PostWrite} exact/>
      <Route path = '/edit/:id' component = {PostEdit} exact/>
    </div>
  );
}

export default App;
