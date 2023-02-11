import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { LoaderPage } from 'widgets/LoaderPage'

export const AppRouter = () => {
  return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {Object.values(RouteConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
  )
}
