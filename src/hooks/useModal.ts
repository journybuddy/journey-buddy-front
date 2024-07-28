import { useCallback } from 'react';

import { useRecoilState } from 'recoil';

import {
	modalState,
	confirmModalState,
	infoModalState,
	secondModalState,
	thirdModalState,
} from 'src/recoil/atoms/productState';

export default function useModal() {
	const [isOpen, setIsOpen] = useRecoilState(modalState);
	const [isSecondOpen, setIsSecondOpen] = useRecoilState(secondModalState);
	const [isThirdOpen, setIsThirdOpen] = useRecoilState(thirdModalState);
	const [isConfirmOpen, setIsConfirmOpen] = useRecoilState(confirmModalState);
	const [isInfoOpen, setIsInfoOpen] = useRecoilState(infoModalState);

	const modalOpen = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const secondmodalOpen = useCallback(() => {
		setIsSecondOpen(true);
	}, [setIsSecondOpen]);

	const thirdmodalOpen = useCallback(() => {
		setIsThirdOpen(true);
	}, [setIsThirdOpen]);

	const confirmModalOpen = useCallback(() => {
		setIsConfirmOpen(true);
	}, [setIsConfirmOpen]);

	const infoModalOpen = useCallback(() => {
		setIsInfoOpen(true);
	}, [setIsInfoOpen]);

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

	const onInfoClose = useCallback(() => {
		setIsInfoOpen(false);
	}, [setIsInfoOpen]);


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
	};
}
