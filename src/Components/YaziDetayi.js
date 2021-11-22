import React, {useEffect, useState} from 'react'
import {Link, useParams, useNavigate} from "react-router-dom";
import "../index.css"
import YorumPanel from './YorumPanel';
import { api } from './api';
import Button from '@mui/material/Button';
import { yaziDetayiGetir } from '../Actions';
import { useSelector, useDispatch } from "react-redux";

const YaziDetayi = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const yaziDetayi = useSelector((state) => state.yaziDetayi);

    useEffect (() => {
        dispatch(yaziDetayiGetir(id))
        }, []);
    
    const deleteHandler = (yazi_id) => {
        api()
        .delete(`/posts/${id}`)
        .then( () => {
            navigate("/");
        })
        .catch( () => {
            // hata
        });
    }    


    return (
        <React.Fragment>
            <div className="yazidetay-container">
                <Link to={`/`}  className="anasayfaya-git">Anasayfaya Git</Link>
                <br/>
                <h2>{yaziDetayi.title}</h2>
                <p>{yaziDetayi.content}</p>
                <div className='yaziduzenlesil-container'>
                    <Button variant="contained" onClick={() => deleteHandler(id)} color="error">Sil</Button>
                    <Link to={`/posts/${id}/edit`}  variant="outlined" color="success">Düzenle</Link>
                </div>
                <p>{yaziDetayi.created_at}</p>
                <YorumPanel id={id} />
            </div>
       </React.Fragment>
    )
}

export default YaziDetayi