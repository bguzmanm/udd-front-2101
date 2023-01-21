import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { PostList } from "./components/PostsList";
import React, { useEffect, useState } from "react";
import { PostItem } from "./components/PostItem";
import { getAll } from "./service/post.service";
import { Route, Routes } from "react-router-dom";
import { FormLogin } from "./components/FormLogin";


function App() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      getAll()
        .then((result) => setPosts(result))
        .catch((e) => console.log(e.message));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <React.Fragment>
      <Container>
        <Menu />
        <Header />
      </Container>
      <Routes>
        <Route path="/" element={
          <PostList>
            {
              posts.map(p => (
                <PostItem key={p._id} title={p.title} abstract={p.abstract} />
              ))
            }
          </PostList>
        } />
        <Route path="/signin" element={
          <FormLogin />
        } />
      </Routes>
    </React.Fragment >
  );
}

export default App;
