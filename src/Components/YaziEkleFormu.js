import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { api } from './api';
import { useNavigate, Link, useParams } from "react-router-dom";

const YaziEkleFormu = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [yazi, setYazi] = useState({ title : "", content : ""});
    const [hatamesaji, setHataMesaji] = useState("");

    const onInputChange = (event) => setYazi({...yazi, [event.target.name] : event.target.value});
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        setHataMesaji("");
        
        if(props.yazi?.title) {
            api()
            .put(`/posts/${id}`, yazi)
            .then((response) => {
                console.log(response);
                navigate(`/posts/${id}`);
            }).catch(error => {
                setHataMesaji("Başlık ve yazı içeriği alanları zorunludur.");
            });
        } else {
            api()
            .post(`/posts`, yazi)
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch(error => {
                setHataMesaji("Başlık ve yazı içeriği alanları zorunludur.");
            });
        }
    }

    useEffect(() => {
        if(props.yazi.title && props.yazi.content){
            setYazi(props.yazi);
            console.log(props.yazi);
        }
    }, [props.yazi]);


    return (
        <div className='yaziekleformu-container'>
            <Link to={`/`}  className="anasayfaya-git">Anasayfaya Git</Link>
            <br/>
            <div>
                <Box component="form" className='yaziekleform'>
                    { hatamesaji && (
                        <div className='hatamesaji-container'>
                            <p>{hatamesaji}</p>
                        </div>
                    )}

                    <label htmlFor="">Yazı Başlığı</label>
                    <TextField  
                        variant="standard" 
                        name="title" 
                        value={yazi.title} 
                        className='yaziekleform-baslikinput' 
                        onChange={onInputChange}/>

                    <textarea 
                        className="mdc-text-field__input"
                        onChange={onInputChange}
                        rows="8" 
                        value={yazi.content}
                        name="content">
                        </textarea>
                    <div>
                        <Button variant="contained" onClick={onFormSubmit}>Gönder</Button>
                        <Button variant="outlined">İptal Et</Button>
                    </div>

                </Box>    
            </div>
            
        </div>
    )
}

export default YaziEkleFormu;
