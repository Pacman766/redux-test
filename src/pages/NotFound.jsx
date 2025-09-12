import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/', { state: 'Page not found!' });
  //   }, 1000);
  // }, []);

  return <h1>NotFound</h1>;
}
