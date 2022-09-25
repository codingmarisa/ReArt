import { useParams } from 'react-router-dom';

import './exhibit.styles.css';

const Exhibit = () => {
  const { exhibit } = useParams();

  return <div>{exhibit && <h1>{exhibit}</h1>}</div>;
};

export default Exhibit;
