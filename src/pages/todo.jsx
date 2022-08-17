import {useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react"; 
import trueImg from '../icon/true.png';
import falseImg from '../icon/false.png';

let url = "https://jsonplaceholder.typicode.com/todos";
function Todo(){
    const [userTodo, setUserTodo] = useState([]);
    useEffect(
        ()=>{
         fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUserTodo(data);
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
                    { userTodo.map(el => el.userId === Number(userId) ? ( 
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
                            }}>completed:</span>{el.completed ? (
                                <img style={{
                                    position:"relative",
                                    float:"right"
                                }}  src={trueImg} alt="true" />
                            ) : (
                                <img style={{
                                    position:"relative",
                                    float:"right"
                                }} src={falseImg} alt="false" />
                            )}
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
                    { userTodo.map(el => ( 
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
                            }}>completed:</span>{el.completed ? (
                                <img style={{
                                    position:"relative",
                                    float:"right"
                                }}  src={trueImg} alt="true" />
                            ) : (
                                <img style={{
                                    position:"relative",
                                    float:"right"
                                }} src={falseImg} alt="false" />
                            )}
                        </div>
                    ))}      
                </div>
            </> 
        )      
    }
    
}
export {Todo} ;