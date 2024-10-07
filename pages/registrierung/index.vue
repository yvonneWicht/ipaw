<script setup lang="ts">
useHead({
  title: 'KleiderHerz - Registrierung',
});

const formData = useFormData();
const {registrationAddressShow, toggleRegistrationAddress} = useRegistration();
const {submitForm} = useValidation();

registrationAddressShow.value = false;

</script>

<template>
  <TopImage
      desktopImage="/_nuxt/assets/images/registration-landingpage.jpg"
      mobileImage="/_nuxt/assets/images/registration-landingpage-mobile.jpg"
      headline1="Schön, dass du uns"
      headline2="unterstützen möchtest."
  />

      <div class="max-w-screen-xl mx-auto">
        <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
          Wie funktioniert die Spende
        </h2>
        <p class="text-lg px-2 pb-9 mx-2">
          Sie können Ihre Kleiderspende direkt bei einer unserer Sammelstellen abgeben. Dabei geben Sie lediglich die
          Art der Kleidung sowie die Region an, in die Ihre Spende geschickt werden soll. Dies ist die schnellste und
          unkomplizierteste Art zu spenden.
        <br>
          Wenn Sie Ihre Spende lieber bequem von zu Hause aus erledigen möchten, bieten wir einen Abholservice an.
          Sie stellen einfach Ihre Kleiderspende zusammen und wählen einen passenden Abholtermin aus. Wir holen die
          Kleidung direkt bei Ihnen vor Ort ab – schnell und ohne großen Aufwand.</p>
      </div>


    <div id="registrationForm" class="bg-[#fac8a2] py-4 text-lg">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
          Jetzt registrieren
        </h2>

        <div id="selectHandover" class="flex justify-start items-end gap-12 text-xl md:text-2xl font-semibold mx-2 me-10">
          <button id="dropOff" class="mb-3 md:mb-5" @click="toggleRegistrationAddress(false)">
            <p>Übergabe an der Geschäftsstelle</p>
            <div :class="{ visible: registrationAddressShow === false,
                           invisible: registrationAddressShow === true }"
                 class="h-1 bg-orange-400 mt-2">
            </div>
          </button>

          <button id="pickup" class="mb-3 md:mb-5" @click="toggleRegistrationAddress(true)">
            <p>Abholung</p>
            <div :class="{ visible: registrationAddressShow === true,
                           invisible: registrationAddressShow === false }"
                 class="h-1 bg-orange-400 mt-2">
            </div>
          </button>
        </div>

        <div id="alert" class="bg-red-200 text-red-700 border-red-700 rounded-lg border-2 p-3 flex align-top hidden">
          <div>
            <Icon class="me-3" name="gravity-ui:exclamation-shape" size="1.5em"/>
          </div>
          <div>
            <p>Bitte bestätige die Datenschutzbestimmungen</p>
          </div>
        </div>

        <form id="registrationForm" class="mx-2 my-5" @submit.prevent="submitForm()">
          <div class="mb-3">
            <p class="text-lg font-semibold">Art der Kleidung</p>
            <div class="flex justify-between flex-col md:flex-row">
              <div class="mb-3">
                <label class="custom-checkbox flex cursor-pointer" for="womenClothes">
                  <input v-model="formData.typeWomen" id="womenClothes"
                         class="absolute invisible" name="clothesType" type="checkbox" value="true">
                  <span class="checkmark me-2 inline-block w-6 h-6 aspect-square relative bg-orange-100"></span>
                  <Icon v-if="formData.typeWomen" class="absolute text-orange-400"
                        name="gravity-ui:check" size="1.4em"/>
                  Damenkleidung
                </label>
              </div>
              <div class="mb-3">
                <label class="custom-checkbox flex cursor-pointer" for="mensClothes">
                  <input v-model="formData.typeMen" id="mensClothes"
                         class="absolute invisible" name="clothesType" type="checkbox" value="true">
                  <span class="checkmark me-2 inline-block w-6 h-6 aspect-square relative bg-orange-100"></span>
                  <Icon v-if="formData.typeMen" class="absolute text-orange-400"
                        name="gravity-ui:check" size="1.4em"/>
                  Herrenkleidung
                </label>
              </div>
              <div class="mb-3">
                <label class="custom-checkbox flex cursor-pointer" for="kidsClothes" >
                  <input v-model="formData.typeKids" id="kidsClothes"
                         class="absolute invisible" name="clothesType" type="checkbox" value="true">
                  <span class="checkmark me-2 inline-block w-6 h-6 aspect-square relative bg-orange-100"></span>
                  <Icon v-if="formData.typeKids" class="absolute text-orange-400"
                        name="gravity-ui:check" size="1.4em"/>
                  Kinderkleidung
                </label>
              </div>
              <div class="mb-3">
                <label class="custom-checkbox flex cursor-pointer" for="shoes">
                  <input v-model="formData.typeShoes" id="shoes"
                         class="absolute invisible" name="clothesType" type="checkbox" value="true">
                  <span class="checkmark me-2 inline-block w-6 h-6 aspect-square relative bg-orange-100"></span>
                  <Icon v-if="formData.typeShoes" class="absolute text-orange-400"
                        name="gravity-ui:check" size="1.4em"/>
                  Schuhe
                </label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <p class="text-lg font-semibold">Spendenziel</p>
            <div class="flex flex-col">
              <select v-model="formData.targetArea" id="targetArea" class="bg-orange-100 h-12 px-3" name="targetArea">
                <option value selected>Wohin soll die Spende gehen?</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Syrien">Syrien</option>
                <option value="Togo">Togo</option>
              </select>
            </div>
          </div>

          <div v-if="registrationAddressShow" id="optionalAddress">
            <div id="personalInformation" class="mb-3">
              <p class="text-lg font-semibold">Persönliche Daten</p>
              <div class="flex flex-col md:flex-row gap-4 mb-3">
                <div class="basis-1/3 flex flex-col">
                  <label for="salutation">Anrede</label>
                  <select v-model="formData.salutation"
                          id="salutation" class="bg-orange-100 h-12 px-3" name="salutation">
                    <option value selected>...</option>
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    <option value="Divers">Divers</option>
                  </select>
                </div>
                <div class="basis-1/3 flex flex-col">
                  <label class="block" for="firstName">Vorname</label>
                  <input v-model="formData.firstName" id="firstName"
                         class="bg-orange-100 h-12 px-3" name="firstName" type="text" placeholder="Max">
                </div>
                <div class="basis-1/3 flex flex-col">
                  <label class="block" for="lastName">Nachname</label>
                  <input v-model="formData.lastName" id="lastName" class="bg-orange-100 h-12 px-3"
                         name="lastName" type="text" placeholder="Mustermann">
                </div>
              </div>
              <div class="flex flex-col">
                <label for="email">E-Mail</label>
                <input v-model="formData.email" id="email" class="bg-orange-100 h-12 px-3"
                       name="email" type="email" placeholder="E-Mail">
              </div>
            </div>
            <div class="mb-3">
              <p class="text-lg font-semibold">Abholadresse</p>
              <div class="flex flex-col mb-3">
                <label for="street">Straße und Hausnummer</label>
                <input v-model="formData.street" id="street" class="bg-orange-100 h-12 px-3"
                       name="street" type="text" placeholder="Musterstraße 123">
              </div>
              <div class="flex flex-col md:flex-row gap-4">
                <div class="basis-1/3 flex flex-col">
                  <label for="zipcode">Postleitzahl</label>
                  <input v-model="formData.zipCode" id="zipcode" class="bg-orange-100 h-12 px-3"
                         name="zipcode" type="number" placeholder="Postleitzahl">
                </div>
                <div class="basis-2/3 flex flex-col">
                  <label for="city">Ort</label>
                  <input v-model="formData.city" id="city" class="bg-orange-100 h-12 px-3"
                         name="city" type="text" placeholder="Ort">
                </div>
              </div>
            </div>
            <div id="date" class="mb-3">
              <p class="text-lg font-semibold">Wunsch-Termin</p>
              <div class="flex gap-4">
                <div class="flex flex-col basis-1/2">
                  <label for="pickUpDate">Abholdatum</label>
                  <input v-model="formData.pickUpDate" id="pickUpDate" class="bg-orange-100 h-12 px-3"
                         name="pickUpDate" type="date" placeholder="tt.mm.jjjj">
                </div>
                <div class="flex flex-col basis-1/2">
                  <label for="pickUpTime">Abholzeit</label>
                  <select v-model="formData.pickUpTime" id="pickUpTime" class="bg-orange-100 h-12 px-3"
                          name="pickUpTime">
                    <option value selected>...</option>
                    <option value="9to12">9-12 Uhr</option>
                    <option value="12to18">12-18 Uhr</option>
                    <option value="18to20">18-20 Uhr</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="gdpr" class="custom-checkbox flex cursor-pointer">
                <input v-model="formData.gdpr" id="gdpr" class="absolute invisible" type="checkbox">
                <span class="checkmark me-2 inline-block w-6 h-6 aspect-square relative bg-orange-100"></span>
                <Icon v-if="formData.gdpr" class="absolute text-orange-400" name="gravity-ui:check" size="1.4em" />
                Ich bin mit der Speicherung und Verarbeitung meiner Daten einverstanden.</label>
            </div>
          </div>

          <button
              class="rounded-full py-3 px-5 bg-orange-100 border-2 border-orange-400 hover:border-orange-600 text-orange-400 hover:text-orange-600 active:border-orange-700 active:text-orange700 uppercase font-semibold text-xl">
            Registrierung senden
          </button>
        </form>
      </div>
    </div>
</template>
