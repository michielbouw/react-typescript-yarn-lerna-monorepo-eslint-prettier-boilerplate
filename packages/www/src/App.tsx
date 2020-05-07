import './App.scss';

import { Header } from '@web/shared';
import { logger } from '@web/utils';
import React, { useEffect, useState } from 'react';

import logo from './logo.svg';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    logger('Testing monorepo!');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header>
          React (v16.8.0-alpha.0), Typescript, Yarn & Lerna Monorepo
        </Header>
        <p>
          Starting point for a Typescript, React, Yarn & Lerna monorepo project
          with full setup for ESLint and Prettier.
        </p>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle logo visibility
        </button>
        {isVisible && <img src={logo} className="App-logo" alt="logo" />}
      </header>
    </div>
  );
}

export default App;
