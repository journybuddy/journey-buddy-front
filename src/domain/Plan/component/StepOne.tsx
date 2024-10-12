import { selectStyles } from "../../../styles/selectStyles";
import { City } from "../../../types/interface/City";
import { Province } from "../../../types/interface/Province";
import * as S from '../Plan.styles';
import Select, { SingleValue } from 'react-select';

interface StepOneProps {
  provinces: Province[] | undefined;
  cities: City[] | undefined;
  selectedProvinceCode: string;
  selectedCityCode: string;
  onProvinceChange: (selectedOption: SingleValue<{ value: string; label: string }>) => void;
  onCityChange: (selectedOption: SingleValue<{ value: string; label: string }>) => void;
  onNext: () => void;
}

export const StepOne: React.FC<StepOneProps> = ({
  provinces = [], 
  cities = [], 
  selectedProvinceCode,
  selectedCityCode,
  onProvinceChange,
  onCityChange,
  onNext,
}) => {
  const createOptions = (data: { code: string; name: string }[]) => 
    data.map(({ code, name }) => ({ value: code, label: name }));

  const provinceOptions = createOptions(provinces);
  const cityOptions = createOptions(cities);

  return (
    <div>
      <h3>여행 지역을 선택해 주세요</h3>
      <S.SelectWrapper>
        <S.Label>
          <Select 
            options={provinceOptions} 
            value={provinceOptions.find(option => option.value === selectedProvinceCode) || null}
            onChange={onProvinceChange}
            placeholder="특별시/도를 선택하세요"
            styles={selectStyles}
          />
        </S.Label>
        {selectedProvinceCode && (
          <S.Label>
            <Select 
              options={cityOptions} 
              value={cityOptions.find(option => option.value === selectedCityCode) || null}
              onChange={onCityChange}
              placeholder="시/군/구를 선택하세요"
              styles={selectStyles}
            />
          </S.Label>
        )}
      </S.SelectWrapper>
      <S.ButtonGroup>
        <S.NextButton onClick={onNext} disabled={!selectedCityCode}>
          다음
        </S.NextButton>
      </S.ButtonGroup>
    </div>
  );
};
