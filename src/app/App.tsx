import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "shared/contexts"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/Navbar"
import "./styles/index.scss"


const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Toggle</button>
        <Navbar />
        <AppRouter />
      </div>
  );
};

export default App;