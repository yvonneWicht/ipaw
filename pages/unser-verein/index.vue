<template>
  <TopImage
      desktopImage="/_nuxt/assets/images/association-landingpage.jpg"
      mobileImage="/_nuxt/assets/images/association-landingpage-mobile.jpg"
      headline1="Unsere Mission"
      headline2="auf den Punkt gebracht."
  />

  <Content contentHeadline="Unsere Mission">
    <template #basicText>
      Wohltätigkeitsgeschäfte haben die Macht, einen positiven Welleneffekt zu
      erzeugen. Indem Sie diese Geschäfte unterstützen, tragen Sie nicht nur zu einem nachhaltigeren
      Mode-Ökosystem bei, sondern setzen sich auch für wichtige Anliegen ein. Jeder Kauf
      und jede Spende wird zu einem Schritt in Richtung Veränderung und verwandelt
      die Mode in eine Kraft des Guten.
    </template>
  </Content>

  <Content contentHeadline="Aktuelle Spendenregionen"
           contentBackground>
    <template #basicText>
      Diese Gebiete wurden aufgrund des dringenden Bedarfs an Kleidung und anderen Hilfsgütern ausgewählt.
      Durch Ihre Unterstützung helfen wir gemeinsam, Menschen in Not mit dringend benötigten Kleidungsstücken zu
      versorgen. Jede Spende trägt dazu bei, das Leben von Menschen in diesen Regionen zu verbessern.
    </template>
  </Content>
</template>

<script setup lang="ts">
useHead({
  title: 'KleiderHerz - Unser Verein',
})
</script>