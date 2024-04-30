import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { routeConfig } from '../config/routeConfig'

const AppRouter = () => {
  return (
      <Suspense fallback={<div><PageLoader /></div>}>
          <Routes>
              {routeConfig.map(({ element, path }) => (
                  <Route
                      key={path}
                      path={path}
                      element={
                          <div className="page-wrapper">
                              {element}
                          </div>
                        }
                    />
              ))}
          </Routes>
      </Suspense>
  )
}

export default AppRouter
