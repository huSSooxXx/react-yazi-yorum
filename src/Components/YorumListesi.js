import React from 'react'

const YorumListesi = (props) => {
    return(  <div>
        <div className='yorumlistesi-container'>
            <h2>Yorumlar</h2>
            {
                props.yorumlar.map((yorum) =>{
                    return(
                        <div key={yorum.id}>
                            <h3>{yorum.display_name}</h3>
                            <p>{yorum.body}</p>
                        </div>
                    );
                })
            }
        </div>
    </div>
    )
}

export default YorumListesi;