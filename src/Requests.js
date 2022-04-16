const API_KEY = "66773b498cf1495d63e3d70771fc3202"

const requests = {
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNowPlaying: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTvPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTheater: `/movie/now_playing?api_key=66773b498cf1495d63e3d70771fc3202&language=en-US&page=1&region=IN&US`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPeople: `/person/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTodayPopular: `/trending/all/day?api_key=${API_KEY}`,
 }

export default requests;