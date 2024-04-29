import React, { useState } from 'react';
import { ReactComponent as Filtering } from '../../assets/filter-icon.svg';
import { ReactComponent as ViewList } from '../../assets/view-list-icon.svg';
import { ReactComponent as GridRound } from '../../assets/grid-round-icon.svg';
import { Container, SelectChangeEvent } from '@mui/material';
import {
  FilterContainer,
  FilterSelectContainer,
  FilterSelect,
  SelectLabel,
  SelectContainer,
  SelectOption,
  FilterOptionContainer,
  FilterOption,
  Divider,
  ShowSpan,
  FilterButton,
  FilterContent,
} from './styles';

export interface FilterParams {
  rowsPerPage: number;
  sortDir: string;
}

interface IFilterProps {
  total: number;
  page: number;
  rowsPerPage?: number;
  sortDir?: string;
  handleFilterChange: (value: FilterParams) => void;
}

const Filter: React.FC<IFilterProps> = (props: IFilterProps) => {
  const showMessage = () => {
    const start = (props.page - 1) * rowsPerPage + 1;
    const end = Math.min(props.page * rowsPerPage, props.total);

    return `Showing ${start}-${end} of ${props.total} results`;
  };

  const [rowsPerPage, setRowsPegPage] = useState(props.rowsPerPage || 16);
  const [sortDir, setSortDir] = useState(props.sortDir || 'asc');

  function handleRowsPerPageChange(event: SelectChangeEvent<unknown>) {
    const value = event.target.value as number;
    setRowsPegPage(value);
    emitEvent({ rowsPerPage: value });
  }

  function handleSortChange(event: SelectChangeEvent<unknown>) {
    const value = event.target.value as string;
    setSortDir(value);
    emitEvent({ sortDir: value });
  }

  function emitEvent(params: Partial<FilterParams> = {}) {
    props.handleFilterChange({ rowsPerPage, sortDir, ...params });
  }

  return (
    <FilterContainer>
      <Container maxWidth="xl">
        <FilterContent>
          <FilterOptionContainer>
            <FilterOption>
              <FilterButton>
                <Filtering /> Filter
              </FilterButton>
              <GridRound />
              <ViewList />
            </FilterOption>
            <Divider />
            <ShowSpan>{showMessage()}</ShowSpan>
          </FilterOptionContainer>
          <FilterSelectContainer>
            <FilterSelect>
              <SelectLabel>Show</SelectLabel>
              <SelectContainer
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
              >
                <SelectOption value={8}>8</SelectOption>
                <SelectOption value={16}>16</SelectOption>
                <SelectOption value={32}>32</SelectOption>
                <SelectOption value={64}>64</SelectOption>
              </SelectContainer>
            </FilterSelect>
            <FilterSelect>
              <SelectLabel>Short by</SelectLabel>
              <SelectContainer value={sortDir} onChange={handleSortChange}>
                <SelectOption value="asc">Most recent</SelectOption>
                <SelectOption value="desc">Oldest</SelectOption>
              </SelectContainer>
            </FilterSelect>
          </FilterSelectContainer>
        </FilterContent>
      </Container>
    </FilterContainer>
  );
};

export default Filter;
