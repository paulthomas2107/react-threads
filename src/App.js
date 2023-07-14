import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Feed from './components/Feed';
import PopUp from './components/PopUp';

const App = () => {
  const [user, setUser] = useState(null);
  const [threads, setThreads] = useState(null);
  const [viewThreadsFeed, setViewThreadsFeed] = useState(true);

  const userId = 'acad37c7-7ec8-4e2a-921b-ed140ddc7274';

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?user_uuid=${userId}`
      );
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getThreads = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/threads?thread_from=${userId}`
      );
      const data = await response.json();
      setThreads(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getThreadsFeed = () => {};

  useEffect(() => {
    getUser();
    getThreads();
  }, []);

  console.log(viewThreadsFeed);

  return (
    <>
      {user && (
        <div className="app">
          <Nav url={user.instagram_url}></Nav>
          <Header
            user={user}
            viewThreadsFeed={viewThreadsFeed}
            setViewThreadsFeed={setViewThreadsFeed}
          ></Header>
          <Feed></Feed>
          {/*<PopUp></PopUp>*/}
        </div>
      )}
    </>
  );
};

export default App;
