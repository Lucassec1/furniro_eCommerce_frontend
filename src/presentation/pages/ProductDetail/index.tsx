import { Container } from '@mui/material';
import { ReactComponent as Facebook } from '../../assets/facebook-icon.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin-icon.svg';
import { ReactComponent as Twitter } from '../../assets/twitter-icon.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right-icon.svg';
import React, { useState } from 'react';
import {
  BackgroundContainer,
  BreadcrumbContainer,
  BreadcrumbRoutes,
  BreadcrumbRouter,
  Divider,
  ProductName,
  ProductContainer,
  ProductContainerTitle,
  ProductContainerContent,
  DescriptionContainer,
  DescriptionOptions,
  DescriptionUnselectedTitle,
  DescriptionSelectedTitle,
  DescriptionMessage,
  ProductDetailContainer,
  ImageLinksContainer,
  ImageLink,
  AnotherImageLinks,
  AnotherLink,
  ProductDetailContent,
  ProductTitle,
  ProductInfo,
  ProductPrice,
  ProductReview,
  CustomerReview,
  ProductDescription,
  ProductSizeContent,
  Size,
  ProductSize,
  SizeButton,
  ProductColorContent,
  Color,
  ProductColor,
  ColorButton,
  ProductActionButtons,
  ButtonQtd,
  ButtonQtdPress,
  ButtonQtdSpan,
  ButtonCartCompare,
  HorizontalDivider,
  ProductAnotherInfo,
  ProductInfoContent,
  ProductSpan,
  ProductSpanValue,
  ProductSpanValueUnique,
  ProductSpanMedia,
} from './styles';
import Footer from '../../components/footer';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export interface IProductProps {
  name?: string;
  price?: number;
  sku?: string;
  description?: string;
  largeDescription?: string;
  imageLink?: string;
  anotherImageLinks?: string[];
  category?: string;
}

const ProductDetail: React.FC<IProductProps> = (props: IProductProps) => {
  const [count, setCount] = useState(1);

  function ImageLinkSrc({ src }: any) {
    return (
      <img
        src={src}
        alt=""
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'cover',
        }}
      />
    );
  }

  return (
    <>
      <BackgroundContainer>
        <Container maxWidth="xl">
          <BreadcrumbContainer>
            <BreadcrumbRoutes>
              <BreadcrumbRouter>
                Home
                <ArrowRight />
              </BreadcrumbRouter>
              <BreadcrumbRouter>
                Shop
                <ArrowRight />
              </BreadcrumbRouter>
            </BreadcrumbRoutes>
            <Divider />
            <ProductName>{props.name}</ProductName>
          </BreadcrumbContainer>
        </Container>
      </BackgroundContainer>
      <Container maxWidth="xl">
        <ProductDetailContainer>
          <ImageLinksContainer>
            <AnotherImageLinks>
              {props.anotherImageLinks?.map((image, index) => {
                return (
                  <AnotherLink key={index}>
                    <ImageLinkSrc src={image} />
                  </AnotherLink>
                );
              })}
            </AnotherImageLinks>
            <ImageLink>
              <ImageLinkSrc src={props.imageLink} />
            </ImageLink>
          </ImageLinksContainer>
          <ProductDetailContent>
            <ProductTitle>{props.name}</ProductTitle>
            <ProductInfo>
              <ProductPrice>$ {props.price}</ProductPrice>
              <ProductReview>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={3.5}
                    precision={0.5}
                  />
                </Stack>
                <Divider />
                <CustomerReview>5 Customer Review</CustomerReview>
              </ProductReview>
              <ProductDescription>{props.description}</ProductDescription>
            </ProductInfo>
            <ProductSizeContent>
              <Size>Size</Size>
              <ProductSize>
                <SizeButton selected>L</SizeButton>
                <SizeButton>XL</SizeButton>
                <SizeButton>XS</SizeButton>
              </ProductSize>
            </ProductSizeContent>
            <ProductColorContent>
              <Color>Color</Color>
              <ProductColor>
                <ColorButton color="blue" />
                <ColorButton color="black" />
                <ColorButton color="golden" />
              </ProductColor>
            </ProductColorContent>
            <ProductActionButtons>
              <ButtonQtd>
                <ButtonQtdPress
                  onClick={() => count > 1 && setCount(count - 1)}
                >
                  -
                </ButtonQtdPress>
                <ButtonQtdSpan>{count}</ButtonQtdSpan>
                <ButtonQtdPress onClick={() => setCount(count + 1)}>
                  +
                </ButtonQtdPress>
              </ButtonQtd>
              <ButtonCartCompare>Add to Cart</ButtonCartCompare>
              <ButtonCartCompare>+ Compare</ButtonCartCompare>
            </ProductActionButtons>
            <HorizontalDivider />
            <ProductAnotherInfo>
              <ProductInfoContent>
                <ProductSpan>SKU</ProductSpan>
                <ProductSpanValue>: {props.sku}</ProductSpanValue>
              </ProductInfoContent>
              <ProductInfoContent>
                <ProductSpan>Category</ProductSpan>
                <ProductSpanValue>: {props.category}</ProductSpanValue>
              </ProductInfoContent>
              <ProductInfoContent>
                <ProductSpan>Tags</ProductSpan>
                <ProductSpanValue>: Sofa, Chair, Home, Shop</ProductSpanValue>
              </ProductInfoContent>
              <ProductInfoContent>
                <ProductSpan>Share</ProductSpan>
                <ProductSpanValueUnique>
                  <ProductSpanValue>:</ProductSpanValue>
                  <ProductSpanMedia>
                    <Facebook />
                    <Linkedin />
                    <Twitter />
                  </ProductSpanMedia>
                </ProductSpanValueUnique>
              </ProductInfoContent>
            </ProductAnotherInfo>
          </ProductDetailContent>
        </ProductDetailContainer>
      </Container>
      <Container maxWidth="lg">
        <DescriptionContainer>
          <DescriptionOptions>
            <DescriptionSelectedTitle>Description</DescriptionSelectedTitle>
            <DescriptionUnselectedTitle>
              Additional Information
            </DescriptionUnselectedTitle>
          </DescriptionOptions>
          <DescriptionMessage>{props.largeDescription}</DescriptionMessage>
        </DescriptionContainer>
      </Container>
      <ProductContainer>
        <ProductContainerTitle>Related Products</ProductContainerTitle>
        <ProductContainerContent>
          {/* {products.map((product) => (
            
          ))} */}
        </ProductContainerContent>
        <Link to="/shop">
          <Button label="Show More" variant="outlined"></Button>
        </Link>
      </ProductContainer>
      <Footer />
    </>
  );
};

export default ProductDetail;
