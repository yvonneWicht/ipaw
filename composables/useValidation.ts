export const useValidation = () => {

    const formData = useFormData();
    const router = useRouter()

    //string da PLZ auch mit 0 anfangen kann und bei number die führende null entfernt wird
    const zipCodeOffice: string = "12345";
    // checken ob alle Felder ausgefüllt sind, ansonsten entsprechenden alert
    //PLZ abgleichen

    //mindestens 1 Kleiderart ausgewählt
    //aus formData alles was  mit type beginnt
    // mindestens 1 muss true sein


    // formData.targetArea definiert

    //if registrationAddressShow === true

    // formData.salutation
    // formData.firstName (nur Buchstaben)
    // formData.lastName (nur Buchstaben)
    // formData.email (mail-Adresse)
    // formData.street
    // formData.zipCode ersten beiden Ziffern müssen gleich zipCodeOffice sein
    // formData.city
    // formData.pickUpDate muss in der Zukunft liegen
    // formData.pickUpTime
    // formData.gdpr checked

    //wenn alles okay gehe zu Bestätigungsseite

    const submitForm = () => {


        router.push('/registrierung/bestaetigung');

        console.log(formData.value.firstName);


    }

    return {
        submitForm
    }

}