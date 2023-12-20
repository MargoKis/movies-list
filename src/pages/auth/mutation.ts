const mutationLogin = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTUxZjYzYzY1OGMxMWU4MDA5ZjliOTgzMDlhMTY2NSIsInN1YiI6IjY1NWU2NzFkMmIxMTNkMDBjYTRlZjAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tLnoDhyIeS7Rit-1Xok8EYTXdHOJrA8E8lWvi1IYoPg",
      },
    }
  );

  console.log(res.json());

  return res.json();
};

export default mutationLogin;
