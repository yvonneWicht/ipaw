<script setup>
useHead({
  title: 'KleiderHerz - Home',
});
</script>

<template>
  <div id="topImage" class="relative">
    <img src="@/assets/images/donation-landingpage.jpg" class="w-screen pb-9 hidden sm:block">
    <img src="@/assets/images/donation-landingpage-mobile.jpg" class="w-screen pb-9 sm:hidden">
    <div class="absolute inset-y-1/2 xl:inset-x-60 sm:inset-x-40 inset-x-10">
      <h1 class="inline-block bg-orange-400 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold p-2">
        Spende Wärme</h1><br>
      <h1 class="inline-block bg-orange-400 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold p-2">für
        Menschen in Not.</h1>
    </div>
  </div>

  <div id="content">
    <div id="intro">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
          Unsere Mission
        </h2>
        <p class="text-lg px-2 pb-9 mx-2">Wohltätigkeitsgeschäfte haben die Macht, einen positiven Welleneffekt zu
          erzeugen.
          Indem Sie diese Geschäfte unterstützen, tragen Sie nicht nur zu einem nachhaltigeren
          Mode-Ökosystem bei, sondern setzen sich auch für wichtige Anliegen ein. Jeder Kauf
          und jede Spende wird zu einem Schritt in Richtung Veränderung und verwandelt
          die Mode in eine Kraft des Guten.</p>
      </div>
    </div>

    <div id="regions" class="bg-[#fac8a2] py-4">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
          Aktuelle Spendenregionen
        </h2>
        <p class="text-lg px-2 pb-4 mx-2">Wohltätigkeitsgeschäfte haben die Macht, einen positiven Welleneffekt zu
          erzeugen.
          Indem Sie diese Geschäfte unterstützen, tragen Sie nicht nur zu einem nachhaltigeren
          Mode-Ökosystem bei, sondern setzen sich auch für wichtige Anliegen ein. Jeder Kauf
          und jede Spende wird zu einem Schritt in Richtung Veränderung und verwandelt
          die Mode in eine Kraft des Guten.</p>
        <div class="flex gap-8 flex-col md:flex-row px-2">
          <Card class="basis-1/3">
            <template v-slot:image>
              <img src="@/assets/images/syria.jpg" alt="Syrien">
            </template>
            <template v-slot:header>
              Syrien
            </template>
          </Card>
          <Card class="basis-1/3">
            <template v-slot:image>
              <img src="@/assets/images/ukraine.jpg" alt="Ukraine">
            </template>
            <template v-slot:header>
              Ukraine
            </template>
          </Card>
          <Card class="basis-1/3">
            <template v-slot:image>
              <img src="@/assets/images/togo.jpg" alt="Togo">
            </template>
            <template v-slot:header>
              Togo
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>