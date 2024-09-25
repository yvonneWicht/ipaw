export const useMobileNavigation = () => {

    const mobileNavigationShow = useState('mobileNavigationShow', (): boolean => false);
    const toggleMobileNavigation = () => {
        mobileNavigationShow.value = !mobileNavigationShow.value;
    }

    return {
        mobileNavigationShow,
        toggleMobileNavigation
    };
}

