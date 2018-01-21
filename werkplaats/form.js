$(document).ready(function() {

	  // Alpaca.logLevel = Alpaca.DEBUG;

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
     // Alpaca.registerView({
     //     "id": "werkplaats",
     //     "parent": "bootstrap-create",
     //     "title": "Werkplaats Create View for the Web",
     //     "locale": "nl_BE",
     //     "messages": {
     //         "nl_BE": {
     //             "invalidEmail": "Vul een geldig e-mailadres in, bijv. werkplaatsbo@wpkeesboeke.nl",
     //         },
     //     },
     //     "layout": {
     //       "template": 'werkplaats-layout.html',
     //       "bindings": {
     //         "achternaam": "kind-fields",
     //       },
     //     },
     // });

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
        "schema": "./data/werkplaats-schema.json",
        "options": "./data/werkplaats-options.json",
        "postRender": postRenderCallback,
        "view": {
           "parent": "bootstrap-create",
           "locale": "nl_BE",
            "fields": {
              "/postcode": {
                "messages": {
                  "nl_BE": {
                    "invalidPattern": "Vul een geldige postcode in."
                  },
                },
              },
              "/school-postcode": {
                "messages": {
                  "nl_BE": {
                    "invalidPattern": "Vul een geldige postcode in."
                  },
                },
              },
            },
            "messages": {
                "nl_BE": {
                    "invalidEmail": "Vul een geldig e-mailadres in, bijv. werkplaatsbo@wpkeesboeke.nl",
                },
            },
            "layout":{
              "template": './werkplaats-layout.html',
              "bindings": {
                // #kind-fields
                // #verzorgers-fields
                // #info-fields
                // #verzorgers-fields
                // #begeleiding-fields
                // #gezin-fields
                // #handtekening-fields
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
                  "handtekening-verzorger-a-naam": "#handtekening-fields",
                  "handtekening-verzorger-a": "#handtekening-fields",
                  "handtekening-verzorger-b-naam": "#handtekening-fields",
                  "handtekening-verzorger-b": "#handtekening-fields",
                  "handtekening-verzorger-b": "#handtekening-fields",
              },
            },
        },
    });
});
