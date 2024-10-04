// Anmerkungen ChatGPT:
//     Falsche Typdefinition innerhalb der useState-Funktion: Die Typen sollten außerhalb des Return-Werts definiert werden.
//     Du versuchst, Typen und Initialisierungen innerhalb einer Funktion zu mischen.
//
//     Die falsche Verwendung von useState mit einem Object-Typ: In TypeScript solltest du den Typ des Objekts entweder
//     explizit angeben oder automatisch ableiten. Der Typ Object ist zu allgemein und sollte durch eine genaue Typdefinition ersetzt werden.
//
//       In TypeScript sind boolean-Felder entweder true oder false, aber sie können nicht null sein, es sei denn,
//       du definierst den Typ explizit als boolean | null. -> Also kein ThreeState Boolean, da nicht explizit nötig, werden die Felder mit false initialisiert

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
    gdpr: boolean;
}

export const useRegistrationAddressShow = () => useState('registrationAddressShow', (): boolean => false);
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
    gdpr: false,
}));