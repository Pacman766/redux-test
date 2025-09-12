import { useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Book() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      {post && (
        <div>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <button onClick={goBack}>Back</button>
        </div>
      )}
    </div>
  );
}
