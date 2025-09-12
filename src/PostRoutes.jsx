import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PostLayout from './PostLayout';
import PostList from './pages/PostList';
import { RequireAuth } from './context/RequireAuth';
import { CreatePost } from './pages/CreatePost';
import { LoginPage } from './pages/LoginPage';

export default function BookRoutes() {
  console.log(useLocation());
  return (
    <>
      <Routes>
        <Route path="/" element={<PostLayout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<PostList />} />
          <Route path="posts/:id" element={<Post />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="newPost1" element={<Navigate to="/newPost" replace />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
