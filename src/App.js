import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { PostList } from "./components/PostsList";
import { useEffect, useState } from "react";
import { PostItem } from "./components/PostItem";
import { getAll } from "./service/post.service";


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
    <Container>
      <Menu />
      <Header />
      <Container>
        <PostList>
          {
            posts.map(p => (
              <PostItem key={p._id} title={p.title} abstract={p.abstract} />
            ))
          }
        </PostList>
      </Container>
    </Container>
  );
}

export default App;
