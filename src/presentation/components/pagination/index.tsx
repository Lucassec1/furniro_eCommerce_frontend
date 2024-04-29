import React from 'react';
import usePagination from '@mui/material/usePagination';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  PaginationNav,
  PaginationContainer,
  PaginationNumber,
  PaginationEllipsis,
} from './styles';

export interface IPaginationProps {
  pagesQtd: number;
  onPaginationChanges: (page: number) => void;
}

const Pagination: React.FC<IPaginationProps> = (props: IPaginationProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get('page') || '1', 10);

  const { items } = usePagination({
    count: props.pagesQtd,
    page: currentPage,
    onChange: (_, page) => {
      props.onPaginationChanges(page);
      query.set('page', page.toString());
      navigate(`${location.pathname}?${query.toString()}`);
    },
  });

  return (
    <PaginationNav>
      <PaginationContainer>
        {items.map(({ page, type, selected, ...item }, index) => {
          if (
            (type === 'previous' && currentPage === 1) ||
            (type === 'next' && currentPage === props.pagesQtd)
          ) {
            return null;
          }

          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <PaginationNumber selected={selected} {...item}>
                {page}
              </PaginationNumber>
            );
          } else {
            children = (
              <PaginationEllipsis type="button" {...item}>
                {type}
              </PaginationEllipsis>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </PaginationContainer>
    </PaginationNav>
  );
};

export default Pagination;
