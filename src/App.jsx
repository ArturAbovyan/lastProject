import './App.css';
import { Users } from './pages/users';
import { BrowserRouter, Routes, Route , useParams} from "react-router-dom";
import { Post } from './pages/post';
import { Todo } from './pages/todo';
import { Home } from './pages/home';

function ProfilePage() {
  let { userId } = useParams(); 
}
function App() {
  return (
  <BrowserRouter>
    <Routes>    
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/users' element={<Users/>}></Route>
      <Route exact path='/todos' element={<Todo/>}></Route>
      <Route exact path='/posts' element={<Post/>}></Route>
      <Route exact path='users/:userId/posts' element={<Post/>}></Route>
      <Route exact path='users/:userId/todo' element={<Todo/>}></Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export {App, ProfilePage};
