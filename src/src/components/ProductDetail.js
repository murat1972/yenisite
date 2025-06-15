import React from 'react';
import { useParams } from 'react-router-dom';
import VancraftDetail from './VancraftDetail';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();

  if (productId === 'vancraft') {
    return <VancraftDetail />;
  }

  // Diğer ürünler için eski render veya başka bir içerik dönebilir
  return (
    <div className="product-detail-page">
      <h2>Ürün Detayı</h2>
      <p>Bu ürün için detaylar yakında eklenecek.</p>
    </div>
  );
};

export default ProductDetail; 