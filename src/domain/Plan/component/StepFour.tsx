import { FaCar, FaBus, FaTrain, FaPlane } from 'react-icons/fa';
import * as S from '../Plan.styles';

interface StepFourProps {
    transport: string;
    onTransportChange: (value: string) => void;
    onComplete: () => void;
    onBack: () => void;
  }
  
export const StepFour: React.FC<StepFourProps> = ({
    transport,
    onTransportChange,
    onComplete,
    onBack
  }) => (
    <div>
      <h3>교통수단을 선택해 주세요</h3>
      <S.TransportOptions>
        <S.TransportLabel>
          <input
            type="radio"
            name="transport"
            value="car"
            checked={transport === 'car'}
            onChange={() => onTransportChange('car')}
          />
          <FaCar /> 자동차
        </S.TransportLabel>
        <S.TransportLabel>
          <input
            type="radio"
            name="transport"
            value="bus"
            checked={transport === 'bus'}
            onChange={() => onTransportChange('bus')}
          />
          <FaBus /> 버스
        </S.TransportLabel>
        <S.TransportLabel>
          <input
            type="radio"
            name="transport"
            value="train"
            checked={transport === 'train'}
            onChange={() => onTransportChange('train')}
          />
          <FaTrain /> 기차
        </S.TransportLabel>
        <S.TransportLabel>
          <input
            type="radio"
            name="transport"
            value="plane"
            checked={transport === 'plane'}
            onChange={() => onTransportChange('plane')}
          />
          <FaPlane /> 비행기
        </S.TransportLabel>
      </S.TransportOptions>
      <S.ButtonGroup>
        <S.BackButton onClick={onBack}>뒤로</S.BackButton>
        <S.CompleteButton onClick={onComplete}>완료</S.CompleteButton>
      </S.ButtonGroup>
    </div>
  );