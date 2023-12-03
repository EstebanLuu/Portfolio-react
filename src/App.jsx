import React, { Suspense } from 'react';
import Routers from './router/router';

const App = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routers />
    </Suspense>
  );
};

export default App;
