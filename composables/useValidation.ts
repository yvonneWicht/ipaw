export const useValidation = () => {

    let formData = {
        typeWomen: '',
        typeMen: '',
        typeKids: '',
        typeShoes: '',
        targetArea: '',
        salutation: '',
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        zipCode: '',
        pickUpDate: '',
        pickUpTime: '',
        gdpr: '',
    };

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

// TODO: Funktion übergibt die Daten nicht korrekt
    const submitForm = () => {
        // Daten zwischen speichern
        this.$store.commit('setFormData', this.formData);

        // Optional: Daten an eine API senden oder Seite weiterleiten
        this.$router.push('/registrierung/bestaetigung');

    }

    return {
        formData,
        submitForm
    }

}