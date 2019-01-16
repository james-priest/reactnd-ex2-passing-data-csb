import React, { Component } from 'react';
import UserList from './UserList';

class PopularMovies extends Component {
  render() {
    const { profiles, users, movies } = this.props;
    const moviesArr = Object.values(movies);
    return (
      <div>
        {moviesArr.map(movie => (
          <div key={movie.id}>
            <h3>{movie.name}</h3>
            <UserList movieID={movie.id} users={users} profiles={profiles} />
          </div>
        ))}
      </div>
    );
  }
}

export default PopularMovies;
