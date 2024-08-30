import React, { useState } from 'react';
import * as S from './SearchBar.styles';
import Select, { SingleValue } from 'react-select';
import { FaSearch, FaRedoAlt } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (searchParams: { location?: string; sort?: string }) => void;
  onReset: () => void;  
}

const options = [
  { value: 'createdAt', label: '생성일' },
  { value: 'likeCount', label: '좋아요 수' },
];

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onReset }) => {
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState<{ value: string; label: string } | null>(options[0]);

  const handleSearch = () => {
    onSearch({ location, sort: sort?.value });
  };

  const handleSelectChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    setSort(selectedOption);
  };

  const handleReset = () => {
    setLocation(''); 
    setSort(options[0]); 
    onReset(); 
  };

  return (
    <S.SearchBarContainer>
      <S.SearchItem>
        <S.Label>여행지</S.Label>
        <S.Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="여행지 검색"
        />
      </S.SearchItem>

      <S.SearchItem>
        <S.Label>정렬 기준</S.Label>
        <Select
          value={sort}
          onChange={handleSelectChange}
          options={options}
          styles={{
            control: (provided) => ({
              ...provided,
              borderColor: '#ced4da',
              borderRadius: '4px',
              boxShadow: 'none',
              '&:hover': {
                borderColor: '#80bdff',
              },
              width: '150%',
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? '#f0f0f0' : '#fff',
              color: '#333',
              cursor: 'pointer',
            }),
          }}
        />
      </S.SearchItem>

      <S.SearchButton onClick={handleSearch}>
        <FaSearch />
      </S.SearchButton>

      <S.ResetButton onClick={handleReset}>
        <FaRedoAlt />
      </S.ResetButton>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
