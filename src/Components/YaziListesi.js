import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { yaziListesiGetir } from "../Actions";

const YaziListesi = (props) => {
    const yaziListesi = useSelector((state) => state.yaziListesi);
    const dispatch = useDispatch();
    useEffect (() => {
      dispatch(yaziListesiGetir());
    }, []);

    return (
      <div>
        <Link to={`/yaziekle`} className="yazi-ekle-button">Yazi Ekle</Link>
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