export const useValidation = () => {

    const formData = useFormData();
    const router = useRouter()

    const submitForm = () => {


        router.push('/registrierung/bestaetigung');

        console.log(formData.value.firstName);


    }

    return {
        submitForm
    }

}