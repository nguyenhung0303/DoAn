import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Exampel/myComponent';
import MyComponent2 from './Exampel/myComponent2';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import Nav from './Nav/Nav';
import Home from './Exampel/Home';
import ListUsers from './Users/ListUsers';
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
//test
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MyComponent2 />
          <ListTodo />
          <Home /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent2 />} />
            <Route path="/user" element={<ListUsers />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

    </BrowserRouter>
  );
}

export default App;
