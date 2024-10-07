<template>
  <NuxtRouteAnnouncer/>

    <Header class="absolute top-0 z-50"/>
      <NuxtPage />

  <Footer />
</template>
// TODO: setup lang="ts" überall korrekt einfügen
<script setup lang="ts">
</script>

<!--Minute 32 - Layouts-->
<!--https://youtu.be/fTPCKnZZ2dk-->
<!--Infos zu SVG: Minute 46-->
<!--Als Component/Icons einbauen, ist dann eine vue-Datei in der der SVG-Code liegt-->
<!--VueUse!!!!!!-->
<!--Middleware genauer anschauen ob nützlich ca. 1std 4-->
<!--content module um texte nicht im html schreiben zu müssen?-->
<!--Eingesetztes Icon-Set: https://icones.js.org/collection/gravity-ui-->
<!--evtl. einen hook der vor dem seitenwechsel alle eingaben validiert?-->


<!--für die Zukunft: evlt. Pinia wenn das Projekt wächst sowie VueUse als librabry einbinden-->

<!--Infos zur Verwendung von useState:-->
<!--https://www.vuemastery.com/blog/nuxt-3-state-mangement-pinia-vs-usestate/-->

<!--es wird alles clientseitig ausgeführt, es wäre eine überlegung mittels server routes die geschäftslogik -->
<!--wie z. b. die validierung serverseitig ausführen zu lassen-->