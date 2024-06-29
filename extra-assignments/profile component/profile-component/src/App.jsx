import {useEffect, useState} from "react";
import './App.css'
function App(){
    const [body,setBody] = useState({});
    // use this template if you need to fetch information from a backend, this is just a demo so i am using a demo body
    // const [isLoaded,setIsLoaded] = useState(false);
    // useEffect(()=>{
    //     async function fetchData(){
    //         const response = await axios.get('');
    //         setBody(response.data);
    //     }
    //     fetchData();
    // })
    // if(!isLoaded){
    //     return <div>Loading...</div>
    // }
    const shortRepresentation = (a) =>{
        if(a<1000)
            return a;
        if(a<999999)
            return a/1000+"K";
        else if(a<999999999)
            return a/1000000+"M";
        else if(a<999999999999)
            return a/1000000000+"B";
    }
    useEffect(()=>{
        setBody({
                    name: 'Sairaj Pawar',
                    age: 20,
                    city: 'Pune',
                    followers: 80000000,
                    likes: 800000,
                    photos: 1400,
                    image: "https://userpic.codeforces.org/2701502/title/65cdb858cf834c7.jpg"
                })
    },[])
    return (
        <div className="container">
            <img className="profile-image" src={body.image}></img>
            <div className="personal-info">
                <h1 className="username">{body.name}</h1>
                <p className="age">{body.age}</p>
            </div>
            <h1 className="city">{body.city}</h1>

            <div className="stats">
                <div className="stats_info">
                    <h2 className="followers">{shortRepresentation(body.followers)}</h2>
                    <h4 className="stats-attribute">Followers</h4>
                </div>
                <div className="stats_info">
                    <h2 className="likes">{shortRepresentation(body.likes)}</h2>
                    <h4 className="stats-attribute">Likes</h4>
                </div>
                <div className="stats_info">
                    <h2 className="photos">{shortRepresentation(body.photos)}</h2>
                    <h4 className="stats-attribute">Photos</h4>
                </div>
            </div>
        </div>
    )
}

export default App;