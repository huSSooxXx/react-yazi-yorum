import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import "../index.css"
import axios from "axios"



const YaziDetayi = (props) => {
    const { id } = useParams();
    const [yaziDetayi, setYaziDetayi] = useState({});
    useEffect (() => {
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        .then((response) => {
          setYaziDetayi(response.data);
        }).catch(error => {
            console.log(error);
        })
      }, []);
    return (
        <React.Fragment>
            <div className="yazidetay-container">
                <Link to={`/`}  className="anasayfaya-git">Anasayfaya Git</Link>
                <br/>
                <h2>{yaziDetayi.title}</h2>
                <p>{yaziDetayi.content}</p>
                <p>{yaziDetayi.created_at}</p>
            </div>
       </React.Fragment>
    )
}

export default YaziDetayi