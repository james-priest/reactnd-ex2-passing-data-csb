import React, { Component } from 'react';

class UserList extends Component {
  render() {
    const { movieID, profiles, users } = this.props;
    const filteredProfiles = profiles.filter(
      profile => Number(profile.favoriteMovieID) === movieID
    );
    // console.log(filteredProfiles);
    if (filteredProfiles.length > 0) {
      return (
        <div>
          <p>Liked by:</p>
          <ul>
            {filteredProfiles.map(profile => (
              <li key={profile.userID}>{users[profile.userID].name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p>None of the current users liked this movie</p>;
    }
  }
}

export default UserList;
