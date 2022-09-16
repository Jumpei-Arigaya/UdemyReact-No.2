import axios from 'axios';
import './App.css';
import { UserCard } from './components/UserCard';
import { UserProfile } from './types/userProfile';
import { User } from './types/api/user';
import { useState, useSyncExternalStore } from 'react';

function App() {
  const [UserProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);

    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/usersxxx").then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`,
      }))
      setUserProfiles(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得に失敗しました</p>
      ) : (
        loading ? (
          <p>load中です</p>
        ) : (
          <>
            {
              UserProfiles.map((user) => (
                <UserCard user={user} key={user.id} />

              ))
            }
          </>
        ))

      }
    </div >
  );
}

export default App;
