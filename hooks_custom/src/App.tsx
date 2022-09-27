import './App.css';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

function App() {
  const { getUsers, UserProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();

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
