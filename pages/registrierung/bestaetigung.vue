<template>
  <TopImage
      desktopImage="/_nuxt/assets/images/confirmation-landingpage.jpg"
      mobileImage="/_nuxt/assets/images/confirmation-landingpage-mobile.jpg"
      :headline1="headline1"
      headline2="für deine Hilfe."
  />

  <div class="max-w-screen-xl mx-auto">
    <div class="flex flex-col lg:flex-row">
      <div class="basis-1/2">
        <Content contentHeadline="Deine Spende">
          <template #additionalContent>
            <p v-if="formData.typeWomen" class="text-lg px-2 mx-2">
              <Icon class="align-text-bottom me-1" name="gravity-ui:check" size="1.5em"/>
              Damenkleidung
            </p>
            <p v-if="formData.typeMen" class="text-lg px-2 mx-2">
              <Icon class="align-text-bottom me-1" name="gravity-ui:check" size="1.5em"/>
              Herrenkleidung
            </p>
            <p v-if="formData.typeKids" class="text-lg px-2 mx-2">
              <Icon class="align-text-bottom me-1" name="gravity-ui:check" size="1.5em"/>
              Kinderkleidung
            </p>
            <p v-if="formData.typeShoes" class="text-lg px-2 mx-2">
              <Icon class="align-text-bottom me-1" name="gravity-ui:check" size="1.5em"/>
              Schuhe
            </p>
          </template>
        </Content>
        <div class="mt-9">
          <Content contentHeadline="Spendenregion">
            <template #additionalContent>
              <p class="text-lg px-2 pb-9 mx-2">{{ formData.targetArea }}</p>
            </template>
          </Content>
        </div>
      </div>

      <div v-if="registrationAddressShow">
        <Content contentHeadline="Information zur Abholung">
          <template #additionalContent>
            <p class="text-lg px-2 pb-9 mx-2">
              <span class="font-semibold">Abholadresse:</span><br>
              <span v-if="formData.salutation !== 'Divers'">{{ formData.salutation }}</span> {{ formData.firstName }}
              {{ formData.lastName }} <br>
              {{ formData.street }} <br>
              {{ formData.zipCode }} {{ formData.city }} <br><br>
              {{ formData.email }}
            </p>
            <p class="text-lg px-2 pb-9 mx-2"><span class="font-semibold">Dein gewünschter Abhol-Termin:</span><br>
              {{ formData.pickUpDate.slice(8, 10) }}.{{
                formData.pickUpDate.slice(5, 7)
              }}.{{ formData.pickUpDate.slice(0, 4) }},
              {{ formData.pickUpTime }} Uhr</p>
          </template>
        </Content>
      </div>
    </div>
    <p class="text-lg px-2 mx-2"><span
        class="font-semibold">Registrierungszeitpunkt:</span><br>{{ formData.registrationDate }}</p>
  </div>
</template>

<script setup lang="ts">
const formData = useFormData();
const registrationAddressShow = useRegistrationAddressShow();

const headline1 = computed(() => `Danke ${formData.value.firstName ? formData.value.firstName : ''}`);

useHead({
  title: 'KleiderHerz - Danke!',
});
</script>