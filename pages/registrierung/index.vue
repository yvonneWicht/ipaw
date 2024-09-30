<script setup lang="ts">

const {registrationAddressShow, toggleRegistrationAddress} = useRegistration();
const {formData, submitForm} = useValidation();

registrationAddressShow.value = false;

useHead({
  title: 'KleiderHerz - Registrierung',
})
</script>



<template>
<!--  TODO: Componente daraus erstellen-->
  <div id="topImage" class="relative">
    <img src="@/assets/images/registration-landingpage.jpg" class="w-screen pb-9 hidden md:block">
    <img src="@/assets/images/registration-landingpage-mobile.jpg" class="w-screen pb-9 md:hidden">
    <div class="absolute inset-y-1/2 xl:inset-x-60 md:inset-x-40 inset-x-10">
      <h1 class="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
        <span class="inline-block bg-orange-400 p-2">Schön, dass du uns</span><br>
      <span class="inline-block bg-orange-400 p-2">
        unterstützen möchtest.
      </span>
      </h1>
    </div>
  </div>

  <div id="content">
    <div id="intro">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
          Wie funktioniert die Spende
        </h2>
        <p class="text-lg px-2 pb-9 mx-2">Spendenanleitung. Wohltätigkeitsgeschäfte haben die Macht,
          einen positiven Welleneffekt zu erzeugen.
          Indem Sie diese Geschäfte unterstützen, tragen Sie nicht nur zu einem nachhaltigeren
          Mode-Ökosystem bei, sondern setzen sich auch für wichtige Anliegen ein. Jeder Kauf
          und jede Spende wird zu einem Schritt in Richtung Veränderung und verwandelt
          die Mode in eine Kraft des Guten.</p>
      </div>
    </div>

    <div id="registrationForm" class="bg-[#fac8a2] py-4 text-lg">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
          Jetzt registrieren
        </h2>

        <div id="selectHandover"
             class="flex justify-start items-end gap-12 text-xl md:text-2xl font-semibold mx-2 me-10">
          <button id="dropOff" class="mb-3 md:mb-5" @click="toggleRegistrationAddress(false)">
            <p>Übergabe an der Geschäftsstelle</p>
            <div class="h-1 bg-orange-400 mt-2"
                 :class="{ visible: registrationAddressShow === false,
                      invisible: registrationAddressShow === true}">

            </div>
          </button>

          <button id="pickup" class="mb-3 md:mb-5" @click="toggleRegistrationAddress(true)">
            <p>Abholung</p>
            <div class="h-1 bg-orange-400 mt-2"
                 :class="{ visible: registrationAddressShow === true,
                      invisible: registrationAddressShow === false}">

            </div>
          </button>
        </div>

        <form id="registrationForm" class="mx-2 my-5" @submit.prevent="submitForm()">

          <div class="mb-3">
            <p class="text-lg font-semibold">Art der Kleidung</p>
            <div class="flex justify-between flex-col md:flex-row">
              <div class="mb-3">
                <label for="womenClothes" class="custom-checkbox flex">
                  <input type="checkbox" id="womenClothes" name="clothesType" value="women" v-model="formData.typeWomen">
                  <span class="checkmark me-2"></span>
                  Damenkleidung
                </label>
              </div>
              <div class="mb-3">
                <label for="mensClothes" class="custom-checkbox flex">
                  <input type="checkbox" id="mensClothes" name="clothesType" value="men" v-model="formData.typeMen">
                  <span class="checkmark me-2"></span>
                  Herrenkleidung
                </label>
              </div>
              <div class="mb-3">
                <label for="kidsClothes" class="custom-checkbox flex">
                  <input type="checkbox" id="kidsClothes" name="clothesType" value="kids" v-model="formData.typeKids">
                  <span class="checkmark me-2"></span>
                  Kinderkleidung
                </label>
              </div>
              <div class="mb-3">
                <label for="shoes" class="custom-checkbox flex">
                  <input type="checkbox" id="shoes" name="clothesType" value="shoes" v-model="formData.typeShoes">
                  <span class="checkmark me-2"></span>
                  Schuhe
                </label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <p class="text-lg font-semibold">Spendenziel</p>
            <div class="flex flex-col">
              <select id="targetArea" name="targetArea" class="bg-orange-100 h-12 px-3" v-model="formData.targetArea">
                <option value selected>Wohin soll die Spende gehen?</option>
                <option value="ukraine">Ukraine</option>
                <option value="syria">Syrien</option>
                <option value="togo">Togo</option>
              </select>
            </div>
          </div>

          <div v-if="registrationAddressShow" id="optionalAddress">
            <div id="personalInformation" class="mb-3">
              <p class="text-lg font-semibold">Persönliche Daten</p>
              <div class="flex flex-col md:flex-row gap-4 mb-3">
                <div class="basis-1/3 flex flex-col">
                  <label for="salutation">Anrede</label>
                  <select name="salutation" id="salutation" class="bg-orange-100 h-12 px-3" v-model="formData.salutation">
                    <option value selected>...</option>
                    <option value="mr">Herr</option>
                    <option value="mrs">Frau</option>
                    <option value="div">Divers</option>
                  </select>
                </div>
                <div class="basis-1/3 flex flex-col">
                  <label for="firstName" class="block">Vorname</label>
                  <input type="text" id="firstName" name="firstName" class="bg-orange-100 h-12 px-3" placeholder="Max" v-model="formData.firstName">
                </div>
                <div class="basis-1/3 flex flex-col">
                  <label for="lastName" class="block">Nachname</label>
                  <input type="text" id="lastName" name="lastName" class="bg-orange-100 h-12 px-3" placeholder="Mustermann" v-model="formData.lastName">
                </div>
              </div>
              <div class="flex flex-col">
                <label for="email">E-Mail</label>
                <input type="email" id="email" name="email" class="bg-orange-100 h-12 px-3" placeholder="E-Mail" v-model="formData.email">
              </div>
            </div>
            <div class="mb-3">
              <p class="text-lg font-semibold">Abholadresse</p>
              <div class="flex flex-col mb-3">
                <label for="street">Straße und Hausnummer</label>
                <input type="text" id="street" name="street" class="bg-orange-100 h-12 px-3" placeholder="Musterstraße 123" v-model="formData.street">
              </div>
              <div class="flex flex-col md:flex-row gap-4">
                <div class="basis-1/3 flex flex-col">
                  <label for="zipcode">Postleitzahl</label>
                  <input type="number" id="zipcode" name="zipcode" class="bg-orange-100 h-12 px-3" placeholder="Postleitzahl" v-model="formData.zipCode">
                </div>
                <div class="basis-2/3 flex flex-col">
                  <label for="city">Ort</label>
                  <input type="text" id="city" name="city" class="bg-orange-100 h-12 px-3" placeholder="Ort" v-model="formData.city">
                </div>
              </div>
            </div>
            <div id="date" class="mb-3">
              <p class="text-lg font-semibold">Wunsch-Termin</p>
              <div class="flex gap-4">
                <div class="flex flex-col basis-1/2">
                  <label for="pickUpDate">Abholdatum</label>
                  <input type="date" id="pickUpDate" name="pickUpDate" class="bg-orange-100 h-12 px-3" placeholder="tt.mm.jjjj" v-model="formData.pickUpDate">
                </div>
                <div class="flex flex-col basis-1/2">
                  <label for="pickUpTime">Abholzeit</label>
                  <select name="pickUpTime" id="pickUpTime" class="bg-orange-100 h-12 px-3" v-model="formData.pickUpTime">
                    <option value selected>...</option>
                    <option value="9to12">9-12 Uhr</option>
                    <option value="12to18">12-18 Uhr</option>
                    <option value="18to20">18-20 Uhr</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="gdpr" class="custom-checkbox flex">
                <input type="checkbox" id="gdpr" v-model="formData.gdpr">
                <span class="checkmark me-2"></span>
                Ich bin mit der Speicherung und Verarbeitung meiner Daten einverstanden.</label>
            </div>
          </div>


<!--          TODO: @click werden die Daten in die Variable geschrieben, geprüft  und bei Erfolg wird auf die nächste Seite weitergeleitet,-->
<!--          evtl. mit einem Try-Catch-Block?-->
          <button
              class="rounded-full py-3 px-5 bg-orange-100 border-2 border-orange-400 hover:border-orange-600 text-orange-400 hover:text-orange-600 active:border-orange-700 active:text-orange700 uppercase font-semibold text-xl"
          @click="">
            <NuxtLink to="/registrierung/bestaetigung">Registrierung senden</NuxtLink>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
