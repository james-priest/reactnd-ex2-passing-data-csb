import React, { Component } from 'react';

class UserList extends Component {
  render() {
    const { movieID, profiles, users } = this.props;
    const filteredProfiles = profiles.filter(
      profile => Number(profile.favoriteMovieID) === movieID
    );
    console.log(filteredProfiles);
    if (filteredProfiles.length > 0) {
      return (
        <div key={filteredProfiles.id}>
          <p>Liked by:</p>
          <ul>
            {filteredProfiles.map(profile => (
              <li>name...</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>empty - no names...</div>;
    }
  }
}

export default UserList;
