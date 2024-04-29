import styled from 'styled-components';
import { colors } from '../../styles/colors';

interface SizeColorProps {
  color: string;
}

interface SizeButtonProps {
  selected?: boolean;
}

export const BackgroundContainer = styled.div`
  background-color: ${colors.$white3};
`;

export const BreadcrumbContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
`;

export const BreadcrumbRoutes = styled.div`
  display: flex;
  gap: 24px;
`;

export const BreadcrumbRouter = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  font-weight: 400;
  color: ${colors.$lightGray3};
`;

export const Divider = styled.div`
  width: 2px;
  height: 36px;
  background-color: ${colors.$lightGray3};
`;

export const ProductName = styled.div`
  font-weight: 400;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 55px 0 104px 0;
`;

export const ProductContainerTitle = styled.h3`
  font-size: 36px;
  font-weight: 500;
  line-height: 54px;
  text-align: center;
`;

export const ProductContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 285px);
  grid-gap: 32px;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
  padding: 43px 0 34px 0;
`;

export const DescriptionOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
  flex-wrap: wrap;
`;

export const DescriptionSelectedTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;

export const DescriptionUnselectedTitle = styled.h4`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: ${colors.$lightGray3};
`;

export const DescriptionMessage = styled.div`
  font-weight: 400;
  color: ${colors.$lightGray3};
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 83px;
  padding: 35px 0 55px 0;
`;

export const ImageLinksContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const ImageLink = styled.div`
  max-width: 423px;
  max-height: 500px;
`;

export const AnotherImageLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const AnotherLink = styled.div`
  max-width: 76px;
  max-height: 80px;
`;

export const ProductDetailContent = styled.div`
  max-width: 610px;
`;

export const ProductTitle = styled.h2`
  font-size: 42px;
  font-weight: 400;
  line-height: 63px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: ${colors.$lightGray3};
`;

export const ProductReview = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CustomerReview = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
  color: ${colors.$lightGray3};
`;

export const ProductDescription = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
`;

export const ProductSizeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const Size = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${colors.$lightGray3};
`;

export const ProductSize = styled.div`
  display: flex;
  gap: 16px;
`;

export const SizeButton = styled.button<SizeButtonProps>`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) =>
    props.selected ? colors.$golden : colors.$white3};

  color: ${(props) => (props.selected ? colors.$white : colors.$black)};

  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: center;
`;

export const ProductColorContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
`;

export const Color = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${colors.$lightGray3};
`;

export const ProductColor = styled.div`
  display: flex;
  gap: 16px;
`;

export const ColorButton = styled.button<SizeColorProps>`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 50%;

  background-color: ${(props) =>
    colors[`$${props.color}` as keyof typeof colors]};
`;

export const ProductActionButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 32px;
`;

export const ButtonQtd = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  border-radius: 10px;
  background-color: transparent;
  border: 1px solid ${colors.$lightGray3};
  padding: 15px 20px;
  margin-right: 8px;
`;

export const ButtonQtdSpan = styled.span`
  font-weight: 500;
`;

export const ButtonQtdPress = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: 400;
`;

export const ButtonCartCompare = styled.button`
  padding: 17px 46px;
  border: 1px solid ${colors.$black};
  outline: none;
  background-color: transparent;
  border-radius: 15px;
  cursor: pointer;

  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.$lightGray4};
  margin-top: 60px;
`;

export const ProductAnotherInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 40px;
`;

export const ProductInfoContent = styled.div`
  display: flex;
`;

export const ProductSpan = styled.span`
  font-weight: 400;
  color: ${colors.$lightGray3};
  display: inline-block;
  width: 79px;
`;

export const ProductSpanValue = styled.span`
  font-weight: 400;
  color: ${colors.$lightGray3};
`;

export const ProductSpanValueUnique = styled.div`
  display: flex;
  gap: 5px;
`;

export const ProductSpanMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
