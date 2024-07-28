import React from 'react';
import * as S from './SearchBar.styles';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchItem>
        <S.Label>여행지</S.Label>
        <S.SubLabel>여행지 검색</S.SubLabel>
      </S.SearchItem>
      <S.SearchItem>
        <S.Label>체크인</S.Label>
        <S.SubLabel>날짜 추가</S.SubLabel>
      </S.SearchItem>
      <S.SearchItem>
        <S.Label>체크아웃</S.Label>
        <S.SubLabel>날짜 추가</S.SubLabel>
      </S.SearchItem>
      <S.SearchItem>
        <S.Label>여행자</S.Label>
        <S.SubLabel>게스트 추가</S.SubLabel>
      </S.SearchItem>
      <S.SearchButton>
        <FaSearch />
      </S.SearchButton>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
