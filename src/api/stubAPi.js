class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.watchList = [];
    }

    add(movie, upcoming) {
        this.favoriteMovies.push(movie);
        this.watchList.push(upcoming);
    }

    // add(upcoming) {
    //     this.watchList.push(upcoming);
    // }

   getAll() {
        return this.favoriteMovie;

    }

    getAll() {
        return this.watchList;
    }
}

export default new StubAPI();