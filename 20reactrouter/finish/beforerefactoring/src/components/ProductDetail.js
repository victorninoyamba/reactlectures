import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const params = useParams();
  // console.log(params);

  return <div className="component">ProductDetail - {params.id}</div>;
};
