import { useEffect, useState } from 'react';
import { IProduct } from '../types/types';
import { fetchProducts } from '../http/productsAPI';
import { IProductsStore } from '../store/ProductsStore';

const useProductData = (store: IProductsStore) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products: IProduct[] = await fetchProducts();
        if (products.length) {
          store.setProducts(products);
          store.setTotalNumberProducts();
          store.setSummaryCost();
        } else {
          throw new Error();
        }
      } catch (error: any) {
        setFetchError(true);
        console.error('Ошибка при загрузке списка:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [store]);

  return { isLoading, fetchError };
};

export default useProductData;
