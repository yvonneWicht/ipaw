<template>
  <header>
    <div class="w-screen h-48 bg-gradient-to-b from-white z-50">
      <nav class="max-w-screen-xl flex justify-center mx-auto items-center relative xl:pe-0 pe-8 text-2xl text-white">
        <div class="flex justify-end bg-orange-400 items-center rounded-full lg:h-16 h-12 ms-20 lg:mt-24 mt-16 w-11/12 static">
          <NuxtLink id="mainLogo" class="flex justify-items-start items-center absolute top-1 xl:left-3 left-5 z-20" to="/">
            <img class="lg:w-36 w-24" src="@/assets/images/KleiderHerzLogo.svg" alt="KleiderHerz Logo">
            <span class="font-cursive lg:mt-16 mt-12 text-4xl lg:text-5xl">KleiderHerz</span>
          </NuxtLink>
          <div id="navBarLinks" class="flex justify-end xl:space-x-8 invisible xl:visible px-8">
            <ElementNavBarLink
                v-for="(item, index) in [
                  ['Registrierung', '/registrierung'],
                  ['Unser Verein', '/unser-verein'],
                  ['Engagement', '/engagement'],
                  ['Spendenregionen', '/spendenregionen'],
                ]"
                :key="index"
                :targetLink="item[1]"
                :buttonText="item[0]"
            />
          </div>
          <div id="navBarMobile" class="xl:hidden flex flex-col justify-end pe-6">
            <button id="toggleMobileNavigation" class="flex align-center z-10" type="button"
                    @click="toggleMobileNavigation()">
              <Icon v-if="mobileNavigationShow" name="gravity-ui:xmark" size="1.5em"/>
              <Icon v-else name="gravity-ui:bars" size="1.5em"/>
            </button>
          </div>
          <div v-if="mobileNavigationShow" id="navBarMobileDropdown"
               class="bg-orange-400 rounded-[24px] px-8 pt-12 pb-2 flex flex-col items-end absolute lg:top-28 top-16 w-11/12 gap-y-2 z-0 text-xl">
            <NuxtLink
                v-for="(item, index) in [
                  ['Registrierung', '/registrierung'],
                  ['Unser Verein', '/unser-verein'],
                  ['Engagement', '/engagement'],
                  ['Spendenregionen', '/spendenregionen'],
                ]"
                :key="index"
                :to="item[1]"
                @click="toggleMobileNavigation"
            >
              {{ item[0] }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const {mobileNavigationShow, toggleMobileNavigation} = useMobileNavigation();
</script>