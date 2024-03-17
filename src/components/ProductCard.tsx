import { Icon56UserSquareOnSquareSlashOutline } from '@vkontakte/icons';
import { Image, RichCell } from '@vkontakte/vkui';
import React, { FC } from 'react';
import { IProduct } from '../types/types';
import { observer } from 'mobx-react-lite';
import ProductActions from './ProductActions';

interface ProductCardProps{
  product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
  const {id, title, price, description, image, count} = product;

  return (
    <RichCell
      before={<Image src={image} size={96} fallbackIcon={<Icon56UserSquareOnSquareSlashOutline width={36} height={36}/>}/>}  
      actions={<ProductActions id={id} count={count} price={price}/>}
      text={description}
      multiline
    >
      {title}
    </RichCell>
  )
}

export default observer(ProductCard)