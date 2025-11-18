import React from 'react';
import NetworkStatusComponent from './ErrorBoundaryComponents/NetworkError/NetworkComponent';
import ErrorBoundaryComponent from './ErrorBoundaryComponents/ErrorBoundaries/ErrorComponent';
import ErrorUI from './ErrorBoundaryComponents/ErrorBoundaries/ErrorUI';
import MainLayout from './Layout/MainLayout';

const App = () =>{
  return(
    <>
      <NetworkStatusComponent>
        <ErrorBoundaryComponent fallback={<ErrorUI/>} />
        <MainLayout/>
      </NetworkStatusComponent>
    </>
  )
}

export default App;