import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import ImageSlider from '../../product/ImageSlider';
import Information from '../../product/Information';
import './index.scss';

import productsApi from '../../../api/products';
import Loader from '../../general/Loader';
import Error from '../../general/Error';
import products from '../../../api/products';

import HeaderAmazon from '../../header';
import '../../../App.scss';

function ProductPage() {
  let { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProduct = useCallback(async () => {
    if (loading || product) return;

    setLoading(true);
    setError(null);

    try {
      const json = await productsApi.getProduct(productId);
      console.log(json)
      setProduct(json);
    } catch (_error) {
      setError(_error);
    }
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);


  if (loading) {
    return <Loader size={50} />;
  } else if (error) {
    return <Error message="Failed to load products" actionFn={loadProduct} />;
  } else if (product) {
    return (
      <div>
        <HeaderAmazon />
      <div className="product">
        <ImageSlider product={product} />
        <Information product={product} />
      </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ProductPage;
