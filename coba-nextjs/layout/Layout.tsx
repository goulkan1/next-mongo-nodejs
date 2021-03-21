import Head from 'next/head'
import Link from 'next/link'
import React from 'react'


const Layout = ({children}) => {
    return (
        <>
        <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"/>
      </Head>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container-fluid">
      <Link href={"/"}>
    <a className="navbar-brand" href="#">Home</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
        </li>
        <li className="nav-item">
      <Link href={"/login"}>

          <a className="nav-link" href="#">Login</a></Link>
        </li>
        <li className="nav-item">
      <Link href={"/register"}>

          <a className="nav-link" href="#">Register</a></Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>



      <main className="form-signin">
        {children}
        </main>     

</>
    )
}

export default Layout
