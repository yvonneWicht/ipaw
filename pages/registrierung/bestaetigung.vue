<script setup>

const formData = useFormData();
const registrationAddressShow = useRegistrationAddressShow();

useHead({
  title: 'KleiderHerz - Danke!',
})
</script>

<template>
  <div id="topImage" class="relative">
    <img src="@/assets/images/confirmation-landingpage.jpg" class="w-screen pb-9 hidden md:block">
    <img src="@/assets/images/confirmation-landingpage-mobile.jpg" class="w-screen pb-9 md:hidden">
    <div class="absolute inset-y-1/2 xl:inset-x-60 md:inset-x-40 inset-x-10">
      <h1 class="inline-block bg-orange-400 text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold p-2">
        Danke {{ formData.firstName }}
      </h1><br>
      <h1 class="inline-block bg-orange-400 text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold p-2">
        für deine Hilfe.
      </h1>
    </div>
  </div>

  <div class="max-w-screen-xl mx-auto">
    <div class="flex flex-col lg:flex-row">
      <div class="basis-1/2">
        <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
          Deine Spende
        </h2>
        <p v-if="formData.typeWomen" class="text-lg px-2 mx-2">
          <Icon name="gravity-ui:check" size="1.5em" class="align-text-bottom me-1"/>
          Frauenkleidung
        </p>
        <p v-if="formData.typeMen" class="text-lg px-2  mx-2">
          <Icon name="gravity-ui:check" size="1.5em" class="align-text-bottom me-1"/>
          Herrenkleidung
        </p>
        <p v-if="formData.typeKids" class="text-lg px-2  mx-2">
          <Icon name="gravity-ui:check" size="1.5em" class="align-text-bottom me-1"/>
          Kinderkleidung
        </p>
        <p v-if="formData.typeShoes" class="text-lg px-2  mx-2">
          <Icon name="gravity-ui:check" size="1.5em" class="align-text-bottom me-1"/>
          Schuhe
        </p>
        <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2 mt-9">
          Spendenregion
        </h2>
        <p class="text-lg px-2 pb-9 mx-2">{{ formData.targetArea }}</p>
      </div>
      <div v-if="registrationAddressShow" id="pickUp">
        <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
          Informationen zur Abholung
        </h2>
        <p class="text-lg px-2 pb-9 mx-2">
          <span class="font-semibold">Abholadresse:</span><br>
          {{ formData.salutation }} {{ formData.firstName }} {{ formData.lastName }} <br>
          {{ formData.street }} <br>
          {{ formData.zipCode }} {{ formData.city }} <br>
          <br>
          {{ formData.email }}
        </p>
        <p class="text-lg px-2 pb-9 mx-2"><span class="font-semibold">Dein gewünschter Termin:</span><br>
          {{ formData.pickUpDate }}, {{ formData.pickUpTime }}</p>
      </div>
    </div>
  </div>
</template>
