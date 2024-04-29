import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Select, MenuItem } from '@mui/material';

export const FilterContainer = styled.div`
  background-color: ${colors.$white3};
`;

export const FilterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  flex-wrap: wrap;

  @media (max-width: 940px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const FilterOptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  gap: 12px;
  background-color: transparent;

  border: none;
  outline: none;

  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.$black};
    padding: 3px 11px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 36px;
  background-color: ${colors.$lightGray3};
`;

export const ShowSpan = styled.span`
  font-weight: 400;
`;

export const FilterSelectContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export const FilterSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SelectLabel = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: ${colors.$black};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SelectContainer = styled(Select)`
  min-width: 55px;
  border: none !important;
  background-color: ${colors.$white};
  font-size: 20px !important;
  font-weight: 400 !important;
  line-height: 30px !important;
  color: ${colors.$lightGray3} !important;

  &:hover,
  &:focus {
    && .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      border-radius: 0 !important;
      padding: 11.5px 16.5px !important;
      border: 1px solid ${colors.$black} !important;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }

  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }

  && .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 12.5px 17.5px !important;
    text-align: center;
  }

  && .MuiSelect-icon {
    display: none;
  }

  @media (max-width: 480px) {
    font-size: 16px !important;
    && .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 8.5px 14.5px !important;
    }
  }
`;

export const SelectOption = styled(MenuItem)``;
