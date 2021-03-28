const initialState = {
    filmData:{
        countries: [],
        label: "",
        description: "",
        distributors: "",
        filmId: "",
        filmLength: "",
        facts: [],
        genres: [],
        posterUrl: "",
        posterUrlPreview: "",
        premiereWorld: "",
        year: ""
    },
    filmsSearch: [],
    filmsList: [],
    isLoading: false,
    error: null


}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `GET_FILM_REQUEST`:
            return {...state,
                filmData:{
                    countries: [],
                    label: "",
                    description: "",
                    distributors: "",
                    filmId: "",
                    filmLength: "",
                    facts: [],
                    genres: [],
                    posterUrl: "",
                    posterUrlPreview: "",
                    premiereWorld: "",
                    year: ""
                },
                isLoading: true}

        case `GET_FILM_SUCCESS`:
            console.log(action)
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
                filmsSearch: action.payload,
                isLoading: false}

        case `GET_FILMS_SEARCH_ERROR`:
            return {...state,
                error: action.payload,
                isLoading: false}

        default:
            return state;
    }
};

export default reducer;