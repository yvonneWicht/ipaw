<template>
  <TopImage
      desktopImage="/_nuxt/assets/images/engagement-landingpage.jpg"
      mobileImage="/_nuxt/assets/images/engagement-landingpage-mobile.jpg"
      headline1="Werde zur"
      headline2="helfenden Hand."
  />

  <Content contentHeadline="Fahrer werden">
    <template #basicText>
      Werden Sie Teil unseres Teams und unterstützen Sie uns als ehrenamtlicher Fahrer! Wir suchen engagierte
      Helfer, die uns dabei unterstützen, Kleiderspenden direkt bei Spendern zu Hause abzuholen und sicher an
      unsere Sammelstellen zu bringen. Ihre Mithilfe ist ein entscheidender Beitrag, um Menschen in Not schnell
      und unkompliziert zu helfen.
    </template>
    <template #additionalContent>
      <h3 class="font-semibold text-lg px-2 pb-4 mx-2">Ihre Aufgaben:</h3>
      <ul class="list-disc text-lg px-2 pb-4 mx-8">
        <li>Abholung von Kleiderspenden bei Spendern in Ihrer Umgebung</li>
        <li>Transport der Spenden zu den Sammelstellen oder Verteilzentren</li>
      </ul>

      <h3 class="font-semibold text-lg px-2 pb-4 mx-2">Was Sie mitbringen sollten:</h3>
      <ul class="list-disc text-lg px-2 pb-4 mx-8">
        <li>Führerschein und eigenes Fahrzeug (von Vorteil, aber kein Muss)</li>
        <li>Zuverlässigkeit und Freude am Helfen</li>
        <li>Flexibilität bei der Terminabsprache</li>
      </ul>

      <p class="text-lg px-2 pb-9 mx-2">
        Mit Ihrer Unterstützung leisten Sie einen wichtigen Beitrag für unsere Hilfsaktionen!
        Melden Sie sich noch heute bei uns.
      </p>
    </template>
  </Content>

  <Content contentHeadline="Helfer vor Ort"
           contentBackground>
    <template #basicText>
      Möchten Sie sich aktiv für einen guten Zweck einsetzen? Wir suchen ehrenamtliche Helfer, die uns vor Ort bei
      der Annahme und Sortierung der Kleiderspenden unterstützen. Gemeinsam sorgen wir dafür, dass die Spenden an
      die richtigen Stellen gelangen und schnellstmöglich Menschen in Not erreichen.
    </template>
    <template #additionalContent>
      <h3 class="font-semibold text-lg px-2 pb-4 mx-2">Ihre Aufgaben:</h3>
      <ul class="list-disc text-lg px-2 pb-4 mx-8">
        <li>Annahme und Registrierung von Kleiderspenden</li>
        <li>Sortierung der Kleidung nach Art und Zustand</li>
        <li>Vorbereitung der Spenden für den Versand in die Zielregionen</li>
      </ul>

      <h3 class="font-semibold text-lg px-2 pb-4 mx-2">Was Sie mitbringen sollten:</h3>
      <ul class="list-disc text-lg px-2 pb-4 mx-8">
        <li>Teamgeist und Organisationstalent</li>
        <li>Freude am Anpacken und Helfen</li>
        <li>Zeitliche Flexibilität und Zuverlässigkeit</li>
      </ul>

      <p class="px-2 pb-4 mx-2 text-lg">
        Werden Sie Teil unseres engagierten Teams und helfen Sie, einen Unterschied zu machen!
        Wir freuen uns auf Ihre Unterstützung.
      </p>
    </template>
  </Content>
</template>

<script setup lang="ts">
useHead({
  title: 'KleiderHerz - Engagement',
});
</script>