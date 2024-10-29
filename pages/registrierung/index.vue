<template>
  <TopImage
      desktopImage="/_nuxt/assets/images/registration-landingpage.jpg"
      mobileImage="/_nuxt/assets/images/registration-landingpage-mobile.jpg"
      headline1="Schön, dass du uns"
      headline2="unterstützen möchtest."
  />
  <Content contentHeadline="Wie funktioniert die Spende">
    <template #basicText>
      Sie können Ihre Kleiderspende direkt bei einer unserer Sammelstellen abgeben. Dabei geben Sie lediglich die
      Art der Kleidung sowie die Region an, in die Ihre Spende geschickt werden soll. Dies ist die schnellste und
      unkomplizierteste Art zu spenden.
      <br>
      Wenn Sie Ihre Spende lieber bequem von zu Hause aus erledigen möchten, bieten wir einen Abholservice an.
      Sie stellen einfach Ihre Kleiderspende zusammen und wählen einen passenden Abholtermin aus. Wir holen die
      Kleidung direkt bei Ihnen vor Ort ab – schnell und ohne großen Aufwand.
    </template>
  </Content>

  <Content contentHeadline="Jetzt registrieren"
           contentBackground>
    <template #additionalContent>
      <div id="selectHandover"
           class="flex justify-start items-end mx-2 me-10 gap-12 text-xl md:text-2xl font-semibold">
        <button id="dropOff" class="mb-2" @click="toggleRegistrationAddress(false)">
          <p>Übergabe an der Geschäftsstelle</p>
          <div :class="{ visible: registrationAddressShow === false,
                         invisible: registrationAddressShow === true }"
               class="mt-2 h-1 bg-orange-400">
          </div>
        </button>

        <button id="pickup" class="mb-2" @click="toggleRegistrationAddress(true)">
          <p>Abholung</p>
          <div :class="{ visible: registrationAddressShow === true,
                         invisible: registrationAddressShow === false }"
               class="mt-2 h-1 bg-orange-400">
          </div>
        </button>
      </div>

      <Form id="registrationForm" class="mx-2 my-5" ref="formRef" @submit="submitForm"
            :validation-schema="registrationAddressShow ? schema : minSchema">
        <div class="mb-3">
          <p class="text-lg font-semibold">Art der Kleidung</p>
          <div class="flex flex-col md:flex-row justify-between md:items-end">
            <div class="mb-3">
              <FormCustomCheckbox
                  name="typeWomen"
                  id="typeWomen"
                  label="Damenkleidung"
                  v-model="formData.typeWomen"
              />
            </div>
            <div class="mb-3">
              <FormCustomCheckbox
                  name="typeMen"
                  id="typeMen"
                  label="Herrenkleidung"
                  v-model="formData.typeMen"
              />
            </div>
            <div class="mb-3">
              <FormCustomCheckbox
                  name="kidsKids"
                  id="kidsKids"
                  label="Kinderkleidung"
                  v-model="formData.typeKids"
              />
            </div>
            <div class="mb-3">
              <FormCustomCheckbox
                  name="typeShoes"
                  id="typeShoes"
                  label="Schuhe"
                  v-model="formData.typeShoes"
              />
            </div>
          </div>
          <div class="mb-3">
            <p class="text-lg font-semibold">Spendenziel</p>
            <div class=" flex flex-col">
              <FormCustomDropdown
                  name="targetArea"
                  :options="[
                              { value: 'Ukraine', label: 'Ukraine' },
                              { value: 'Syrien', label: 'Syrien' },
                              { value: 'Togo', label: 'Togo' },
                              ]"
                  v-model="formData.targetArea"
              />
            </div>
          </div>
          <div v-if="registrationAddressShow" id="optionalAddress">
            <div id="personalInformation" class="mb-3">
              <p class="text-lg font-semibold">Persönliche Daten</p>
              <div class="flex flex-col md:flex-row md:gap-4 mb-3">
                <div class="flex flex-col basis-1/3 mb-3 md:mb-0">
                  <FormCustomDropdown
                      name="salutation"
                      label="Anrede"
                      :options="[
                              { value: 'Herr', label: 'Herr' },
                              { value: 'Frau', label: 'Frau' },
                              { value: 'Divers', label: 'Divers' },
                              ]"
                      v-model="formData.salutation"
                  />
                </div>
                <div class="flex flex-col basis-1/3 mb-3 md:mb-0">
                  <FormCustomField
                      name="firstName"
                      id="firstName"
                      label="Vorname"
                      v-model="formData.firstName"
                  />
                </div>
                <div class="flex flex-col basis-1/3 mb-3 md:mb-0">
                  <FormCustomField
                      name="lastName"
                      id="lastName"
                      label="Nachname"
                      v-model="formData.lastName"
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <FormCustomField
                    name="email"
                    id="email"
                    label="E-Mail"
                    v-model="formData.email"
                />
              </div>
            </div>
            <div class="mb-3">
              <p class="text-lg font-semibold">Abholadresse</p>
              <div class="flex flex-col mb-3">
                <FormCustomField
                    name="street"
                    id="street"
                    label="Straße und Hausnummer"
                    v-model="formData.street"
                />
              </div>
              <div class="flex flex-col md:flex-row md:gap-4">
                <div class="flex flex-col basis-1/3 mb-3 md:mb-0">
                  <FormCustomField
                      name="zipCode"
                      id="zipCode"
                      inputType="text"
                      label="Postleitzahl"
                      v-model="formData.zipCode"
                  />
                </div>
                <div class="flex flex-col basis-2/3 mb-3 md:mb-0">
                  <FormCustomField
                      name="city"
                      id="city"
                      label="Ort"
                      v-model="formData.city"
                  />
                </div>
              </div>
            </div>
            <div id="date" class="mb-3">
              <p class="text-lg font-semibold">Wunsch-Termin</p>
              <div class="flex flex-col md:flex-row md:gap-4">
                <div class="flex flex-col basis-1/2 mb-3 md:mb-0">
                  <FormCustomField
                      name="pickUpDate"
                      id="pickUpDate"
                      inputType="date"
                      label="Abholdatum"
                      v-model="formData.pickUpDate"
                  />
                </div>
                <div class="flex flex-col basis-1/2 mb-3 md:mb-0">
                  <FormCustomDropdown
                      name="pickUpTime"
                      id="pickUpTime"
                      label="Abholzeit"
                      :options="[
                              { value: '9-12', label: '9-12 Uhr' },
                              { value: '12-18', label: '12-18 Uhr' },
                              { value: '18-20', label: '18-20 Uhr' },
                              ]"
                      v-model="formData.pickUpTime"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <FormCustomCheckbox
                  name="dataSave"
                  id="dataSave"
                  label="Ich bin mit der Speicherung und Verarbeitung meiner Daten einverstanden."
                  v-model="formData.dataSave"
              />
            </div>
          </div>
        </div>
        <ElementButtonSecondary
            buttonText="Registrierung senden"
        @click="console.log(formData.email)">
        </ElementButtonSecondary>
      </Form>
    </template>
  </Content>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';

const formData = useFormData();
const {registrationAddressShow, toggleRegistrationAddress} = useRegistration();
const {minSchema, schema, submitForm} = useValidation();

registrationAddressShow.value = false;
formData.value = {
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
};

useHead({
  title: 'KleiderHerz - Registrierung',
});
</script>