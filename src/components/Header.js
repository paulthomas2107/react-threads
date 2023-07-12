const Header = ({ user }) => {
  return (
    <header>
      <div className="info-container">
        <div className="user-info-container">
          <h1>{user.user_name}</h1>
          <p>
            {user.handle} <span className="threads-info">Threads.net</span>
          </p>
        </div>
        <div className="img-container">
          <img src={user.img} alt="Profile avatar"></img>
        </div>
      </div>
      <p>{user.bio}</p>
      <div className="sub-info-container">
        <p className="sub-text">
          {user.followers.length} Followers • <a href="/">Link</a>
        </p>
      </div>
      <button
        className="primary"
        onClick={() => navigator.clipboard.writeText('I am a URL')}
      >
        Share Profile
      </button>
      <div className="button-container">
        <button className="current">Threads</button>
        <button>Replies</button>
      </div>
    </header>
  );
};

export default Header;
