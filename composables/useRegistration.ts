export const useRegistration = () => {

    const registrationAddressShow = useRegistrationAddressShow();
    const toggleRegistrationAddress = (changeState: boolean): void => {
        registrationAddressShow.value = changeState;
    }

    return {
        registrationAddressShow,
        toggleRegistrationAddress
    };
}