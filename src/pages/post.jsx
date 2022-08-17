import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom';

let url = "https://jsonplaceholder.typicode.com/posts";
function Post(){
const [userPost, setUserPost] = useState([]);
    useEffect(
        ()=>{
         fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUserPost(data);
            })
        }, [])
    let {userId} = useParams()
     if(userId){
        return(
            <>
                <Link to="/">Back to Home page</Link><br/>
                <Link to="/users">Back to Users page</Link>
                <div style={{
                    display:"flex",
                    flexWrap: "wrap",
                    flexDirection:"row"
                }}>
                    { userPost.map(el => el.userId === Number(userId) ? ( 
                        <div key ={el.id} style={{
                            border:"1px solid black",
                            width:"28%",
                            margin:"0 0 1vw 1vw",
                            padding:"20px"
                        }}>
                            <span style={{
                                fontWeight:"bold"
                            }}>Title:</span> {el.title} <br/>
                            <span style={{
                                fontWeight:"bold"
                            }}>Post:</span>{el.body}<br/>
                        </div>
                    ):(null))}      
                </div>
            </>       
        )
    }
    else {
        return(
            <>
                <Link to="/">Back to Home page</Link><br/>
                <Link to="/users">Back to Users page</Link>
                <div style={{
                    display:"flex",
                    flexWrap: "wrap",
                    flexDirection:"row"
                }}>
                    { userPost.map(el => ( 
                        <div key ={el.id} style={{
                            border:"1px solid black",
                            width:"28%",
                            margin:"0 0 1vw 1vw",
                            padding:"20px"
                        }}>
                            <span style={{
                                fontWeight:"bold"
                            }}>Title:</span> {el.title} <br/>
                            <span style={{
                                fontWeight:"bold"
                            }}>Post:</span>{el.body}<br/>
                        </div>
                    ))}      
                </div>
            </>       
        )
    }
}
export {Post} ;