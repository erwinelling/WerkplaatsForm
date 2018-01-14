$(document).ready(function() {

//	Alpaca.logLevel = Alpaca.DEBUG;

    /**
     * Initial data
     *
     * Fill in the JSON data that should be populated into the form.  This can be any JSON data that you'd like
     * provided that it fits the schema and options (if you provide those).
     *
     */
    var data = {
        "name": "Inigo Montoya",
        "age": 29,
        "phone": "414-111-2222",
        "country": "usa"
    };

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
    var schema = {
        "type": "object",
        "properties": {
            "achternaam":{
                "type": "string",
                "required": true
            },
            "voornamen":{
                "type": "string",
                "required": true
            },
            "roepnaam":{
                "type": "string",
                "required": true
            },
            "geslacht":{
                "type": "string",
                "enum":[
                    "Jongen",
                    "Meisje"
                ]
            },
            "geboortedatum":{
                "type": "text",
                "format": "date",
                "required": true,
                "default": "01/01/2015"
            },
            "leeftijdscategorie":{
                "type": "string",
                "enum":[
                  "jonger dan 4",
                  "4 of ouder",
                ]
            },
            "geboorteplaats":{
                "type": "string",
                "required": true
            },
            "nationaliteit":{
                "type": "string",
                "required": true
            },
            "adres":{
                "type": "string",
                "required": true
            },
            "postcode":{
                "type": "string",
                "required": true
            },
            "woonplaats":{
                "type": "string",
                "required": true
            },
            "telefoonnummer":{
                "type": "string",
                "required": true
            },
            "naam-verzorger-a":{
                "type": "string",
                "required": true
            },
            "mobiele-telefoonnummer-verzorger-a":{
                "type": "string",
                "required": true
            },
            "email-verzorger-a":{
                "type": "string",
                "required": true
            },
            "beroep-verzorger-a":{
                "type": "string",
                "required": true
            },
            "naam-verzorger-b":{
                "type": "string",
                "required": true
            },
            "mobiele-telefoonnummer-verzorger-b":{
                "type": "string",
                "required": true
            },
            "email-verzorger-b":{
                "type": "string",
                "required": true
            },
            "beroep-verzorger-b":{
                "type": "string",
                "required": true
            },
            "thuissituatie":{
                "type": "string",
                "enum":[
                    "Samenwonend",
                    "Een ouder gezin",
                    "Co-ouderschap"
                ]
            },
            "gezag":{
                "type": "string",
                "enum":[
                    "Beide ouders",
                    "Een ouder",
                    "Anders"
                ]
            },
            "gezag-specifiek":{
                "type": "string",
                "enum":[
                    "Beide ouders",
                    "Een ouder",
                    "Anders"
                ]
            },
            "informatieochtend":{
                "type": "string"
            },


            "aantal-kinderen":{
                "type": "string"
            },
            "leeftijd-kinderen":{
                "type": "string"
            },
            "scholen-kinderen":{
                "type": "string"
            },


            "aandacht-soc-emo":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "aandacht-soc-emo-uitleg":{
                "type": "string"
            },
            "ouderdan3":{
                "type": "object",
                "properties": {
                    "bso":{
                        "type": "string",
                        "enum": ["ja", "nee"]
                    },
                    "bso-uitleg":{
                        "type": "string"
                    }
                },
                "dependencies": {
                    "bso-uitleg": ["bso"],
                },
            },
            "aandacht-spelen-leren":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "aandacht-spelen-leren-uitleg":{
                "type": "string"
            },
            "dyslexie":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "aandacht-gezichtsvermogen":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "aandacht-gezichtsvermogen-uitleg":{
                "type": "string"
            },
            "onderzoeken":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "onderzoeken-uitleg":{
                "type": "string"
            },
            "bijzonderheden":{
              "type": "string",
              "enum": ["ja", "nee"]
            },
            "bijzonderheden-uitleg":{
                "type": "string"
            },

            "kdv":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "kdv-uitleg":{
                "type": "string"
            },
            "logopedie":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "gehoor":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "vve":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "aandacht-motorisch":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "aandacht-motorisch-uitleg":{
                "type": "string"
            },
            "zindelijk":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "zindelijk-herinnering":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "zindelijk-hulp":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "eten-hulp":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "jas-hulp":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "schoenen-hulp":{
                "type": "string",
                "enum": ["ja", "nee"]
            },



            "school-laatst-bezocht":{
                "type": "string"
            },
            "school-adres":{
                "type": "string"
            },
            "school-postcode":{
                "type": "string"
            },
            "school-plaats":{
                "type": "string"
            },
            "school-tel":{
                "type": "string"
            },
            "school-dir":{
                "type": "string"
            },
            "reden-aanmelding":{
                "type": "string"
            },


            "handtekening-verzorger-a":{
                "type": "string"
            },
            "handtekening-verzorger-b":{
                "type": "string"
            },
        },
        "dependencies": {
            "ouderdan3": ["geboortedatum"],
            "aandacht-soc-emo-uitleg": ["aandacht-soc-emo"],
            "aandacht-spelen-leren-uitleg": ["aandacht-spelen-leren"],
            "aandacht-gezichtsvermogen-uitleg": ["aandacht-gezichtsvermogen"],
            "onderzoeken-uitleg": ["onderzoeken"],
            "bijzonderheden-uitleg": ["bijzonderheden"],
            "kdv-uitleg": ["kdv"],
            "aandacht-motorisch-uitleg": ["aandacht-motorisch"]
        },
    };

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
    var options = {
        "fields": {
            "achternaam":{
                "label": "Achternaam"
            },
            "voornamen":{
                "label": "Voornamen"
            },
            "roepnaam":{
                "label": "Roepnaam"
            },
            "geslacht":{
                "label": "Geslacht",
                "removeDefaultNone": true
            },
            "geboortedatum":{
                "label": "Geboortedatum",
                "dateFormat": "DD/MM/YYYY",
            },
            "leeftijdscategorie":{
              "label": "Leeftijdscategorie",
              "removeDefaultNone": true
            },
            "geboorteplaats":{
                "label": "Geboorteplaats"
            },
            "nationaliteit":{
                "label": "Nationaliteit"
            },
            "adres":{
                "label": "Adres",
                "type": "text"
            },
            "postcode":{
                "label": "Postcode",
                "type": "text"
            },
            "woonplaats":{
                "label": "Woonplaats",
                "type": "text"
            },
            "telefoonnummer":{
                "label": "Telefoonnummer",
                "type": "text"
            },
            "naam-verzorger-a":{
                "label": "Naam",
                "type": "text"
            },
            "mobiele-telefoonnummer-verzorger-a":{
                "label": "Mobiele telefoonnummer",
                "type": "text"
            },
            "email-verzorger-a":{
                "label": "E-mailadres",
                "type": "text"
            },
            "beroep-verzorger-a":{
                "label": "Beroep",
                "type": "text"
            },
            "naam-verzorger-b":{
                "label": "Naam",
                "type": "text"
            },
            "mobiele-telefoonnummer-verzorger-b":{
                "label": "Mobiele telefoonnummer",
                "type": "text"
            },
            "email-verzorger-b":{
                "label": "E-mailadres",
                "type": "text"
            },
            "beroep-verzorger-b":{
                "label": "Beroep",
                "type": "text"
            },
            "thuissituatie":{
                "label": "Thuissituatie",
                "removeDefaultNone": true
            },
            "gezag":{
                "label": "Bij wie ligt het gezag?",
                "removeDefaultNone": true
            },
            "gezag-specifiek":{
                "label": "Namelijk:",
                "type": "text"
            },
            "informatieochtend":{
                "label": "Informatieochtend",
                "type": "text"
            },
            "aantal-kinderen":{
                "label": "Uit hoeveel kinderen bestaat uw gezin?",
                "type": "text"
            },
            "leeftijd-kinderen":{
                "label": "Leeftijd kinderen in uw gezin?",
                "type": "text"
            },
            "scholen-kinderen":{
                "label": "Scholen kinderen in uw gezin?",
                "type": "text"
            },
            "aandacht-soc-emo":{
                "label": "Speciale aandacht soc-emo?",
                "removeDefaultNone": true
            },
            "aandacht-soc-emo-uitleg":{
                "label": "Uitleg",
                "type": "text",
                "dependencies": {
                  "aandacht-soc-emo": "ja"
                }
            },
            "ouderdan3":{
                "label": "Ouder dan 3?",
                "fields": {
                    "bso":{
                        "label": "BSO?",
                        "removeDefaultNone": true
                    },
                    "bso-uitleg":{
                        "label": "Uitleg",
                        "type": "text",
                        "dependencies": {
                            "bso": "ja"
                        }
                    }
                },
                "dependencies": {
                    "aandacht-soc-emo": "ja"
                }
            },
            "aandacht-spelen-leren":{
                "label": "Speciale aandacht spelen leren?",
                "removeDefaultNone": true
            },
            "aandacht-spelen-leren-uitleg":{
                "label": "Uitleg",
                "type": "text",
                "dependencies": {
                  "aandacht-spelen-leren": "ja"
                }
            },
            "dyslexie":{
                "label": "Dyslexie?",
                "removeDefaultNone": true
            },
            "aandacht-gezichtsvermogen":{
                "label": "Gezichtsvermogen?",
                "removeDefaultNone": true
            },
            "aandacht-gezichtsvermogen-uitleg":{
                "label": "Uitleg",
                "type": "text",
                "dependencies": {
                  "aandacht-gezichtsvermogen": "ja"
                }
            },
            "onderzoeken":{
                "label": "Onderzoeken?",
                "removeDefaultNone": true
            },
            "onderzoeken-uitleg":{
                "label": "Uitleg",
                "type": "text",
                "dependencies": {
                  "onderzoeken": "ja"
                }
            },
            "bijzonderheden":{
                "label": "Bijzonderheden?",
                "removeDefaultNone": true
            },
            "bijzonderheden-uitleg":{
                "label": "Uitleg",
                "type": "text",
                "dependencies": {
                  "bijzonderheden": "ja"
                }
            },
            // "bso":{
            //     "label": "BSO?",
            //     "removeDefaultNone": true
            // },
            "kdv":{
                "label": "KDV?",
                "removeDefaultNone": true
            },
            "kdv-uitleg":{
                "label": "Uitleg",
                "type": "text",
                "dependencies": {
                  "kdv": "ja"
                }
            },
            "logopedie":{
                "label": "Logopedie?",
                "removeDefaultNone": true
            },
            "gehoor":{
                "label": "Gehoor?",
                "removeDefaultNone": true
            },
            "vve":{
                "label": "VVE?",
                "removeDefaultNone": true
            },
            "aandacht-motorisch":{
                "label": "Aandahct motorisch?",
                "removeDefaultNone": true
            },
            "aandacht-motorisch-uitleg":{
                "label": "Uitleg",
                "type": "text",
                "dependencies": {
                  "aandacht-motorisch": "ja"
                }
            },
            "zindelijk":{
                "label": "Zindelijk?",
                "removeDefaultNone": true
            },
            "zindelijk-herinnering":{
                "label": "Zindelijk herinnering?",
                "removeDefaultNone": true
            },
            "zindelijk-hulp":{
                "label": "Zindelijk hulp?",
                "removeDefaultNone": true
            },
            "eten-hulp":{
                "label": "Eten hulp?",
                "removeDefaultNone": true
            },
            "jas-hulp":{
                "label": "Jas hulp?",
                "removeDefaultNone": true
            },
            "schoenen-hulp":{
                "label": "Schoenen hulp?",
                "removeDefaultNone": true
            },



            "school-laatst-bezocht":{
                "label": "Laatst bezochte school?",
                "type": "text"
            },
            "school-adres":{
                "label": "Adres?",
                "type": "text"
            },
            "school-postcode":{
                "label": "PC",
                "type": "text"
            },
            "school-plaats":{
                "label": "Plaats?",
                "type": "text"
            },
            "school-tel":{
                "label": "Tel?",
                "type": "text"
            },
            "school-dir":{
                "label": "Naam directeur?",
                "type": "text"
            },
            "reden-aanmelding":{
                "label": "Reden aanmelding?",
                "type": "text"
            },


            "handtekening-verzorger-a":{
                "label": "Handtekening a",
                "type": "text"
            },
            "handtekening-verzorger-b":{
                "label": "Handtekening b",
                "type": "text"
            },
        },
        "form": {
            "attributes": {
                "method": "POST",
                "action": "http://httpbin.org/post",
                "enctype": "multipart/form-data"
            },
            "buttons": {
                "submit": {
                    "value": "Submit the Form"
                }
            }
        }
    };

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
          var leeftijdscategorie = control.childrenByPropertyId["leeftijdscategorie"];
          geboortedatum.on("blur", function() {
              var geboren=moment(geboortedatum.getValue(), geboortedatum.options.dateFormat)
              console.log(geboren)
              var leeftijd=moment().diff(geboren, 'years');
              console.log(leeftijd)
              if (leeftijd >= 4) {
                leeftijdscategorie.setValue(leeftijdscategorie.schema.enum[0])
                console.log(leeftijdscategorie.schema.enum[0])
              } else {
                leeftijdscategorie.setValue(leeftijdscategorie.schema.enum[1])
                console.log(leeftijdscategorie.schema.enum[1])
              };
          });
    };

    /**
     * Render the form.
     *
     * We call alpaca() with the data, schema and options to tell Alpaca to render into the selected dom element(s).
     */
    $("#form").alpaca({
        "data": data,
        "schema": schema,
        "options": options,
        "postRender": postRenderCallback,
        //"view": "bootstrap-edit"//,
        "view": {"parent":"bootstrap-create", "locale": "nl_BE"}
    });
});
