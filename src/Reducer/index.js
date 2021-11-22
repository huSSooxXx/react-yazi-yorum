const INITIAL_STATE = {
    yaziListesi : [],
    yaziListesiHata : "",
    yaziDetayi : {title : "", content: "", created_at: ""},
    yaziListesiHata : ""
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "YAZI_LISTESI_GETIR":
            return { ...state, yaziListesi: action.payload };
        case "YAZI_LISTESI_GETIR_HATA":
            return { ...state, yaziListesiHata: action.payload };
        case "YAZI_DETAY_GETIR":
            return { ...state, yaziDetayi: action.payload};
        case "YAZI_DETAY_GETIR_HATA":
            return { ...state, yaziDetayiHata: action.payload};    
        default:
            return state;
    }
};