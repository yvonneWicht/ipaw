<template>
  <div class="max-w-screen-md mx-auto mt-52">
    <h1 class="inline-block text-2xl md:text-4xl text-orange-400 bg-orange-100 p-2 mb-4 mx-2">Quellen</h1><br>
    <h2 class="inline-block font-bold text-xl md:text-2xl text-orange-400 mx-2">Logo</h2>
    <div class="flex items-center mb-4">
      <img class="lg:w-36 w-24 me-3" src="@/assets/images/KleiderHerzLogo.svg" alt="KleiderHerz Logo">
      <p class="text-lg mx-2">
        Das Logo wurde in Adobe Illustrator mit Hilfe der integrierten KI erstellt.
      </p>
    </div>

    <h2 class="inline-block font-bold text-xl md:text-2xl text-orange-400 mx-2">Texte</h2>
    <p class="text-lg mx-2 mb-4">
      Alle Texte auf dieser Website wurden mithilfe von ChatGPT, einem KI-basierten Textgenerator, erstellt.
      Es wird keine Gewähr für die Richtigkeit, Vollständigkeit oder Realitätstreue der bereitgestellten Informationen übernommen.
      Inhalte können rein fiktiv oder ungenau sein. Bitte verwenden Sie die Informationen nach eigenem Ermessen.
    </p>
    <h2 class="inline-block font-bold text-xl md:text-2xl text-orange-400 mx-2">Bildmaterial</h2>
    <p class="text-lg mx-2 mb-4">
      Die auf dieser Website verwendeten Bilder stammen als Vorschaubilder von der Plattform iStock.com. Es besteht
      keine Lizenz, diese Bilder in einem realen Projekt zu nutzen. Sie dienen ausschließlich zur Simulation und
      Veranschaulichung im Rahmen dieser Fallstudie. Bei einer tatsächlichen Realisierung müssten die Bilder entweder
      gekauft bzw. lizenziert oder durch anderes, lizenzfreies Bildmaterial ersetzt werden.
    </p>
    <div class="mx-2 pt-3">
      <h3 class="text-xl font-semibold">Startseite</h3>
      <a href="https://www.istockphoto.com/de/foto/hand-des-freiwilligen-die-einer-person-in-einem-gemeindezentrum-spenden-gibt-gm1372606861-441675262"
         target="_blank">
        <img class="md:w-3/4 mt-4" src="@/assets/images/donation-landingpage.jpg" alt="Hände die Kleidung überreichen">
        iStock Image Nummer 1372606861
      </a>
      <a href="https://www.istockphoto.com/de/foto/aleppo-syrien-gm118988878-12307046" target="_blank">
        <img class="md:w-3/4 mt-4" src="@/assets/images/syria.jpg" alt="Syrien">
        iStock Image Nummer 118988878
      </a>
      <a href="https://www.istockphoto.com/de/foto/kiew-ukraine-stadtbild-von-kiew-und-ukrainische-flagge-weht-im-sommer-im-bezirk-podil-gm1305347131-396263171"
         target="_blank">
        <img class="md:w-3/4 mt-4" src="@/assets/images/ukraine.jpg" alt="Ukraine">
        iStock Image Nummer 1305347131
      </a>
      <a href="https://www.istockphoto.com/de/foto/dschungelstra%C3%9Fe-togo-westafrika-gm1158464101-316456828"
         target="_blank">
        <img class="md:w-3/4 mt-4" src="@/assets/images/togo.jpg" alt="Togo">
        iStock Image Nummer 1158464101
      </a>
    </div>
    <div class="mx-2 pt-3">
      <h3 class="text-xl font-semibold">Registrierung</h3>
      <a href="https://www.istockphoto.com/de/foto/baby-und-kinderkleidung-spielzeug-in-der-box-gebrauchte-bekleidungsidee-zirkul%C3%A4re-gm1396160859-451011480?searchscope=image%2Cfilm"
         target="_blank">
        <img class="md:w-3/4 mt-4" src="@/assets/images/registration-landingpage.jpg" alt="Registrierung">
        iStock Image Nummer 1396160859
      </a>
    </div>


    <div class="mx-2 pt-3">
      <h3 class="text-xl font-semibold">Bestätigungsseite</h3>
      <a href="https://www.istockphoto.com/de/foto/menge-h%C3%A4nde-und-herz-zeichen-mit-einer-gruppe-von-menschen-gemeinschaft-und-freunden-gm1795108914-548059052?searchscope=image%2Cfilm"
         target="_blank">
        <img class="md:w-3/4 mt-4" src="@/assets/images/confirmation-landingpage.jpg" alt="Bestätigungsseite">
        iStock Image Nummer 1795108914
      </a>
    </div>

    <div class="mx-2 pt-3">
      <h3 class="text-xl font-semibold">Unser Verein</h3>
      <a href="https://www.istockphoto.com/de/foto/wohlt%C3%A4tige-stiftung-gm1139776971-304763220?searchscope=image%2Cfilm"
         target="_blank">
        <img class="md:w-3/4 mt-4" src="../../assets/images/association-landingpage.jpg" alt="Unser Verein">
        iStock Image Nummer 1139776971
      </a>
    </div>

    <div class="mx-2 pt-3">
      <h3 class="text-xl font-semibold">Engagement</h3>
      <a href="https://www.istockphoto.com/de/foto/freunde-verbinden-arme-in-einheit-gm1199706305-343357584?searchscope=image%2Cfilm"
         target="_blank">
        <img class="md:w-3/4 mt-4" src="@/assets/images/engagement-landingpage.jpg" alt="Engagement">
        iStock Image Nummer 1199706305
      </a>
    </div>

    <div class="mx-2 pt-3">
      <h3 class="text-xl font-semibold">Spendenregionen</h3>
      <a href="https://www.istockphoto.com/de/foto/slums-und-armenviertel-der-stadt-manila-gm1470412147-501273789?searchscope=image%2Cfilm"
         target="_blank">
        <img class="md:w-3/4 mt-4" src="@/assets/images/regions-landingpage.jpg" alt="Spendenregionen">
        iStock Image Nummer 1470412147
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'KleiderHerz - Quellen',
});
</script>