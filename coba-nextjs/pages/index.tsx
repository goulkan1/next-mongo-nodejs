import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    (
    async() => {
       const response = await fetch('http://localhost:8000/api/user',{
        credentials:'include', 

       })
       const content = await response.json();
        setMessage(`Allo ${content.name}`)
        
      
      }
      )();
  });


  return (
    <Layout>
     {message}
     </Layout>
  );
}
