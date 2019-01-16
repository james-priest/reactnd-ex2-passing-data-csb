import React, { Component } from 'react';

class PopularMovies extends Component {
  render() {
    const { profiles, users, movies } = this.props;
    const moviesArr = Object.values(movies);
    return (
      <div>
        {moviesArr.map(movie => (
          <div key={movie.id}>
            <h3>{movie.name}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default PopularMovies;
