<script setup lang="ts">

const {mobileNavigationShow, toggleMobileNavigation} = useMobileNavigation();
const {isActive} = useNavigation();

</script>

<template>
  <header>
    <div class="w-screen h-48 bg-gradient-to-b from-white z-50">
      <nav class="max-w-screen-xl flex justify-center mx-auto items-center relative xl:pe-0 pe-8 text-2xl text-white">

        <div class="flex justify-end bg-orange-400 items-center rounded-full lg:h-16 h-12 ms-20 lg:mt-24 mt-16 w-11/12 static">
          <NuxtLink class="flex justify-items-start items-center absolute top-1 xl:left-3 sm:left-5 left-1 z-20" to="/">
            <img class="lg:w-36 w-24" src="@/assets/images/KleiderHerzLogo.svg" alt="KleiderHerz Logo">
            <span class="kleiderHerz lg:mt-16 mt-12 sm:text-5xl text-4xl">KleiderHerz</span>
          </NuxtLink>
          <div class="flex justify-end xl:space-x-8 invisible xl:visible px-8">
            <NuxtLink class="navBarElement flex items-center" to="/registrierung">
              <Icon :class="isActive('/registrierung')"
                    class="navBarHeart text-transparent me-2"
                    name="gravity-ui:heart-fill" size="1em"/>
              Registrierung
            </NuxtLink>
            <NuxtLink class="navBarElement flex items-center" to="/unser-verein">
              <Icon :class="isActive('/unser-verein')"
                    class="navBarHeart text-transparent me-2"
                    name="gravity-ui:heart-fill" size="1em"/>
              Unser Verein
            </NuxtLink>
            <NuxtLink class="navBarElement flex items-center" to="/engagement">
              <Icon :class="isActive('/engagement')"
                    class="navBarHeart text-transparent me-2"
                    name="gravity-ui:heart-fill" size="1em"/>
              Engagement
            </NuxtLink>
            <NuxtLink class="navBarElement flex items-center" to="/spendenregionen">
              <Icon :class="isActive('/spendenregionen')"
                    class="navBarHeart text-transparent me-2"
                    name="gravity-ui:heart-fill" size="1em"/>
              Spendenregionen
            </NuxtLink>
          </div>

          <div class="xl:hidden flex flex-col justify-end pe-6">
            <button id="toggleMobileNavigation" class="flex align-center z-10" type="button"
                    @click="toggleMobileNavigation()">
              <Icon v-if="mobileNavigationShow" name="gravity-ui:xmark" size="1.5em"/>
              <Icon v-else name="gravity-ui:bars" size="1.5em"/>
            </button>
          </div>
          <div v-if="mobileNavigationShow" id="mobileNavigationDropDown"
               class="bg-orange-400 rounded-[24px] px-8 pt-12 pb-2 flex flex-col items-end absolute lg:top-28 top-16 w-11/12 gap-y-2 z-0">
            <NuxtLink to="/registrierung" @click="toggleMobileNavigation()">Registrierung</NuxtLink>
            <NuxtLink to="/unser-verein" @click="toggleMobileNavigation()">Unser Verein</NuxtLink>
            <NuxtLink to="/engagement" @click="toggleMobileNavigation()">Engagement</NuxtLink>
            <NuxtLink to="/spendenregionen" @click="toggleMobileNavigation()">Spendenregionen</NuxtLink>
          </div>
        </div>

      </nav>
    </div>
  </header>
</template>