import { useEffect, useState } from "react";
import Layout from "../layout/Layout";

export default function Home() {
  const [message, setMessage] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (
    async () => {
      try {
       const response = await fetch('http://localhost:8000/api/user',{
        credentials:'include', 

       });
       const content = await response.json();
        setMessage(`Allo ${content.name}`)
        setAuth(true);
      } catch (e) { setMessage('Tidak Login')
      setAuth(false)
    }
      }
      )();
  });


  return (
    <Layout auth={auth}>
     {message}
     </Layout>
  );
}
