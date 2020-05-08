import './App.scss';

import { Header } from '@web/shared';
import { logger } from '@web/utils';
import React, { useEffect } from 'react';

import logo from './logo.svg';

const App = () => {
  useEffect(() => {
    logger('Testing monorepo!');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header>
          React (v16.8.0+, <i>current v16.13.1</i>), Typescript, Yarn & Lerna Monorepo
        </Header>
        <p>
          Starting point for a Typescript, React, Yarn & Lerna monorepo project
          with full setup for ESLint and Prettier.
        </p>
      </header>
    </div>
  );
}

export default App;
