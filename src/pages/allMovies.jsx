import React, { useEffect, useState } from "react";
import "../styles/moviecard.css";

function AllMovies() {
  const [data, setData] = useState([]);
  // const [summary, setSummary] = useState(false);

  const fetchMovieData = async () => {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const res = await data.json();
    setData(res);
    console.log(res);

    // console.log(res[0].show.image.original);
    res.map((e) => {
      console.log(e.show.image);
    });
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
  return (
    <>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="card">
              <div className="image-wrapper">
                <img
                  src={
                    item.show.image
                      ? item.show.image.original
                      : "http://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-square-1.jpg"
                  }
                  alt="Poster"
                />
              </div>

              <div className="movie-name">
                {item.show.name}
                <span>
                  ({item.show.premiered ? item.show.premiered : "NA"})
                </span>{" "}
              </div>
              <div className="genre">
                {item.show.genres.map((genre) => {
                  return <span>{genre}</span>;
                })}
              </div>
              <div className="rating">
                {item.show.rating ? item.show.rating.average : "NA"}
              </div>
              <button className="about" dataSummary={item.show.summary}>
                About
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllMovies;
