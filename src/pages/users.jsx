import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

let url = "https://jsonplaceholder.typicode.com/users"
function Users (){
    const [userData, setUserData] = useState([])
    useEffect(
        ()=>{
         fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUserData(data);
            })
        }, [])
    return (
        <>
            <Link to="/">Back to Home page</Link><br/>
            <div style={{
                display:"flex",
                flexWrap: "wrap",
                flexDirection:"row"
            }}>
                { userData.map(item => ( 
                    <div key ={item.id} style={{
                        border:"1px solid black",
                        width:"28%",
                        margin:"0 0 1vw 1vw",
                        padding:"20px"
                    }}>
                        <span style={{
                            fontWeight:"bold"
                        }}>Name:</span> {item.name} <br/>
                        <span style={{
                            fontWeight:"bold"
                        }}>Username:</span>{item.username}<br/>
                        <span style={{
                            fontWeight:"bold"
                        }}>Email:</span>{item.email}<br/>
                        <span style={{
                            fontWeight:"bold"
                        }}>City:</span> {item.address.city}<br/>
                        <span style={{
                            fontWeight:"bold"
                        }}>Phone:</span>{item.phone}
                        <div>
                        <Link style={{
                            textDecoration:"none"
                        }} to={`${item.id}/posts`}>See User's Posts</Link></div>
                        <div>
                        <Link style={{
                            textDecoration:"none"
                        }} to={`${item.id}/todo`}>See User's ToDo Lists</Link></div>
                        </div>
                ))}      
            </div>
        </>       
    )
}
export {Users} ;