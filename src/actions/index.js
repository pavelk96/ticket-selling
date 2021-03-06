import KinopoiskService from "../services/kinopoisk-service";
import UserInfo from "../services/user-info";

const kinopoiskService = new KinopoiskService();
const userInfo = new UserInfo();

const getFilmRequest = () => {
    return {
        type: 'GET_FILM_REQUEST'
    };
};

const getFilmSuccess = (filmData) => {
    return {
        type: 'GET_FILM_SUCCESS',
        payload: filmData
    };
};

const getFilmError = () => {
    return {
        type: 'GET_FILM_ERROR'
    };
};

const fetchFilmData = (dispatch) => (id) => {
    dispatch(getFilmRequest());
    kinopoiskService.getFilmById(id)
        .then((film) => dispatch(getFilmSuccess(film)))
        .catch((err) => dispatch(getFilmError(err)));
};

const getFilmsSearchRequest = () => {
    return {
        type: 'GET_FILMS_SEARCH_REQUEST'
    };
};

const getFilmsSearchSuccess = (filmsSearch) => {
    return {
        type: 'GET_FILMS_SEARCH_SUCCESS',
        payload: filmsSearch
    };
};

const getFilmsSearchError = () => {
    return {
        type: 'GET_FILMS_SEARCH_ERROR'
    };
};

const fetchFilmsSearchData = (dispatch) => (keyword) => {
    dispatch(getFilmsSearchRequest());
    kinopoiskService.getFilmsByKeyWord(keyword)
        .then((film) => dispatch(getFilmsSearchSuccess(film)))
        .catch((err) => dispatch(getFilmsSearchError(err)));
};

const getFilmsDigitalReleasesRequest = () => {
    return {
        type: 'GET_FILMS_DIGITAL_RELEASES_REQUEST'
    };
};

const getFilmsDigitalReleasesSuccess = (filmsDigitalReleases) => {
    return {
        type: 'GET_FILMS_DIGITAL_RELEASES_SUCCESS',
        payload: filmsDigitalReleases
    };
};

const getFilmsDigitalReleasesError = () => {
    return {
        type: 'GET_FILMS_DIGITAL_RELEASES_ERROR'
    };
};

const fetchFilmsDigitalReleasesData = (dispatch) => (year, month) => {
    dispatch(getFilmsDigitalReleasesRequest());
    kinopoiskService.getFilmsDigitalReleases(year, month)
        .then((film) => dispatch(getFilmsDigitalReleasesSuccess(film)))
        .catch((err) => dispatch(getFilmsDigitalReleasesError(err)));
};

const loginUser = () => {
    return {
        type: "LOGIN_USER"
    }
};

const logoutUser = () => {
    return {
        type: "LOGOUT_USER"
    }
};

const checkLoginUser = () => {
    return {
        type: "CHECK_LOGIN_USER"
    }
};

// ???????????????? id ?????????????????? ??????????????
const getFavoriteFilmsIdRequest = () => {
    return {
        type: 'GET_FAVORITE_FILMS_ID_REQUEST'
    };
};

const getFavoriteFilmsIdSuccess = (favoriteFilmsId) => {
    return {
        type: 'GET_FAVORITE_FILMS_ID_SUCCESS',
        payload: favoriteFilmsId
    };
};

const getFavoriteFilmsIdError = () => {
    return {
        type: 'GET_FAVORITE_FILMS_ID_ERROR'
    };
};

// ???????????????? ??????-?????? ???? ?????????????????? ?????????????? ???? id (favoriteFilmsId)

const getFavoriteFilmSuccess = (favoriteFilmsData) => {
    return {
        type: 'GET_FAVORITE_FILM_SUCCESS',
        payload: favoriteFilmsData
    };
};

const getFavoriteFilmError = () => {
    return {
        type: 'GET_FAVORITE_FILM_ERROR'
    };
};
// ???????????????? ???? ?????????????? ?????????????? ???????????????????????? ?? ?????????????????????? ???????????? ?? ??????
const fetchFavoriteFilm = async (dispatch)  => {
    dispatch(getFavoriteFilmsIdRequest());
    const token =  localStorage.getItem("token");
    const favoriteFilmsId = await userInfo.request('/api/user-info/favorite-films', 'POST', {token})
        .then(favoriteFilmsId => favoriteFilmsId)
        .catch(err => dispatch(getFavoriteFilmsIdError(err)))

    if (favoriteFilmsId && favoriteFilmsId.length === 0) {
        dispatch(getFavoriteFilmSuccess([]));
    } else {
        dispatch(getFavoriteFilmsIdSuccess(favoriteFilmsId))
    }
    let filmDataArr = [];
    for (let i = 0; i < favoriteFilmsId.length; i++) {
        const filmData = await kinopoiskService.getFilmById(favoriteFilmsId[i])
            .then(film => film?.data)
            .catch(err => dispatch(getFavoriteFilmError(err)));
        filmDataArr = [...filmDataArr, filmData];
    }
    dispatch(getFavoriteFilmSuccess(filmDataArr));
};

//???????????????? ?????? ?????????????????? ???????????? ???? ??????????
const getByuTicketRequest = () => {
    return {
        type: 'GET_BUY_TICKET_REQUEST'
    };
};

const getByuTicketSuccess = (buyTicketData) => {
    return {
        type: 'GET_BUY_TICKET_SUCCESS',
        payload: buyTicketData
    };
};

const getByuTicketError = () => {
    return {
        type: 'GET_BUY_TICKET_ERROR'
    };
};

const fetchByuTicket = (dispatch) => async (filmId) => {
    dispatch(getByuTicketRequest(filmId));
    await userInfo.request('/api/byu-ticket/request-tickets', 'POST', {filmId}, {})
        .then((favoriteFilms) => dispatch(getByuTicketSuccess(favoriteFilms)))
        .catch((err) => dispatch(getByuTicketError(err)));
};

const addFavoriteFilmRequest = () => {

    return {
        type: `ADD_FAVORITE_FILM_REQUEST`
    }
};

const addFavoriteFilmSuccess =  (filmId, method) => {
    return {
        type: 'ADD_FAVORITE_FILM_SUCCESS',
        payload: {filmId, method}
    };
}

const AddFavoriteFilmsError = (err) => {
    return {
        type: 'ADD_FAVORITE_FILM_ERROR',
        payload: err
    };
}

const fetchAddFavoriteFilm =  (dispatch) => (filmId, method) => {
    dispatch(addFavoriteFilmRequest())
    const token = localStorage.getItem("token")
    userInfo.request('/api/user-info/add-favorite-film', 'POST', {filmId, token, method}, {})
        .then((d)=>{
            dispatch(addFavoriteFilmSuccess(filmId, method))
        })
        .catch((err) => {

            dispatch(AddFavoriteFilmsError(err))
        });
};

export {
    fetchFilmData,
    fetchFilmsSearchData,
    fetchFilmsDigitalReleasesData,
    loginUser,
    logoutUser,
    checkLoginUser,
    fetchFavoriteFilm,
    fetchByuTicket,
    fetchAddFavoriteFilm
};