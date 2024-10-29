interface FormData {
    typeWomen: boolean;
    typeMen: boolean;
    typeKids: boolean;
    typeShoes: boolean;
    targetArea: string;
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    zipCode: string;
    city: string;
    pickUpDate: string;
    pickUpTime: string;
    dataSave: boolean;
    registrationDate: string;
}

export const useFormData = () => useState<FormData>('formData', () => ({
    typeWomen: false,
    typeMen: false,
    typeKids: false,
    typeShoes: false,
    targetArea: '',
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    zipCode: '',
    city: '',
    pickUpDate: '',
    pickUpTime: '',
    dataSave: false,
    registrationDate: '',
}));

export const useRegistrationAddressShow = () => useState<boolean>('registrationAddressShow', () => false);
// export const useRegistrationAddressShow = () => useState<boolean>('registrationAddressShow', () => false);
// const mobileNavigationShow = useState<boolean>('mobileNavigationShow', () => false);
export const useOfficeZipCode = () => useState<string>('officeZipCode', () => "12345");