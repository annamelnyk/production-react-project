import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { RouteConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
  return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                {Object.values(RouteConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
  )
}
