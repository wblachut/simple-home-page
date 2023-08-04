import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchPages } from './api/apiClient';
import { LogoLoader } from './components/common/LogoLoader';
import { NavLinks } from './components/header/NavLinks/NavLinks';
import PageView from './components/view/PageView';
import { ErrorFallback } from './error/ErrorFallback';

const App = () => {
  const { isSuccess, isError, data: pagesData } = useQuery(['pages'], fetchPages);
  const homePageId = isSuccess && pagesData?.[0].id;

  if (isError) return <span>Error...</span>;
  if (!homePageId) return <LogoLoader />;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LogoLoader />}>
        <Router>
          <NavLinks pagesData={pagesData ?? []} />
          {isSuccess && <PageView homePageId={homePageId} />}
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
