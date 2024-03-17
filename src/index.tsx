import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import ProductsStore, { IProductsStore } from './store/ProductsStore';
import { createContext } from 'react';

interface IContext{
  store: IProductsStore
}

const productsStore = new ProductsStore();
export const Context = createContext<IContext>({store: productsStore})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{store: productsStore}}>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </Context.Provider>,
);
