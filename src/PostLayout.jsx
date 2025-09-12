import { Outlet, useLoaderData, useLocation, useSearchParams } from 'react-router-dom';
import CustomLink from './CustomLink';
export default function BookLayout() {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <span> | </span>
        <CustomLink to="/posts">PostList</CustomLink>
        <span> | </span>
        <CustomLink to="/newPost">NewPost</CustomLink>
        <span> | </span>
        <CustomLink to="/notFound">NotFound</CustomLink>
      </header>
      <main>
        <Outlet />
      </main>

      <footer>2025</footer>
    </>
  );
}
