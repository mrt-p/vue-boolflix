var app = new Vue ({
    el: "#app",
    data: {
        inputSearch: '',
        movieList: []
    },
    
    methods: {
        sendSearch: function(inputSearch) {
            if (inputSearch != '') {
                axios
                    .get('https://api.themoviedb.org/3/search/movie?api_key=5ebd37a734f74ca55ad4e80309ff779f&language=it-IT&query=' + inputSearch)
                    .then((movieSearchList => {
                        movieSearchList.data.results.forEach(movie => {
                            movie.vote_average = Math.ceil(((movie.vote_average * 5) / 10));
                        });
                        this.movieList = movieSearchList.data.results;
                    }))
            } else {
                this.movieList = [];
            }
        }
    }
});