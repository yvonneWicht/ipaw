export const useNavigation = () =>  {

    const currentPage = useRoute();
    const isActive = (path: string) => (currentPage.path === path ? 'active' : '');

    return {
        currentPage,
        isActive,
    }
}