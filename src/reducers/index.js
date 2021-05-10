import AuthServices from "../services/auth";

const initialState = {
    filmData:[],
    filmsSearch: [],
    filmsDigitalReleases: [],
    isLoading: false,
    isAuthorized: false,
    error: null,
    favoriteFilms: [],
};



const logOutUserThunk = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
};

const loginUserThunk = (state) => {
    if (localStorage.getItem("token")){
        return {...state, isAuthorized:true }
    }
};





const reducer = (state = initialState, action) => {

    switch (action.type) {

        case `CHECK_LOGIN_USER`:
            return loginUserThunk(state);

        case `LOGIN_USER`:
            return {...state,
                isAuthorized:true,
            }

        case `LOGOUT_USER`:
            logOutUserThunk()
            return {...state,
                isAuthorized:false,
            }

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
                isLoading: true}

        case `GET_FILMS_DIGITAL_RELEASES_SUCCESS`:
            console.log(action)
            return {...state,
                filmsDigitalReleases: action.payload?.films,
                isLoading: false}

        case `GET_FILMS_DIGITAL_RELEASES_ERROR`:
            return {...state,
                error: action.payload,
                isLoading: false}

        case 'PUSH_SELECTED_FILM_ID':
            console.log(action.payload)
            return {...state,
                filmIdSelectedMovie: action.payload}

        case `GET_FAVORITE_FILMS_REQUEST`:
            return {...state,
                favoriteFilms:[],
                isLoading: true}

        case `GET_FAVORITE_FILMS_SUCCESS`:
            console.log("из reducers",action)
            return {...state,
                favoriteFilms: action.payload,
                isLoading: false}

        case `GET_FAVORITE_FILMS_ERROR`:
            return {...state,
                favoriteFilms: action.payload,
                isLoading: false}

        default:
            return state;
    }
};

export default reducer;