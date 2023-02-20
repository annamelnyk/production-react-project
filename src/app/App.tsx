import { Suspense } from 'react';

import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames('app', [theme])}>
        <Navbar />
        <div className="app-content">
          <Sidebar />
          <div className="router-wrapper">
            <AppRouter />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
