import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Feed from './components/Feed';
import PopUp from './components/PopUp';

const App = () => {
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    getUser();
  }, []);

  console.log(user)
  
  return (
    <div className="app">
      <Nav></Nav>
      <Header></Header>
      <Feed></Feed>
      {/*<PopUp></PopUp>*/}
    </div>
  );
};

export default App;
