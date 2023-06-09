import React, { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { routes } from './routes';
import { Provider } from 'react-redux';
import store from './config/store';
import Loading from '@src/components/Loading';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => {
              const Component = route.component;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  </StrictMode>,
);

