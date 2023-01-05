import React, { Component } from "react";
import { movies } from "./MovieD";

export default class Trending extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr: [1],
    };
  }
  render() {
    let movie = movies.results;
    console.log(movie.length);
    return (
      <>
        <div className="Trending-section">
          <div className="trending-title">Trending Movies</div>
          <div className="mainBoard">
            {
              // eslint-disable-next-line eqeqeq
              movie.length == "" ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                movie.map((movieObj) => (
                  <div
                    className="card margin-bottom-card "
                    onMouseEnter={() => this.setState({ hover: movieObj.id })}
                    onMouseLeave={() => this.setState({ hover: "" })}
                  >
                    <img
                      src={movieObj.backdrop_path}
                      className="card-img-top cardClass"
                      Obj
                      alt={movieObj.title}
                    />
                    {/* <div className="card-body"> */}
                    {/* <p className="card-text card-TempText">{movie.title}</p> */}
                    {
                      // eslint-disable-next-line eqeqeq
                      this.state.hover == movieObj.id && (
                        <div className="ATF-name">
                          <h5 className="card-title  titling">
                            {movieObj.title}
                          </h5>
                          <div className="button">
                            <a href="/#" className="btn btn-primary iButton">
                              Add To Favorites
                            </a>
                          </div>
                        </div>
                      )
                    }
                  </div>
                ))
              )
            }
          </div>
        </div>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="/#" >
              Previous
            </a>
          </li>
          {this.state.parr.map((value) => (
            <li class="page-item">
              <a class="page-link" href="/#">
                {value}
              </a>
            </li>
          ))}
          <li class="page-item">
            <a class="page-link" href="/#">
              Next
            </a>
          </li>
        </ul>
        /
      </>
    );
  }
}
