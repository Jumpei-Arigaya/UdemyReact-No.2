import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './Components/atoms/button/PrimaryButton';
import { SecondaryButton } from './Components/atoms/button/SecondaryButton';
import { SearchInput } from './Components/Molecules/SearchInput';
import { UserCard } from './Components/Organisms/user/UserCard';
import { HeaderOnly } from './Components/templates/HeaderOnly';
import { DefaultLayout } from './Components/templates/DefaultLayout';


const user = {
  image: "girl.jpg",
  name: "あり",
  mail: "1234@gmail.com",
  tell: "090-1111-2222",
  company: "あいうえお株式会社",
  web: "abcd.co.jp"

}

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <SearchInput />
        <br />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
