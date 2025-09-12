import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  // const obj = useOutletContext();
  return (
    <div>
      <Link to="/posts/new">Add new post</Link>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
}
