import React, { useEffect } from 'react';
import * as S from './Plan.styles';
import useModal from '../../hooks/useModal';
import { getStoredUser } from '../../utils/userStorage';
import LoginForm from '../Auth/component/LoginForm';
import { useRecoilState } from 'recoil';
import { createdState, isSavedState, showState } from '../../recoil/atoms/productState';
import { PlanModal } from './component/PlanModal';
import { AIPlanPage  } from './component/AIPlanPage';
import { MyPlanPage } from './component/MyPlanPage';
import { FinalPlanPage } from './component/FinalPlanPage';

export default function Plan() {
    const { authModelOpen, thirdmodalOpen } = useModal();
    const [, setShow] = useRecoilState(showState);
    const [created,] = useRecoilState(createdState); 
    const [isSaved,] = useRecoilState(isSavedState); 

    const user = getStoredUser();
    const isAuthenticated = user != null;

    useEffect(() => {
        console.log("isSaved:", isSaved);
        if (!isAuthenticated) {
            setShow(true);
            authModelOpen(); 
        }
        thirdmodalOpen()
    }, [isAuthenticated, authModelOpen]);

    return (
        <>
            {!isAuthenticated && <LoginForm />}
            {!created ? (
            <S.DashboardWrap>
                <S.Sidebar>
                    <AIPlanPage/>
                </S.Sidebar>
                <S.Sidebar>
                    <MyPlanPage/>
                </S.Sidebar>
            </S.DashboardWrap>) :
            ( 
                <FinalPlanPage/>
            )}
            {isAuthenticated && isSaved && <PlanModal />}
        </>
    );
}
