import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const YaziListesi = (props) => {

    const [yaziListesi, setYaziListesi] = useState([]);

    useEffect (() => {
      axios.get('https://react-yazi-yorum.herokuapp.com/posts')
      .then((response) => {
        setYaziListesi(response.data);
      });
    }, []);

    return (
      <div>
        {yaziListesi.map(yazi => {
            return( 
            <div className="item" key={yazi.id}>
              <Link to={`/posts/${yazi.id}`}  className="baslik">{yazi.title}</Link>
              <br/>
              <div className="description">{yazi.created_at}</div>
            </div>)
        })}
      </div>
    )
}

export default YaziListesi;