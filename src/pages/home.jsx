import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Home() {    
    const navigate = useNavigate();
    return(
        <>
        <Button variant="contained" onClick={()=>{
            navigate("/users")
        }} >Users</Button>
        <Button onClick={()=>{
            navigate("/todos")
        }} variant="contained">TODOS</Button>
        <Button onClick={()=>{
            navigate("/posts")
        }} variant="contained">POSTS</Button>
        </>
    )
}
export { Home } 