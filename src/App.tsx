import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchPages } from './api/apiClient';
import { Loader } from './components/common/loader';
import { NavLinks } from './components/header/NavLinks/NavLinks';
import PageView from './components/view/PageView';

const App = () => {
  const { isSuccess, isError, data: pagesData } = useQuery(['pages'], fetchPages);
  const homePageId = isSuccess && pagesData?.[0].id;

  if (isError) return <span>Error...</span>;
  if (!homePageId) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <NavLinks pagesData={pagesData ?? []} />
        {isSuccess && <PageView homePageId={homePageId} />}
      </Router>
    </Suspense>
  );
};

export default App;
