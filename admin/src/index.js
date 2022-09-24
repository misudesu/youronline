import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { createRoot } from "react-dom/client";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className=''>
   
     <div className=''>misael</div>
        {/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}
{/* <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Home/>
      </Tab>
      <Tab eventKey="manage" title="Profile">
        <Manage />
      </Tab>
      <Tab eventKey="reffiral" title="Contact" disabled>
        <Reffiral />
      </Tab>
    </Tabs> */}
      </div>
    ),
  },
  {
    path: "/home",
    element: <div>About</div>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>
  
);


