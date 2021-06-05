
const initialState = {
    filmData:[],
    filmsSearch: [],
    filmsDigitalReleases: [],
    filmsDigitalReleasesIsLoading: [],
    isLoading: false,
    addFavoriteFilmIsLoading: false,
    buyTicketIsLoading: false,
    isAuthorized: false,
    error: null,
    favoriteFilmsData: [], //информация об избранных фильмах
    buyTicketData: [], // Массив всех купленных билетов на фильм
    favoriteFilmsId: [],
    user: {
        email: ""
    }
};

const logOutUserThunk = (state) => {
    localStorage.removeItem("token");
    return {...state, user:{email: ""}, isAuthorized:false}
};

const loginUserThunk = (state) => {
    if (localStorage.getItem("token")){
        return {...state, isAuthorized:true, user: {email: localStorage.getItem("email")} }
    }
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case `CHECK_LOGIN_USER`:
        case `LOGIN_USER`:
            return loginUserThunk(state);

        case `LOGOUT_USER`:
            return logOutUserThunk(state);

        case `GET_FILM_REQUEST`:
            return {...state,
                filmData:[],
                isLoading: true
            }

        case `GET_FILM_SUCCESS`:
            console.log("из reducers",action)
            return {...state,
                filmData: action.payload,
                isLoading: false}

        case `GET_FILM_ERROR`:
            return {...state,
                error: action.payload,
                isLoading: false}

        case `GET_FILMS_SEARCH_REQUEST`:
            return {...state,
                filmsSearch:[],
                isLoading: true}

        case `GET_FILMS_SEARCH_SUCCESS`:
            console.log(action)
            return {...state,
                filmsSearch: action.payload?.films,
                isLoading: false}

        case `GET_FILMS_SEARCH_ERROR`:
            return {...state,
                error: action.payload,
                isLoading: false}

        case `GET_FILMS_DIGITAL_RELEASES_REQUEST`:
            return {...state,
                filmsDigitalReleases:[],
                filmsDigitalReleasesIsLoading: true}

        case `GET_FILMS_DIGITAL_RELEASES_SUCCESS`:
            console.log(action)
            return {...state,
                filmsDigitalReleases: action.payload?.films,
                filmsDigitalReleasesIsLoading: false}

        case `GET_FILMS_DIGITAL_RELEASES_ERROR`:
            return {...state,
                error: action.payload,
                filmsDigitalReleasesIsLoading: false}

        case 'PUSH_SELECTED_FILM_ID':
            console.log(action.payload)
            return {...state,
                filmIdSelectedMovie: action.payload}

        // Получаем ид любимых фильмах
        case `GET_FAVORITE_FILMS_ID_REQUEST`:
            return {...state,
                favoriteFilmsId:[],
                isLoading: true}

        case `GET_FAVORITE_FILMS_ID_SUCCESS`:
            console.log("favorite films id",action.payload)
            return {...state,                                                       //
                favoriteFilmsId: action.payload,
                isLoading: false}

        case `GET_FAVORITE_FILMS_ID_ERROR`:
            return {...state,
                favoriteFilmsId: action.payload,
                isLoading: false}
// Получаем информацию о любимых фильмах
        case `GET_FAVORITE_FILM_REQUEST`:
            return {...state,
                favoriteFilmsData: [],
                isLoading: true}

        case `GET_FAVORITE_FILM_SUCCESS`:
            console.log(action.payload)
            return {...state,
                favoriteFilmsData: action.payload,
                isLoading: false}

        case `GET_FAVORITE_FILM_ERROR`:
            return {...state,
                error: action.payload,
                isLoading: false}

        // Получаем информацию о любимых фильмах
        case `GET_BUY_TICKET_REQUEST`:
            return {...state,
                buyTicketData: [],
                buyTicketIsLoading: true}

        case `GET_BUY_TICKET_SUCCESS`:
            console.log(action.payload)
            return {...state,
                buyTicketData: action.payload?.candidateFilm?.placesTaken,
                buyTicketIsLoading: false}

        case `GET_BUY_TICKET_ERROR`:
            return {...state,
                error: action.payload,
                buyTicketIsLoading: false}

        case `ADD_FAVORITE_FILM_REQUEST` :
            return {
                    ...state,
                    addFavoriteFilmIsLoading: true
            }

        case `ADD_FAVORITE_FILM_SUCCESS`:
            if (action.payload.method === "add") {
                return {
                    ...state,
                    favoriteFilmsId: [...state.favoriteFilmsId, action.payload.filmId],
                    addFavoriteFilmIsLoading: false
                }
            } else if (action.payload.method === "delete") {

                const findIndex = state.favoriteFilmsId.indexOf(action.payload.filmId);
                console.log("action.payload.filmId",action.payload.filmId)
                const newFavoriteFilmsId = [
                    ...state.favoriteFilmsId.slice(0, findIndex),
                    ...state.favoriteFilmsId.slice(findIndex + 1)
                ];
                return {
                    ...state,
                    favoriteFilmsId: newFavoriteFilmsId,
                    addFavoriteFilmIsLoading: false
                }
            }
            return


        case `ADD_FAVORITE_FILM_ERROR`:
            return {
                ...state,
                error: action.payload,
                addFavoriteFilmIsLoading: false
            }

        default:
            return state;
    }
};

export default reducer;