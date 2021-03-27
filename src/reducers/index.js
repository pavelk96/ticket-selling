const initialState = {
    films:{
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
        year: "",
    },
    isLoading: true


}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `LOGOUT_USER`:
            return {...state, isLoading: false}

        default:
            return state;
    }
};

export default reducer;