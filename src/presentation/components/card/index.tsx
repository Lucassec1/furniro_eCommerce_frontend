import React from 'react';
import { ReactComponent as Share } from '../../assets/share-icon.svg';
import { ReactComponent as Compare } from '../../assets/compare-icon.svg';
import { ReactComponent as Like } from '../../assets/like-icon.svg';
import {
  CardContainer,
  CardContentInfo,
  CardTitle,
  CardTag,
  BoxCardPrice,
  CardPrice,
  CardOldPrice,
  Badge,
  CardContentHover,
  CardButtonsAction,
  ButtonAction,
  CardAction,
} from './styles';
import { colors } from '../../styles/colors';
import CardMedia from '@mui/material/CardMedia';
import Button from '../button';

interface IProductCardProps {
  name: string;
  price: number;
  discountPrice?: number | null;
  discountPercent?: number | null;
  tag: string;
  imageLink: string;
  isNew?: boolean;
  getId?: (id: string) => void;
}

const CardComponent: React.FC<IProductCardProps> = (
  props: IProductCardProps,
) => {
  const formattedPrice = props.price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const formattedDiscountPrice = props.discountPrice
    ? props.discountPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
    : null;

  const buttons = [
    { icon: <Share />, label: 'Share' },
    { icon: <Compare />, label: 'Compare' },
    { icon: <Like />, label: 'Like' },
  ];

  return (
    <CardContainer sx={{ maxWidth: 285 }}>
      <CardAction>
        <CardMedia
          component="img"
          width="285"
          height="300"
          image={props.imageLink}
          alt={props.name}
        />
        <CardContentInfo>
          <CardTitle>{props.name}</CardTitle>
          <CardTag>{props.tag}</CardTag>
          <BoxCardPrice>
            {props.isNew ? (
              <>
                <CardPrice>{formattedPrice}</CardPrice>
                <Badge color={colors.$green}>New</Badge>
              </>
            ) : props.discountPercent ? (
              <>
                <CardPrice>{formattedDiscountPrice}</CardPrice>
                <CardOldPrice>{formattedPrice}</CardOldPrice>
                <Badge color={colors.$red}>-{props.discountPercent}%</Badge>
              </>
            ) : (
              <CardPrice>{formattedPrice}</CardPrice>
            )}
          </BoxCardPrice>
        </CardContentInfo>
        <CardContentHover>
          <Button label="See Details" variant="contained" />
          <CardButtonsAction>
            {buttons.map((button, index) => (
              <ButtonAction key={index}>
                {button.icon}
                {button.label}
              </ButtonAction>
            ))}
          </CardButtonsAction>
        </CardContentHover>
      </CardAction>
    </CardContainer>
  );
};

export default CardComponent;
