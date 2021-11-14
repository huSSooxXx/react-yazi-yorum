import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

function YaziEkleFormu() {
    const navigate = useNavigate();
    const [yazi, setYazi] = useState({title : "", content : ""});
    const onInputChange = (event) => setYazi({...yazi, [event.target.name] : event.target.value});
    const onFormSubmit = (event) => {
        event.preventDefault();
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts`, yazi)
        .then(response => {
            console.log(response);
            navigate("/");
        })
        .catch(error => {
            console.log(error)
        });
    }


    return (
        <div className='yaziekleformu-container'>
            <div>
                <Box component="form" className='yaziekleform'>
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
                        name="content" 
                        aria-label="Label">{yazi.content}
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
