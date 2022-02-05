import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./App.css";

function Fetching() {
    const [post,setPost]=useState([])
    const[val,setVal]=useState({})



    useEffect(()=>{

         function fetchget(){
        axios.get('http://api.countrylayer.com/v2/all?access_key=ff586fb486c1094851214d36c9823aa4')
        .then(res=>{
            // console.log(res)
            // console.log(res.data)
            setPost(res.data)
            
        })
        .catch((er)=>{
            console.log("error");
        })
    }
    fetchget();
    }   
    ,[])

   
    const  handleUpdate=async()=>{
        console.log("Yes happening")
        var response=  axios.post('http://api.countrylayer.com/v2/all?access_key=18f293b05855e965ae02b502bbf0a08d',{
            

        })
        setPost(post.push(response))
         console.log(response)
       
    }

    console.log(post)

  return (<div>
      <h2>Fetching Using Axios</h2>
      <table  border="1">
            <thead>
                <tr>
                    <td>Country Code</td>
                    <td>Name</td>
                    <td>Capital</td>
                    <td>Region</td>
                    <td>Update/Delete</td>
                </tr>

            </thead>
            <tbody>
                
            
                      
          {post.map(posts=>(
                <tr key={posts.alpha2Code}>
                    <td>{posts.alpha3Code}</td>
                    <td>{posts.name}</td>
                    <td>{posts.capital}</td>
                    <td>{posts.region}</td>
                    <td>

                        <button onClick={()=>handleUpdate()}>Update</button>
                        <button>Delete</button>
                    </td>
                    
                    </tr>
                   
          ))}
             </tbody>

          </table>

          
      



  </div>);
}

export default Fetching;
