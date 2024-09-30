export const useRegistration = () => {

    const registrationAddressShow = useState('registrationAddressShow', (): boolean => false);
    const toggleRegistrationAddress = (changeState : boolean) => {
        registrationAddressShow.value = changeState;
    }

    return {
        registrationAddressShow,
        toggleRegistrationAddress
    };
}

