import * as S from '../Plan.styles';
import { useEffect } from 'react';

interface StepTwoProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  periodMessage: string;
  onNext: () => void;
  onBack: () => void;
}

export const StepTwo: React.FC<StepTwoProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  periodMessage,
  onNext,
  onBack
}) => {
  useEffect(() => {
    if (startDate && endDate && startDate > endDate) {
      setEndDate(null); // Clear end date if it's before start date
    }
  }, [startDate, endDate, setEndDate]);

  return (
    <div>
      <h3>여행 날짜를 선택해주세요</h3>
      <S.DatePickerWrapper>
        <S.DateLabel>
          <S.DateInput
            type="date"
            value={startDate ? startDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            placeholder="출발 날짜"
          />
        </S.DateLabel>
        <S.DateLabel>
          <S.DateInput
            type="date"
            value={endDate ? endDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setEndDate(new Date(e.target.value))}
            placeholder="돌아오는 날짜"
          />
        </S.DateLabel>
      </S.DatePickerWrapper>
      {periodMessage && <S.PeriodMessage>{periodMessage}</S.PeriodMessage>}
      <S.ButtonGroup>
        <S.BackButton onClick={onBack}>뒤로</S.BackButton>
        <S.NextButton onClick={onNext} disabled={!startDate || !endDate}>
          다음
        </S.NextButton>
      </S.ButtonGroup>
    </div>
  );
};
