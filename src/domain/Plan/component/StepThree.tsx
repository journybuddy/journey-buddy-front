import * as S from '../Plan.styles';

interface StepThreeProps {
    selectedThemes: string[];
    onThemeChange: (value: string) => void;
    themeSelectionError: boolean;
    onNext: () => void;
    onBack: () => void;
  }
  
export const StepThree: React.FC<StepThreeProps> = ({
    selectedThemes,
    onThemeChange,
    themeSelectionError,
    onNext,
    onBack
  }) => (
    <div>
      <h3>여행 테마를 선택해주세요 (최소 2개)</h3>
      <S.ThemesWrapper>
        {['휴식', '모험', '문화', '자연'].map((theme) => (
          <S.ThemeLabel key={theme}>
            <input
              type="checkbox"
              value={theme}
              checked={selectedThemes.includes(theme)}
              onChange={() => onThemeChange(theme)}
            />
            {theme}
          </S.ThemeLabel>
        ))}
      </S.ThemesWrapper>
      {themeSelectionError && <S.ErrorMessage>테마는 최소 2개 이상 선택해야 합니다.</S.ErrorMessage>}
      <S.ButtonGroup>
        <S.BackButton onClick={onBack}>뒤로</S.BackButton>
        <S.NextButton onClick={onNext} disabled={selectedThemes.length < 2}>
          다음
        </S.NextButton>
      </S.ButtonGroup>
    </div>
  );