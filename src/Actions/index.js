import { api } from "../Components/api";

export const yaziListesiGetir = () => (dispatch) => {
    api()
    .get('/posts')
    .then((response) => {
      dispatch({
          type: "YAZI_LISTESI_GETIR", 
          payload: response.data});
    })
    .catch(()=>{
        dispatch({
            type: "YAZI_LISTESI_GETIR_HATA", 
            payload: "Yazi yuklenirken hata meydana geldi."
        });
    });
};

export const yaziDetayiGetir = (id) => (dispatch) => {
    api()
        .get(`/posts/${id}`)
        .then((response) => {
            dispatch({
                type: "YAZI_DETAY_GETIR",
                payload: response.data
            })
        }).catch(error => {
            dispatch({
                type: "YAZI_DETAY_GETIR_HATA",
                payload: "Yazı detayı getirirken hata oluştu."
            })
    });
}