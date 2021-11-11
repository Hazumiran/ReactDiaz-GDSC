import { useState } from "react";
import "../App.css";
import film from "../film.json";

function Screen() {
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState("movies");

  const addToWishlist = (movie) => {
    setWishlist([...wishlist, { ...movie }]);
  };

  const removeFromWL = (movieToRemove) => {
    setWishlist(wishlist.filter((movie) => movie !== movieToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderMovies = () => (
    <>
    <div class="body">
      <ul>
        <li>
          <img
            src="https://167.86.71.48/wp-content/uploads/2020/10/drayslogores.png"
            width="100%"
          />
        </li>
        <li>
        <a onClick={() => navigateTo("movies")} className="Active">
          Home
        </a>
      </li>
      <li>
        <a onClick={() => navigateTo("wishlist")} className="wish">
          Wishlist {wishlist.length}  
        </a>
      </li>
      </ul>
    

      <div className="keresek">
        <h1>DAFTAR FILM TERBAIK </h1>
        <div class="container"></div>
        {film.map((film, index) => (
          <div className="Card" key={index}>
            <img className="MoviePoster" src={film.gambar} width="200px"></img>
            <div className="Container">
              <h5>{film.nama}</h5>
              <h5>{film.rating}</h5>
              <div className="btn-group">
                <a onClick={() => addToWishlist(film)} className="Button">Add To Wishlist</a>
              </div>
              <div className="btn-group">
                <a href ={film.link} className="Button">Detail</a>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      </div>
    </>
  );


  const renderWishlist = () => (
    <>
     <div class="body">
      <ul>
        <li>
          <img
            src="https://167.86.71.48/wp-content/uploads/2020/10/drayslogores.png"
            width="100%"
          />
        </li>
        <li>
        <a onClick={() => navigateTo("movies")} >
          Home
        </a>
      </li>
      <li>
        <a onClick={() => navigateTo("wishlist")} className="wish">
          Wishlist {wishlist.length}  
        </a>
      </li>
      </ul>
      </div>
      <div className="body">
        <div className="keresek bg-full">
          <div className="WishlistHeader">
            <h5>Tidak ada Wishlist</h5>
          </div>
          <div className="WishlistBody">
            <div className="WishlistCards">
              {wishlist.map((film, idx) => (
                <div className="WishlistCard">
                  <div className="Details">
                    <img src={film.gambar}></img>
                    <h5>{film.nama}</h5>
                  </div>
                 
                  <div className="btn-group">
                <a onClick={() => removeFromWL(film)} className="Button">Remove</a>
              </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="App">
      {page === "movies" && renderMovies()}
      {page === "wishlist" && renderWishlist()}
    </div>
  );
}
export default Screen;
