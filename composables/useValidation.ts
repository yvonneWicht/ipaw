import * as yup from "yup";

export const useValidation = () => {
    const formData = useFormData();
    const router = useRouter();
    const officeZipCode = useOfficeZipCode();

    yup.addMethod(yup.string, 'clothesType', function (message) {
        return this.test('clothesType', message || 'Wähle mindestens eine Kleiderart aus.', function () {
            return formData.value.typeWomen || formData.value.typeMen || formData.value.typeKids || formData.value.typeShoes;
        });
    });
    yup.addMethod(yup.string, 'zipCodeDistance', function (message) {
        return this.test('zipCodeDistance', message || 'Leider wohnst zu außerhalb des Abholgebietes', function (value) {
             return value.substring(0, 2) === officeZipCode.value.substring(0, 2);
        });
    });

    const minSchema = yup.object({
        typeWomen: yup.string().clothesType(),
        targetArea: yup.string().required('Bitte wähle ein Spendenziel aus.'),
    });

    const today = new Date();
    const schema = yup.object({
        typeWomen: yup.string().clothesType(),
        targetArea: yup.string().required('Bitte wähle ein Spendenziel aus.'),
        salutation: yup.string().required('Bitte wähle eine Anrede aus.'),
        firstName: yup.string().matches(/^[a-zA-Z0-9 -]*$/, 'Bitte keine Sonderzeichen eingeben.').required('Bitte gib deinen Vornamen an.'),
        lastName: yup.string().matches(/^[a-zA-Z0-9 -]*$/, 'Bitte keine Sonderzeichen eingeben.').required('Bitte gib deinen Nachnamen an.'),
        email: yup.string().email('Bitte trage eine gültige E-Mail-Adresse ein.').required('Bitte trage deine E-Mail-Adresse ein.'),
        street: yup.string().matches(/^[a-zA-Z0-9 -]*$/, 'Bitte keine Sonderzeichen eingeben.').required('Bitte gib deine Straße ein.'),
        zipCode: yup.string().matches(/^[a-zA-Z0-9 -]*$/, 'Bitte keine Sonderzeichen eingeben.').required('Bitte gib deine Postleitzahl ein.').zipCodeDistance(),
        city: yup.string().matches(/^[a-zA-Z0-9 -]*$/, 'Bitte keine Sonderzeichen eingeben.').required('Bitte gib deinen Wohnort ein.'),
        pickUpDate: yup.date().min(today, 'Das Datum muss in der Zukunft liegen.').required('Bitte wähle ein Abholdatum aus.'),
        pickUpTime: yup.string().required('Bitte wähle eine Uhrzeit aus.'),
        dataSave: yup.string().test('dataSave', 'Bitte stimme den Datenschutzbestimmungen zu.', function () {
            return formData.value.dataSave;}),

    });
    const submitForm = () => {
        const formatDate = (date: Date): string => {
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            };

            const formattedDate = new Intl.DateTimeFormat('de-DE', options).format(date);
            return `${formattedDate} Uhr`;
        };
        formData.value.registrationDate = formatDate(new Date);
        router.push('/registrierung/bestaetigung');
    };

    return {
        minSchema,
        schema,
        submitForm
    }

}
