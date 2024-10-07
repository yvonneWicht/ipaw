<script setup lang="ts">
useHead({
  title: 'KleiderHerz - Home',
});
</script>

<template>
  <TopImage
      desktopImage="/_nuxt/assets/images/donation-landingpage.jpg"
      mobileImage="/_nuxt/assets/images/donation-landingpage-mobile.jpg"
      headline1="Spende Wärme"
      headline2="für Menschen in Not."
  />

  <div class="max-w-screen-xl mx-auto">
    <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
      Unsere Mission
    </h2>
    <p class="text-lg px-2 pb-9 mx-2">
      Wohltätigkeitsgeschäfte haben die Macht, einen positiven Welleneffekt zu
      erzeugen. Indem Sie diese Geschäfte unterstützen, tragen Sie nicht nur zu einem nachhaltigeren
      Mode-Ökosystem bei, sondern setzen sich auch für wichtige Anliegen ein. Jeder Kauf
      und jede Spende wird zu einem Schritt in Richtung Veränderung und verwandelt
      die Mode in eine Kraft des Guten.
    </p>
  </div>

  <div class="bg-[#fac8a2] py-4">
    <div class="max-w-screen-xl mx-auto">
      <h2 class="inline-block font-bold text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">
        Aktuelle Spendenregionen
      </h2>
      <p class="text-lg px-2 pb-4 mx-2">
        Diese Gebiete wurden aufgrund des dringenden Bedarfs an Kleidung und anderen Hilfsgütern ausgewählt.
        Durch Ihre Unterstützung helfen wir gemeinsam, Menschen in Not mit dringend benötigten Kleidungsstücken zu
        versorgen. Jede Spende trägt dazu bei, das Leben von Menschen in diesen Regionen zu verbessern.
      </p>
      <div class="flex gap-8 flex-col md:flex-row px-2">
        <Card
            imageSrc="/_nuxt/assets/images/syria.jpg"
            headline="Syrien"
            class="basis-1/3">
        </Card>
        <Card
            imageSrc="/_nuxt/assets/images/ukraine.jpg"
            headline="Ukraine"
            class="basis-1/3">
        </Card>
        <Card
            imageSrc="/_nuxt/assets/images/togo.jpg"
            headline="Togo"
            class="basis-1/3">
        </Card>
      </div>
    </div>
  </div>
</template>