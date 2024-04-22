import { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "shared/contexts"
import { MainPage } from "pages/MainPage"
import { AboutPage } from "pages/AboutPage"
import "./styles/index.scss"


const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Toggle</button>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={'/'} element={<MainPage />} />
              <Route path={'/about'} element={<AboutPage />} />
            </Routes>
          </Suspense>
      </div>
  );
};

export default App;