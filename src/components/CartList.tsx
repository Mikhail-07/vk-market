import { Header } from '@vkontakte/vkui'
import { Group } from '@vkontakte/vkui/dist/components/Group/Group'
import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { Context } from '..'
import { observer } from 'mobx-react-lite'


const CartList = () => {

const products = useContext(Context).store.products;

  return (
    <Group header={<Header mode="secondary">Товары</Header>} separator='hide'>
      {products.map(p => <ProductCard key={p.id} product={p}/>)}
    </Group>
  )
}

export default observer(CartList)