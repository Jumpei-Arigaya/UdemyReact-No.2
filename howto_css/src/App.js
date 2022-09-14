import './App.css';
import { CssModules } from './conponent/CssModules';
import { Emotion } from './conponent/Emotion';
import { InlineStyle } from './conponent/InlineStyle';
import { StyledComponents } from './conponent/StyledComponents';
import { StyledJsx } from './conponent/StyledJsx';

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}

export default App;
