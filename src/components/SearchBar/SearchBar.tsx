import React, { useState, useEffect } from 'react';
import * as S from './SearchBar.styles';
import Select, { SingleValue } from 'react-select';
import { FaSearch, FaRedoAlt } from 'react-icons/fa';
import { selectStyles } from '../../styles/selectStyles';

interface SearchBarProps {
  location?: string; 
  onSearch: (searchParams: { location?: string; sort?: string }) => void;
  onReset: () => void;  
}

const options = [
  { value: 'createdAt', label: '생성일' },
  { value: 'likeCount', label: '좋아요 수' },
];

const SearchBar: React.FC<SearchBarProps> = ({ location, onSearch, onReset }) => {
  const [searchLocation, setSearchLocation] = useState(location); 
  const [sort, setSort] = useState<{ value: string; label: string } | null>(options[0]);

  useEffect(() => {
    setSearchLocation(location); 
  }, [location]);

  const handleSearch = () => {
    onSearch({ location: searchLocation, sort: sort?.value });
  };

  const handleSelectChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    setSort(selectedOption);
  };

  const handleReset = () => {
    setSearchLocation(''); 
    setSort(options[0]); 
    onReset(); 
  };

  return (
    <S.SearchBarContainer>
      <S.SearchItem>
        <S.Label>여행지</S.Label>
        <S.Input
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          placeholder="여행지 검색"
        />
      </S.SearchItem>

      <S.SearchItem>
        <S.Label>정렬 기준</S.Label>
        <Select
          value={sort}
          onChange={handleSelectChange}
          options={options}
          styles={selectStyles}
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
