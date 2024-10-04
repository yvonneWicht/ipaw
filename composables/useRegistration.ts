export const useRegistration = () => {

    const registrationAddressShow = useRegistrationAddressShow();
    const toggleRegistrationAddress = (changeState : boolean) => {
        registrationAddressShow.value = changeState;
    }

    return {
        registrationAddressShow,
        toggleRegistrationAddress
    };
}

