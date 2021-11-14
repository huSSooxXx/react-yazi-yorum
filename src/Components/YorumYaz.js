import React, {useState} from 'react'
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const YorumYaz = (props) => {
    const YORUM_DEFAULT = {display_name : "", body : ""};
    const [commentBody, setCommentBody] = useState(YORUM_DEFAULT);

    const handleBodyParams = (event) => {
        setCommentBody({...commentBody, [event.target.name] : event.target.value})
    }

    const submitComment = (event) => {
        event.preventDefault();
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${props.id}/comments`, commentBody)
        .then(response => {
            props.setYorumlar([...props.yorumlar, response.data]);
            setCommentBody(YORUM_DEFAULT);
        })
        .catch(error => {
            console.log(error)
        });
    }

    return (
        <div className="yorumyaz-container">
            <h2>Yorum Yaz</h2>
                <form onSubmit={submitComment}>
                    <div className="postcomment-form">
                        <TextField
                            name="display_name"
                            id="outlined-basic" 
                            label="Kullanıcı Adı" 
                            variant="outlined" 
                            value={commentBody.display_name} 
                            onChange={handleBodyParams} />
                        <TextField 
                            onChange={handleBodyParams} 
                            value={commentBody.body}
                            name="body"
                            id="outlined-multiline-static"
                            label="Yorum"
                            multiline
                            rows={4} />
                        <Button variant="contained" type="submit">Yorum Gönder</Button> 
                    </div>
                </form>
        </div>
    )
}

export default YorumYaz;