// @codekit-prepend "../../bower_components/jquery/dist/jquery.js", "../../bower_components/moment/min/moment.min.js", "../../bower_components/bootstrap/dist/js/bootstrap.js", "../../bower_components/handlebars/handlebars.js", "../../bower_components/alpaca/dist/alpaca/bootstrap/alpaca.js", "../../bower_components/jq-signature/jq-signature.js", "../../bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"
$(document).ready(function() {

	  // Alpaca.logLevel = Alpaca.DEBUG;


    var test = '<div class="registration"> \
    <h1>Aanmelding basisschool de Werkplaats</h1> \
    <p>Voor kinderen ouder dan 3 jaar.<p> \
    <div class="panel panel-default" id="kind"> \
      <div class="panel-heading"> \
        <h3 class="panel-title">Persoonlijke gegevens kind</h3> \
      </div> \
      <div class="panel-body" id="kind-fields"> \
      </div> \
    </div> \
    <div class="panel panel-default" id="verzorgers"> \
      <div class="panel-heading"> \
        <h3 class="panel-title">Persoonlijke gegevens verzorger(s)</h3> \
      </div> \
      <div class="panel-body" id="verzorgers-fields"> \
      </div> \
      <div class="panel-body"> \
        <div class="row"> \
            <div class="col-md-6" id="verzorger-a-fields"></div> \
            <div class="col-md-6" id="verzorger-b-fields"></div> \
        </div> \
      </div> \
    </div> \
    <div class="panel panel-default" id="info"> \
      <div class="panel-heading"> \
        <h3 class="panel-title">Informatieochtend</h3> \
      </div> \
      <div class="panel-body" id="info-fields"> \
        <p>Voor belangstellende ouders hebben wij regelmatig een informatieochtend. \
        Tijdens deze ochtend krijgt u de nodige informatie over onze school en uiteraard een rondleiding. \
        Het programma is afgestemd op volwassenen.</p> \
      </div> \
    </div> \
    <div class="panel panel-default" id="gezin"> \
      <div class="panel-heading"> \
        <h3 class="panel-title">Gegevens gezin</h3> \
      </div> \
      <div class="panel-body" id="gezin-fields"> \
      </div> \
    </div> \
    <div class="panel panel-default" id="begeleiding"> \
      <div class="panel-heading"> \
        <h3 class="panel-title">Begeleiding</h3> \
      </div> \
      <div class="panel-body" id="begeleiding-fields"> \
        <p>Om uw kind bij de start op de Werkplaats de juiste begeleiding te geven willen wij een een aantal vragen stellen.</p> \
        <p>Wij hopen op uw medewerking.</p> \
      </div> \
    </div> \
    <div class="panel panel-default" id="handtekening"> \
      <div class="panel-heading"> \
        <h3 class="panel-title">Handtekening(en)</h3> \
      </div> \
      <div class="panel-body"> \
        <p>Ondergetekende: \
        <ul> \
          <li>verklaart dit aanmeldingsformulier naar waarheid te hebben ingevuld.</li> \
          <li>is op de hoogte van de regeling ouderbijdrage zoals deze op De Werkplaats gehanteerd wordt.</li> \
        </ul> \
        </p> \
        <p>In de schoolgids staan alle activiteiten die op de Werkplaats plaatsvinden. Wij gaan er vanuit dat uw kind aan al deze activiteiten meedoet.</p> \
        <p>Mochten er redenen of omstandigheden zijn waardoor uw kind aan bepaalde activiteiten niet kan deelnemen, wilt u dit dan voor plaatsing met de schoolleiding bespreken?</p> \
        <div id="handtekening-verzorger-a-fields"></div> \
        <div id="handtekening-verzorger-b-fields"></div> \
          </div> \
        </div> \
        <div class="alert alert-info" role="alert"><p>Deze aanmelding is definitief op het moment dat u van ons een schriftelijke bevestiging heeft ontvangen.</p></div> \
    </div> \
    '

    /**
     * Initial data
     *
     * Fill in the JSON data that should be populated into the form.  This can be any JSON data that you'd like
     * provided that it fits the schema and options (if you provide those).
     *
     */
    var data = {}

    /**
     * JSON-schema for the form
     *
     * The form schema defines the data types, validation logic and other constraints that need to be satisfied in
     * order for the form to be considered valid.
     *
     * This should follow the JSON-schema convention.
     * @see http://json-schema.org
     *
     * Full schema settings are listed here:
     * @see http://www.alpacajs.org
     *
     */
    var schema = {}

    /**
     * Layout options for the form
     *
     * These options describe UI configuration for the controls that are rendered for the data and schema.  You can
     * tweak the layout and presentation aspects of the form in this section.
     *
     * Full options settings are listed here:
     * @see http://www.alpacajs.org
     *
     */
      var options = {}



     /**
     * If you'd like to define a custom layout (html) file for your form, you first define a new view.
     */
     Alpaca.registerView({
          "id": "werkplaats",
          "parent": "bootstrap-create",
          "locale": "nl_BE",
          "fields": {
           "/postcode": {
             "messages": {
               "nl_BE": {
                 "invalidPattern": "Vul een geldige postcode in."
               }
             }
           },
           "/school-postcode": {
             "messages": {
               "nl_BE": {
                 "invalidPattern": "Vul een geldige postcode in."
               }
             }
           },
           "/handtekening-verzorger-a-naam":{
             "templates": {
               "control": "/templates/control-text-signature-a.html"
             }
           },
           "/handtekening-verzorger-b-naam":{
             "templates": {
               "control": "/templates/control-text-signature-b.html"
             }
           }
          },
          "messages": {
             "nl_BE": {
                 "invalidEmail": "Vul een geldig e-mailadres in, bijv. werkplaatsbo@wpkeesboeke.nl",
                 "invalidValueOfEnum": "Kies één van de opties."
             }
          },
          "layout":{
           "template": "/templates/werkplaats-layout.html",
           "bindings": {
               "achternaam": "#kind-fields",
               "voornamen": "#kind-fields",
               "roepnaam": "kind-fields",
               "geslacht": "kind-fields",
               "geboortedatum": "kind-fields",
               "leeftijd": "kind-fields",
               "geboorteplaats": "kind-fields",
               "nationaliteit": "kind-fields",
               "bsn": "kind-fields",
               "adres": "kind-fields",
               "postcode": "kind-fields",
               "woonplaats": "kind-fields",
               "telefoonnummer": "kind-fields",
               "thuissituatie": "#verzorgers-fields",
               "gezag": "#verzorgers-fields",
               "gezag-specifiek": "#verzorgers-fields",
               "verzorger-a": "#verzorger-a-fields",
               "verzorger-b": "#verzorger-b-fields",
               "informatieochtend": "#info-fields",
               "aantal-kinderen": "#gezin-fields",
               "leeftijd-broers": "#gezin-fields",
               "leeftijd-zussen": "#gezin-fields",
               "scholen-kinderen": "#gezin-fields",
               "school-kinderen-werkplaats": "#gezin-fields",
               "school-kinderen-anders": "#gezin-fields",
               "aandacht-soc-emo": "#begeleiding-fields",
               "aandacht-soc-emo-uitleg": "#begeleiding-fields",
               "bso": "#begeleiding-fields",
               "bso-uitleg": "#begeleiding-fields",
               "aandacht-spelen-leren": "#begeleiding-fields",
               "aandacht-spelen-leren-uitleg": "#begeleiding-fields",
               "dyslexie": "#begeleiding-fields",
               "aandacht-gezichtsvermogen": "#begeleiding-fields",
               "aandacht-gezichtsvermogen-uitleg": "#begeleiding-fields",
               "onderzoeken": "#begeleiding-fields",
               "onderzoeken-uitleg": "#begeleiding-fields",
               "bijzonderheden": "#begeleiding-fields",
               "bijzonderheden-uitleg": "#begeleiding-fields",
               "jongerdan5": "#begeleiding-fields",
               "ouderdan4": "#begeleiding-fields",
               "handtekening-verzorger-a-naam": "#handtekening-verzorger-a-fields",
               "handtekening-verzorger-a": "#handtekening-verzorger-a-fields",
               "handtekening-verzorger-b-naam": "#handtekening-verzorger-b-fields",
               "handtekening-verzorger-b": "#handtekening-verzorger-b-fields"
           }
          }
      });

    /**
     * This is an optional post render callback that Alpaca will call once the form finishes rendering.  The form
     * rendering itself is asynchronous as it may load templates or other resources for use in generating the UI.
     *
     * Once the render is completed, this callback is fired and the top-level Alpaca control is handed back.
     *
     * @param control
     */
    var postRenderCallback = function(control) {
          var geboortedatum = control.childrenByPropertyId["geboortedatum"];
          var leeftijd = control.childrenByPropertyId["leeftijd"];
          geboortedatum.on("blur", function() {
              var geboren=moment(geboortedatum.getValue(), geboortedatum.options.dateFormat);
              leeftijd.setValue(moment().diff(geboren, 'years'));
          });
          var naamverzorgera = control.childrenByPropertyId["verzorger-a"].childrenByPropertyId["naam-verzorger-a"];
          var handtekeningverzorgeranaam = control.childrenByPropertyId["handtekening-verzorger-a-naam"];
          naamverzorgera.on("blur", function() {
              handtekeningverzorgeranaam.setValue(naamverzorgera.getValue());
          });
          var naamverzorgerb = control.childrenByPropertyId["verzorger-b"].childrenByPropertyId["naam-verzorger-b"];
          var handtekeningverzorgerbnaam = control.childrenByPropertyId["handtekening-verzorger-b-naam"];
          naamverzorgerb.on("blur", function() {
              handtekeningverzorgerbnaam.setValue(naamverzorgerb.getValue());
          });

          $('.js-signature-a').jqSignature();
          $('.js-signature-a').on('jq.signature.changed', function() {
              var dataUrl = $('.js-signature-a').jqSignature('getDataURL');
              var img = $('<img>').attr('src', dataUrl)
              // $('.js-signature-a').append($('<p>').text("Here's your signature:"));
              // $('.js-signature-a').append(img);
              var handtekeningverzorgera = control.childrenByPropertyId["handtekening-verzorger-a"];
              handtekeningverzorgera.setValue(dataUrl);
          });
          $('.js-signature-b').jqSignature();
          $('.js-signature-b').on('jq.signature.changed', function() {
              var dataUrl = $('.js-signature-b').jqSignature('getDataURL');
              var img = $('<img>').attr('src', dataUrl)
              // $('.js-signature-b').append($('<p>').text("Here's your signature:"));
              // $('.js-signature-b').append(img);
              var handtekeningverzorgerb = control.childrenByPropertyId["handtekening-verzorger-b"];
              handtekeningverzorgerb.setValue(dataUrl);
          });
    };

    /**
     * Render the form.
     *
     * We call alpaca() with the data, schema and options to tell Alpaca to render into the selected dom element(s).
     */
    $("#form").alpaca({
        "data": data,
        "schema": "/build/data/werkplaats-schema-min.json",
        "options": "/build/data/werkplaats-options-min.json",
        "view": "werkplaats",
        "postRender": postRenderCallback
    });
});
