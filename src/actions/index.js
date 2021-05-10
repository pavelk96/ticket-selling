import KinopoiskService from "../services/kinopoisk-service";

const kinopoiskService = new KinopoiskService();

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



export {
    fetchFilmData,
    fetchFilmsSearchData,
    fetchFilmsDigitalReleasesData,
    loginUser,
    logoutUser,
    checkLoginUser
};