import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../Plan.styles';
import { differenceInDays } from 'date-fns';
import { StepFour } from './StepFour';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';
import { StepOne } from './StepOne';
import { useProvinces } from '../hooks/useProvinces';
import { useCities } from '../hooks/useCities';
import Modal from '../../../components/Modal/Modal';
import useModal from '../../../hooks/useModal';
import { useCreateAIPlan } from '../hooks/useCreateAIPlan';  
import { PlanData } from '../../../types/interface/PlanData';
import { useRecoilState } from "recoil";
import { planState } from '../../../recoil/atoms/productState';

export const PlanModal: React.FC = () => {
  const navigate = useNavigate();
  const { isThirdOpen, onThirdClose } = useModal(); 
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [periodMessage, setPeriodMessage] = useState('');
  const [isDateComplete, setIsDateComplete] = useState(false);
  const [themeSelectionError, setThemeSelectionError] = useState(false);
  const [transport, setTransport] = useState('car');
  const [selectedProvinceCode, setSelectedProvinceCode] = useState<string>('');
  const [selectedCityCode, setSelectedCityCode] = useState<string>('');
  const [, setPlan] = useRecoilState(planState);

  const { province: provinces } = useProvinces();
  const { cities } = useCities(selectedProvinceCode);
  
  const createPlanMutation = useCreateAIPlan(); 

  useEffect(() => {
    if (startDate && endDate) {
      const days = differenceInDays(endDate, startDate) + 1;
      const messages = [
        '당일여행으로 설정되었습니다.',
        '1박 2일 여행으로 설정되었습니다.',
        '2박 3일 여행으로 설정되었습니다.',
      ];
      setPeriodMessage(messages[days - 1] || '최대 2박 3일까지 가능합니다.');
      setIsDateComplete(days > 0 && days <= 3);
    }
  }, [startDate, endDate]);

  const handleFinalComplete = async () => {
    if (selectedThemes.length < 2) {
      setThemeSelectionError(true);
      onThirdClose()
    }

    const planData: PlanData = {
      startDate: startDate?.toISOString() || '',
      endDate: endDate?.toISOString() || '',
      transport,
      selectedPlaces: [],
      areaCode: selectedProvinceCode,
      sigunguCode: selectedCityCode,
    };

    try {
      // const response = await createPlanMutation.mutateAsync(planData);
      setPlan(planData)
      onThirdClose(); 
    } catch (error) {
      console.error('Error creating plan:', error);
    }
  };

  const handleNext = () => {
    if (step === 3 && selectedThemes.length < 2) {
      setThemeSelectionError(true);
      return;
    }
    setThemeSelectionError(false);
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => setStep((prev) => Math.max(1, prev - 1));

  const handleProvinceChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      setSelectedProvinceCode(selectedOption.value);
      setSelectedCityCode('');  
    }
  };

  const handleCityChange = (selectedOption: { value: string; label: string } | null) => {
    setSelectedCityCode(selectedOption?.value || '');
  };

  const handleThemeChange = (value: string) => {
    setSelectedThemes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleTransportChange = (value: string) => setTransport(value);

  return (
    <Modal
      title="여행 계획 생성하기"
      open={isThirdOpen} 
      onClose={undefined} 
      onOk={handleFinalComplete}
      okText={step === 4 ? '완료' : '다음'}
      cancleText="이전"
      width="600px"
      disabled={step === 1 && !selectedProvinceCode && !selectedCityCode}
      button={false}
      show={true}
    >
      <S.PlanModalInner>
        <S.Content>
          {step === 1 && (
            <StepOne
              provinces={provinces}
              cities={cities}
              selectedProvinceCode={selectedProvinceCode}
              selectedCityCode={selectedCityCode}
              onProvinceChange={handleProvinceChange}
              onCityChange={handleCityChange}
              onNext={handleNext}
            />
          )}
          {step === 2 && (
            <StepTwo
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              periodMessage={periodMessage}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 3 && (
            <StepThree
              selectedThemes={selectedThemes}
              onThemeChange={handleThemeChange}
              themeSelectionError={themeSelectionError}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 4 && (
            <StepFour
              transport={transport}
              onTransportChange={handleTransportChange}
              onComplete={handleFinalComplete}
              onBack={handleBack}
            />
          )}
        </S.Content>
      </S.PlanModalInner>
    </Modal>
  );
};

