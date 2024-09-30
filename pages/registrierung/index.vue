<!--würde man einen Ordner erstellen der Registrierung heißt und eine datei index.vue enthält?-->
<script setup>
useHead({
  title: 'KleiderHerz - Registrierung',
})
</script>

<template>
  <div>Spende registrieren</div>
  <form id="registrationForm">
    <div id="mainInformation">
      <p>Abgabeort</p>
      <div>
        <div>
          <input type="radio" name="selectHandover" id="dropOff" value="dropOff" checked>
          <label for="dropOff">Übergabe an der Geschäftsstelle</label>
        </div>
        <div>
          <input type="radio" name="selectHandover" id="pickUp" value="pickUp">
          <label for="pickUp">Abholung</label>
        </div>
      </div>
    </div>

    <div>
      <p>Art der Kleidung</p>
      <div>
        <div>
          <input type="checkbox" id="womenClothes" name="clothesType" value="women">
          <label for="womenClothes">Damenkleidung</label>
        </div>
        <div>
          <input type="checkbox" id="mensClothes" name="clothesType" value="men">
          <label for="mensClothes">Herrenkleidung</label>
        </div>
        <div>
          <input type="checkbox" id="kidsClothes" name="clothesType" value="kids">
          <label for="kidsClothes">Kinderkleidung</label>
        </div>
        <div>
          <input type="checkbox" id="shoes" name="clothesType" value="shoes">
          <label for="shoes">Schuhe</label>
        </div>
      </div>
    </div>

    <p>Spendenziel</p>
    <div>
      <select id="targetArea" name="targetArea" required>
        <option value selected>Wohin soll die Spende gehen?</option>
        <option value="ukraine">Ukraine</option>
        <option value="bulgaria">Bulgarien</option>
        <option value="syria">Syrien</option>
        <option value="togo">Togo</option>
      </select>
      <label for="targetArea">Spendenregion</label>
    </div>

    <div id="optionalAddress">
      <div id="personalInformation">
        <p>Persönliche Daten</p>
        <div>
          <select name="salutation" id="salutation">
            <option value selected>...</option>
            <option value="mr">Herr</option>
            <option value="mrs">Frau</option>
            <option value="div">Divers</option>
          </select>
          <label for="salutation">Anrede</label>
        </div>
        <div>
          <input type="text" id="firstName" name="firstName" placeholder="Max">
          <label for="firstName">Vorname</label>
        </div>
        <div>
          <input type="text" id="lastName" name="lastName" placeholder="Mustermann">
          <label for="lastName">Nachname</label>
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="E-Mail">
          <label for="email">E-Mail</label>
        </div>
      </div>

      <p>Abholadresse</p>
      <div>
        <input type="text" id="street" name="street" placeholder="Musterstraße 123">
        <label for="street">Straße und Hausnummer</label>
      </div>
      <div>
        <input type="number" id="zipcode" name="zipcode" placeholder="Postleitzahl">
        <label for="zipcode">Postleitzahl</label>
      </div>
      <div>
        <input type="text" id="city" name="city" placeholder="Ort">
        <label for="city">Ort</label>
      </div>

      <p>Wunsch-Termin</p>
      <div>
        <input type="date" id="pickUpDate" name="pickUpDate" placeholder="tt.mm.jjjj">
        <label for="pickUpDate">Gewünschtes Abholdatum</label>
      </div>
      <div>
        <div>
          <input type="radio" name="pickUpTime" id="9to12" value="9to12" checked>
          <label for="9to12">9-12 Uhr</label>
        </div>
        <div>
          <input type="radio" name="pickUpTime" id="12to18" value="12to18">
          <label for="12to18">12-18 Uhr</label>
        </div>
        <div>
          <input type="radio" name="pickUpTime" id="18to20" value="18to20">
          <label for="18to20">18-20 Uhr</label>
        </div>
      </div>
    </div>

    <div>
      <input type="checkbox" id="gdpr">
      <label for="gdpr">Ich bin mit der Speicherung und Verarbeitung meiner Daten einverstanden.</label>
    </div>

    <button type="button" id="submitRegistration">Spende anmelden</button>
  </form>

</template>
