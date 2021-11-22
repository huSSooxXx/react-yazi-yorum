import React, {useEffect, useState} from 'react'
import YaziEkleFormu from './YaziEkleFormu';
import { useParams } from "react-router-dom";
import { api } from './api';
function YaziDuzenle() {

    const { id } = useParams();
    const [yazi, setYazi] = useState({});
    useEffect (() => {
        api()
        .get(`/posts/${id}`)
        .then((response) => {
          setYazi({title: response.data.title, content: response.data.content});
        });
      }, []);

    console.log(id);
    return (
        <div>
            <YaziEkleFormu yazi={yazi}/>
        </div>
    )
}

export default YaziDuzenle;
