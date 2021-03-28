const getFilmById = (payload) => {
    return {
        type: 'GET_FILM_BY_ID',
        payload: payload
    }
}


export {getFilmById};