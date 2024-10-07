export const useMobileNavigation = () => {

    const mobileNavigationShow = useState<boolean>('mobileNavigationShow', () => false);
    const toggleMobileNavigation = (): void => {
        mobileNavigationShow.value = !mobileNavigationShow.value;
    }

    return {
        mobileNavigationShow,
        toggleMobileNavigation
    };
}

