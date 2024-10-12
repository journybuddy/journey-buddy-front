import { useCallback } from 'react';

import { useRecoilState } from 'recoil';

import {
	modalState,
	confirmModalState,
	infoModalState,
	secondModalState,
	thirdModalState,
	fourthModalState,
	authModelState,
} from 'src/recoil/atoms/productState';

export default function useModal() {
	const [isOpen, setIsOpen] = useRecoilState(modalState);
	const [isSecondOpen, setIsSecondOpen] = useRecoilState(secondModalState);
	const [isThirdOpen, setIsThirdOpen] = useRecoilState(thirdModalState);
	const [isFouthOpen, setIsFourthOpen] = useRecoilState(fourthModalState);
	const [isConfirmOpen, setIsConfirmOpen] = useRecoilState(confirmModalState);
	const [isInfoOpen, setIsInfoOpen] = useRecoilState(infoModalState);
	const [isAuthOpen, setIsAuthOpen] = useRecoilState(authModelState);

	const modalOpen = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const secondmodalOpen = useCallback(() => {
		setIsSecondOpen(true);
	}, [setIsSecondOpen]);

	const thirdmodalOpen = useCallback(() => {
		setIsThirdOpen(true);
	}, [setIsThirdOpen]);

	const fourthmodalOpen = useCallback(() => {
		setIsFourthOpen(true);
	}, [setIsFourthOpen]);


	const confirmModalOpen = useCallback(() => {
		setIsConfirmOpen(true);
	}, [setIsConfirmOpen]);

	const infoModalOpen = useCallback(() => {
		setIsInfoOpen(true);
	}, [setIsInfoOpen]);

	const authModelOpen = useCallback(() => {
		setIsAuthOpen(true);
	}, [setIsAuthOpen]);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const onSecondClose = useCallback(() => {
		setIsSecondOpen(false);
	}, [setIsSecondOpen]);

	const onConfirmClose = useCallback(() => {
		setIsConfirmOpen(false);
	}, [setIsConfirmOpen]);

	const onThirdClose = useCallback(() => {
		setIsThirdOpen(false);
	}, [setIsThirdOpen]);

	const onFourthClose = useCallback(() => {
		setIsFourthOpen(false);
	}, [setIsFourthOpen]);

	const onInfoClose = useCallback(() => {
		setIsInfoOpen(false);
	}, [setIsInfoOpen]);


	const onAuthClose = useCallback(() => {
		setIsAuthOpen(false);
	}, [setIsAuthOpen]);


	return {
		isOpen,
		modalOpen,
		onClose,
		setIsOpen,
		isSecondOpen,
		secondmodalOpen,
		onSecondClose,
		setIsSecondOpen,
		isThirdOpen,
		thirdmodalOpen,
		onThirdClose,
		setIsThirdOpen,
		isConfirmOpen,
		confirmModalOpen,
		onConfirmClose,
		setIsConfirmOpen,
		isInfoOpen,
		infoModalOpen,
		onInfoClose,
		setIsInfoOpen,
		authModelOpen,
		isAuthOpen,
		onAuthClose,
		setIsAuthOpen,
		isFouthOpen,
		setIsFourthOpen,
		onFourthClose,
		fourthmodalOpen
	};
}
