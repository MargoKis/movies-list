export const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTUxZjYzYzY1OGMxMWU4MDA5ZjliOTgzMDlhMTY2NSIsInN1YiI6IjY1NWU2NzFkMmIxMTNkMDBjYTRlZjAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tLnoDhyIeS7Rit-1Xok8EYTXdHOJrA8E8lWvi1IYoPg",
        },
      }
    );
  
    const data = await res.json();
  
    return data;
  };


export const fetchTvShows = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTUxZjYzYzY1OGMxMWU4MDA5ZjliOTgzMDlhMTY2NSIsInN1YiI6IjY1NWU2NzFkMmIxMTNkMDBjYTRlZjAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tLnoDhyIeS7Rit-1Xok8EYTXdHOJrA8E8lWvi1IYoPg",
        },
      }
    );
  
  const data = await res.json();

  return data;
  };
  