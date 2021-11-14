import React, {useEffect, useState} from 'react';
import axios from 'axios';
import YorumListesi from './YorumListesi';
import YorumYaz from './YorumYaz';

const YaziYorumlari = (props) => {

    const [yorumlar, setYorumlar] = useState ([]);

    useEffect(() => {
        axios
        .get(`https://react-yazi-yorum.herokuapp.com/posts/${props.id}/comments`)
        .then((response) => {
            setYorumlar(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return(
        <div>
            <YorumListesi yorumlar={yorumlar} />
            <YorumYaz id={props.id} setYorumlar={setYorumlar} yorumlar={yorumlar}/>
        </div>
    )
}

export default YaziYorumlari;