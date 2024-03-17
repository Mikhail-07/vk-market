import { Button, Placeholder, Spinner } from '@vkontakte/vkui';
import React, { FC, useContext } from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Icon28ErrorCircleOutline, Icon28ShoppingCartOutline } from '@vkontakte/icons';

interface CartProps{
  isLoading: boolean;
  fetchError: boolean;
}

const Cart:FC<CartProps> = ({isLoading, fetchError}) => {

  const products = useContext(Context).store.products;

  if (isLoading) return (<div><Spinner size="large" style={{ margin: '20px 0' }} /></div>)
  if (fetchError) return(<Placeholder icon={<Icon28ErrorCircleOutline />} header="Произошла ошибка во время загрузки списка товаров"></Placeholder>)
  if (!products.length) return (<Placeholder icon={<Icon28ShoppingCartOutline />} action={<Button size="m">Перейти в Маркет</Button>} header="Ваша корзина пуста"></Placeholder>)

  return(
    <div style={{display: 'grid', gridTemplateColumns: '3fr 1fr', gridColumnGap: '10px'}}>
      <CartList />
      <CartSummary />
    </div>      
  )
}

export default observer(Cart)