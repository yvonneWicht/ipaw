<template>
  <TopImage
      desktopImage="/_nuxt/assets/images/regions-landingpage.jpg"
      mobileImage="/_nuxt/assets/images/regions-landingpage-mobile.jpg"
      headline1="Unsere aktuellen"
      headline2="Projekte in der Welt."
  />

  <Content contentHeadline="Syrien">
    <template #basicText>
      In Syrien sind viele Menschen aufgrund des langjährigen Konflikts auf humanitäre Hilfe angewiesen.
      Kleiderspenden werden dringend benötigt, um besonders bedürftige Familien mit warmer Kleidung und alltäglichen
      Kleidungsstücken zu versorgen. Ihre Spende hilft, das Leid der Menschen vor Ort zu lindern.
    </template>
  </Content>

  <Content contentHeadline="Ukraine"
           contentBackground>
    <template #basicText>
      Der anhaltende Konflikt in der Ukraine hat zahlreiche Familien gezwungen, ihre Heimat zu verlassen. Vor allem
      in den Wintermonaten fehlt es vielen Menschen an warmer Kleidung. Ihre Kleiderspende kann den betroffenen
      Menschen helfen, sich in dieser schwierigen Zeit besser zu schützen.
    </template>
  </Content>

  <Content contentHeadline="Togo">
    <template #basicText>
      In Togo leiden viele Menschen unter schwierigen wirtschaftlichen Bedingungen. Kleiderspenden sind hier eine
      wertvolle Unterstützung, insbesondere für Kinder und Familien, die sich keine neue Kleidung leisten können. Ihre
      Spende bringt Hoffnung und verbessert das Leben der Menschen vor Ort.
    </template>
  </Content>
</template>

<script setup lang="ts">
useHead({
  title: 'KleiderHerz - Spendenregionen',
})
</script>