import { Routes, Route } from 'react-router-dom';

import './browse.styles.css';

import BrowseContainer from '../browse-container/browse-container.component';
import Exhibit from '../exhibit/exhibit.component';

const Browse = () => {
  return (
    <Routes>
      <Route index element={<BrowseContainer />} />
      <Route path=":exhibit" element={<Exhibit />} />
    </Routes>
  );
};

export default Browse;
