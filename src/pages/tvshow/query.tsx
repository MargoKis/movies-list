export const fetchTvShowDetails = async (tvShowId: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTUxZjYzYzY1OGMxMWU4MDA5ZjliOTgzMDlhMTY2NSIsInN1YiI6IjY1NWU2NzFkMmIxMTNkMDBjYTRlZjAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tLnoDhyIeS7Rit-1Xok8EYTXdHOJrA8E8lWvi1IYoPg",
        },
      }
    );
  
    return res.json();
  };