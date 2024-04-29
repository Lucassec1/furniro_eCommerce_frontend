import { useEffect, useState } from 'react';
import { makeProduct } from '../../../factories/usecases/products/Product';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right-icon.svg';
import { Container } from '@mui/material';
import Filter, { FilterParams } from '../../components/filter';
import Pagination from '../../components/pagination';
import Feature from '../../components/feature';
import Footer from '../../components/footer';
import {
  FullScreenContainer,
  ContainerInfo,
  ContainerTitle,
  ContainerBreadcrumb,
  BreadcrumbSpanBold,
  BreadcrumbSpan,
  ProductContainer,
  ProductContent,
} from './styles';
import { ProductResponse } from '../../../domain/usecases/product';
import CardComponent from '../../components/card';

const Product: React.FC = () => {
  const productService = makeProduct();
  const [data, setData] = useState<ProductResponse[]>([]);

  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterParams, setFilterParams] = useState<FilterParams>({
    rowsPerPage: 16,
    sortDir: 'asc',
  });

  function getProducts() {
    productService
      .getAll({
        sort: 'created_at',
        sort_dir: filterParams.sortDir,
        page: currentPage,
        per_page: filterParams.rowsPerPage,
      })
      .then((response) => {
        setTotal(response.meta.total);
        setData(response.data);
        calculatePagesCount(response.meta.total);
      });
  }

  function calculatePagesCount(total: number) {
    const newPages = Math.ceil(total / filterParams.rowsPerPage);
    setTotalPages(newPages);
  }

  function handlePaginationChanges(page: number) {
    setCurrentPage(page);
    getProducts();
  }

  useEffect(() => {
    getProducts();
  }, [filterParams, currentPage]);

  const handleFilterChange = (event: FilterParams) => {
    setFilterParams(event);
    getProducts();
  };

  return (
    <>
      <FullScreenContainer>
        <ContainerInfo>
          <ContainerTitle>Shop</ContainerTitle>
          <ContainerBreadcrumb>
            <BreadcrumbSpanBold>Home</BreadcrumbSpanBold>
            <ArrowRight />
            <BreadcrumbSpan>Shop</BreadcrumbSpan>
          </ContainerBreadcrumb>
        </ContainerInfo>
      </FullScreenContainer>
      <Filter
        total={total}
        page={currentPage}
        rowsPerPage={16}
        handleFilterChange={handleFilterChange}
      />
      <Container maxWidth="xl">
        <ProductContainer>
          <ProductContent>
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
          </ProductContent>
          <Pagination
            pagesQtd={totalPages}
            onPaginationChanges={handlePaginationChanges}
          />
        </ProductContainer>
      </Container>
      <Feature />
      <Footer />
    </>
  );
};

export default Product;
