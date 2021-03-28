export default class KinopoiskService {

    _apiBase = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/';
    _apiKeyWord = "search-by-keyword?keyword=";

    getFilm = async (request) => {
        return await new Promise((resolve) => {
            fetch(`${this._apiBase}${request}`, {
                headers: {
                    'X-API-KEY': '312e0cda-065d-48f5-9ff8-12be8a5e44e4',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return resolve(data);
                });
        }
         )
    }

    getFilmById = async (id) => {
        const film = await this.getFilm(id);
        return this._transformFilm(film);
    };

    getFilmsByKeyWord = async (keyWord) => {
        const request = (`${this._apiKeyWord}${keyWord}&page=1`);
        return await this.getFilm(request)
    };

    getFilmsDigitalReleases = async (year, month) => {
        const request = await (`${this._apiKeyWord}releases?year=${year}&month=${month}&page=1`);
        return await this.getFilm(request);
    };

    _transformFilm = (film) => {
        return {
            label: film?.data?.nameRu,
            countries: (film?.data?.countries || []).map((country) => country.country),
            description: film?.data?.description,
            distributors: film?.data?.distributors,
            filmId: film?.data?.filmId,
            filmLength: film?.data?.filmLength,
            facts: film?.data?.facts,
            genres: film?.data?.genres,
            posterUrl: film?.data?.posterUrl,
            posterUrlPreview: film?.data?.posterUrlPreview,
            premiereWorld: film?.data?.premiereWorld,
            year: film?.data?.year
        };
    };

};

