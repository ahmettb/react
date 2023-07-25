import axios from "axios";



const getData=async (userId)=>{
    const {data :user}=await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const {data : post}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const userData={...user,post};
    console.log(userData);
}

export default getData;