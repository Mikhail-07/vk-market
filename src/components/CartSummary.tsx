import { Group, SimpleCell, Header } from '@vkontakte/vkui';
import React, { useContext } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { useEndingWord } from '../hooks/useEndingWord';

const CartSummary = () => {

  const store = useContext(Context).store
  const word = useEndingWord(store.totalNumberProducts)

  return (
    <Group separator='hide' style={{height: 'fit-content'}}>
      <SimpleCell after={<Header>{store.summaryCost} ₽</Header>}>
        <Header subtitle="Без учета доставки" subtitleComponent="h3">Итого {store.totalNumberProducts} {word} на сумму:</Header>
      </SimpleCell>
    </Group>
  )
}

export default observer(CartSummary)