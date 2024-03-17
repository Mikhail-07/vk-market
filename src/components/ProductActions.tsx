import { Icon16Add, Icon16Minus, Icon16DeleteOutline } from '@vkontakte/icons';
import { SimpleCell, Group, ButtonGroup, Button, Header } from '@vkontakte/vkui';
import React, { FC, useContext } from 'react';
import { Context } from '..';

interface ProductActionsProps{
  id: number;
  count: number;
  price: number;
}

const ProductActions: FC<ProductActionsProps> = ({id, count, price}) => {

  const store = useContext(Context).store;

  return (
    <SimpleCell
      before={
        <Group mode='card' style={{display: 'flex', justifyContent: 'space-between', padding: '4px'}}>
          <ButtonGroup mode="horizontal" gap="m" style={{alignItems: 'center'}}>
            <Button rounded={true} size="l" appearance="overlay" disabled={count===10} onClick={() => store.setProductCount(id, 1)} before={<Icon16Add fill={count===10 ? '#99a2ad' : ''} />} />
            <div>{count}</div>
            <Button rounded={true} size="l" appearance="overlay" disabled={count===1} onClick={() => store.setProductCount(id, -1)} before={<Icon16Minus fill={count===1 ? '#99a2ad' : ''}/>} />
          </ButtonGroup>
        </Group>
      }
      after={<Button rounded={true} size="l" appearance="overlay" onClick={() => store.removeProduct(id)} before={<Icon16DeleteOutline />}> Удалить </Button>}
    >
      <Header mode="primary">
        {price} ₽
      </Header>
    </SimpleCell>
  )
}

export default ProductActions