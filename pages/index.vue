<template>
    <TopImage
        desktopImage="/_nuxt/assets/images/donation-landingpage.jpg"
        mobileImage="/_nuxt/assets/images/donation-landingpage-mobile.jpg"
        headline1="Spende Wärme"
        headline2="für Menschen in Not."
    />
    <Content contentHeadline="Unser Mission">
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
      <template #additionalContent>
        <div class="flex gap-8 flex-col md:flex-row px-2">
          <Card
              imageSrc="/_nuxt/assets/images/syria.jpg"
              headline="Syrien"
              targetLink="/spendenregionen"
              buttonText="Mehr"
              class="basis-1/3">
          </Card>
          <Card
              imageSrc="/_nuxt/assets/images/ukraine.jpg"
              headline="Ukraine"
              targetLink="/spendenregionen"
              buttonText="Mehr"
              class="basis-1/3">
          </Card>
          <Card
              imageSrc="/_nuxt/assets/images/togo.jpg"
              headline="Togo"
              targetLink="/spendenregionen"
              buttonText="Mehr"
              class="basis-1/3">
          </Card>
        </div>
      </template>
    </Content>
</template>

<script setup lang="ts">
useHead({
  title: 'KleiderHerz - Home',
});
</script>