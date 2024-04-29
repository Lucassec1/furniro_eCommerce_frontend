import { ReactComponent as Dining } from '../../assets/dining.svg';
import { ReactComponent as Living } from '../../assets/living.svg';
import { ReactComponent as Bedroom } from '../../assets/bedroom.svg';
import {
  FullScreenContainer,
  BannerContainer,
  BannerContent,
  RangeContainer,
  RangeContainerTitle,
  RangeContainerContent,
  RangeContent,
  RangeTitle,
  ProductContainer,
  ProductContainerTitle,
  ProductContainerContent,
} from './styles';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import Feature from '../../components/feature';
import Footer from '../../components/footer';
import { useEffect, useState } from 'react';
import { makeProduct } from '../../../factories/usecases/products/Product';
import { ProductResponse } from '../../../domain/usecases/product';
import CardComponent from '../../components/card';

const Home: React.FC = () => {
  const productService = makeProduct();
  const [data, setData] = useState<ProductResponse[]>([]);

  function getProducts() {
    productService
      .getAll({
        sort: 'created_at',
        per_page: 8,
      })
      .then((response) => {
        setData(response.data);
      });
  }

  useEffect(() => {
    getProducts();
  });

  const ranges = [
    {
      image: <Dining />,
      name: 'Dining',
    },
    {
      image: <Living />,
      name: 'Living',
    },
    {
      image: <Bedroom />,
      name: 'Bedroom',
    },
  ];

  return (
    <>
      <FullScreenContainer>
        <BannerContainer>
          <BannerContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </BannerContent>
        </BannerContainer>
      </FullScreenContainer>
      <Container maxWidth="xl">
        <RangeContainer>
          <RangeContainerTitle>Browse The Range</RangeContainerTitle>
          <RangeContainerContent>
            {ranges.map((range) => (
              <RangeContent key={range.name}>
                {range.image}
                <RangeTitle>{range.name}</RangeTitle>
              </RangeContent>
            ))}
          </RangeContainerContent>
        </RangeContainer>
        <ProductContainer>
          <ProductContainerTitle>Our Products</ProductContainerTitle>
          <ProductContainerContent>
            {data &&
              data.map((item, index) => (
                <CardComponent
                  key={index}
                  name={item.name}
                  price={item.price}
                  discountPrice={item.discount_price}
                  discountPercent={item.discount_percent}
                  tag="Outdoor bar table and stool"
                  imageLink={item.image_link || ''}
                  isNew={false}
                />
              ))}
          </ProductContainerContent>
          <Link to="/shop">
            <Button label="Show More" variant="outlined"></Button>
          </Link>
        </ProductContainer>
      </Container>
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
