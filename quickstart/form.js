$(document).ready(function() {

	  // Alpaca.logLevel = Alpaca.DEBUG;

    /**
     * Initial data
     *
     * Fill in the JSON data that should be populated into the form.  This can be any JSON data that you'd like
     * provided that it fits the schema and options (if you provide those).
     *
     */
    var data = {
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
            "leeftijd":{
                "type": "string",
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
                "required": true,
                "maxLength": 6,
                "minLength": 6,
                "pattern": "^[1-9][0-9]{3}[A-Za-z]{2}$",
            },
            "woonplaats":{
                "type": "string",
                "required": true
            },
            "telefoonnummer":{
                "type": "string",
                "required": true
            },
            "thuissituatie":{
                "type": "string",
                "enum":[
                    "samen",
                    "een",
                    "co"
                ],
                "default": "samen"
            },
            "verzorger-a":{
                "type": "object",
                "properties": {
                    "naam-verzorger-a":{
                        "type": "string",
                        "required": true
                    },
                    "mobiele-telefoonnummer-verzorger-a":{
                        "type": "string",
                        "required": true
                    },
                    "email-verzorger-a":{
                        "format": "email",
                        "required": true
                    },
                    "beroep-verzorger-a":{
                        "type": "string",
                        "required": true
                    },
                },
            },
            "verzorger-b": {
                "type": "object",
                "properties": {
                    "naam-verzorger-b":{
                        "type": "string",
                        "required": true
                    },
                    "mobiele-telefoonnummer-verzorger-b":{
                        "type": "string",
                        "required": true
                    },
                    "email-verzorger-b":{
                        "format": "email",
                        "required": true
                    },
                    "beroep-verzorger-b":{
                        "type": "string",
                        "required": true
                    },
                },
            },
            "gezag":{
                "type": "string",
                "enum":[
                    "2",
                    "1",
                    "anders"
                ]
            },
            "gezag-specifiek":{
                "type": "string",
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

            "bso":{
                "type": "string",
                "enum": ["ja", "nee"]
            },
            "bso-uitleg":{
                "type": "string"
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

            "jongerdan5":{
                "type": "object",
                "properties": {
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
                },
                "dependencies": {
                    "kdv-uitleg": ["kdv"],
                    "aandacht-motorisch-uitleg": ["aandacht-motorisch"]
                },
            },

            "ouderdan4":{
                "type": "object",
                "properties": {
                    "school-laatst-bezocht":{
                        "type": "string"
                    },
                    "school-adres":{
                        "type": "string"
                    },
                    "school-postcode":{
                        "type": "string",
                        "maxLength": 6,
                        "minLength": 6,
                        "pattern": "^[1-9][0-9]{3}[A-Za-z]{2}$",
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
                },
                "dependencies": {
                },
            },

            "handtekening-verzorger-a":{
                "type": "string"
            },
            "handtekening-verzorger-b":{
                "type": "string"
            },
        },
        "dependencies": {
            "bso-uitleg": ["bso"],
            "jongerdan5": ["leeftijd"],
            "ouderdan4": ["leeftijd"],
            "gezag-specifiek": ["gezag"],
            "aandacht-soc-emo-uitleg": ["aandacht-soc-emo"],
            "aandacht-spelen-leren-uitleg": ["aandacht-spelen-leren"],
            "aandacht-gezichtsvermogen-uitleg": ["aandacht-gezichtsvermogen"],
            "onderzoeken-uitleg": ["onderzoeken"],
            "bijzonderheden-uitleg": ["bijzonderheden"],
            "verzorger-b": ["thuissituatie"],
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
                "removeDefaultNone": true,
            },
            "geboortedatum":{
                "label": "Geboortedatum",
                "dateFormat": "DD/MM/YYYY",
            },
            "leeftijd":{
              "label": "Leeftijd",
              "disabled": true,
              "type": "integer",
              // "type": "hidden",
            },
            "geboorteplaats":{
                "label": "Geboorteplaats"
            },
            "nationaliteit":{
                "label": "Nationaliteit"
            },
            "adres":{
                "label": "Adres",
            },
            "postcode":{
                "label": "Postcode",
                "disallowEmptySpaces": true,
            },
            "woonplaats":{
                "label": "Woonplaats",
            },
            "telefoonnummer":{
                "label": "Telefoonnummer",
            },
            "thuissituatie":{
                "label": "Thuissituatie",
                "removeDefaultNone": true,
                "sort": false,
            },
            "verzorger-a":{
                "label": "Verzorger A",
                "fields": {
                    "naam-verzorger-a":{
                        "label": "Naam",
                    },
                    "mobiele-telefoonnummer-verzorger-a":{
                        "label": "Mobiele telefoonnummer",
                    },
                    "email-verzorger-a":{
                        "label": "E-mailadres",
                    },
                    "beroep-verzorger-a":{
                        "label": "Beroep",
                    },
                },
            },
            "verzorger-b":{
                "label": "Verzorger B",
                "fields": {
                    "naam-verzorger-b":{
                        "label": "Naam",
                    },
                    "mobiele-telefoonnummer-verzorger-b":{
                        "label": "Mobiele telefoonnummer",
                    },
                    "email-verzorger-b":{
                        "label": "E-mailadres",
                    },
                    "beroep-verzorger-b":{
                        "label": "Beroep",
                    },
                },
                "dependencies": {
                  "thuissituatie": ["samen", "co"]
                }
            },
            "gezag":{
                "label": "Bij wie ligt het gezag?",
                 "optionLabels": ["Beide ouders", "1 ouder, namelijk", "Anders, namelijk"],
                "removeDefaultNone": true,
                "sort": false,
            },
            "gezag-specifiek":{
                "label": "Namelijk:",
                "dependencies": {
                  "gezag": ["anders", "1"],
                }
            },
            "informatieochtend":{
                "label": "Informatieochtend",
            },
            "aantal-kinderen":{
                "label": "Uit hoeveel kinderen bestaat uw gezin?",
                "type": "integer",
            },
            "leeftijd-kinderen":{
                "label": "Leeftijd kinderen in uw gezin?",
            },
            "scholen-kinderen":{
                "label": "Scholen kinderen in uw gezin?",
                "type": "textarea",
            },
            "aandacht-soc-emo":{
                "label": "Speciale aandacht soc-emo?",
                "removeDefaultNone": true
            },
            "aandacht-soc-emo-uitleg":{
                "label": "Uitleg",
                "type": "textarea",
                "dependencies": {
                  "aandacht-soc-emo": "ja"
                }
            },

            "bso":{
                "label": "BSO?",
                "removeDefaultNone": true
            },
            "bso-uitleg":{
                "label": "Uitleg",
                "type": "textarea",
                "dependencies": {
                    "bso": "ja"
                }
            },

            "aandacht-spelen-leren":{
                "label": "Speciale aandacht spelen leren?",
                "removeDefaultNone": true
            },
            "aandacht-spelen-leren-uitleg":{
                "label": "Uitleg",
                "type": "textarea",
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
                "type": "textarea",
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
                "type": "textarea",
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
                "type": "textarea",
                "dependencies": {
                  "bijzonderheden": "ja"
                }
            },
            // "bso":{
            //     "label": "BSO?",
            //     "removeDefaultNone": true
            // },
            "jongerdan5":{
                "label": "De volgende vragen zijn voor de kinderen tot 5 jaar",
                "fields": {
                    "kdv":{
                        "label": "KDV?",
                        "removeDefaultNone": true
                    },
                    "kdv-uitleg":{
                        "label": "Uitleg",
                        "type": "textarea",
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
                        "label": "Aandacht motorisch?",
                        "removeDefaultNone": true
                    },
                    "aandacht-motorisch-uitleg":{
                        "label": "Uitleg",
                        "type": "textarea",
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
                },
                "dependencies": {
                  "leeftijd": ["0", "1", "2", "3", "4"],
                    // "leeftijd": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
                }
            },

            "ouderdan4":{
                "label": "Indien uw kund ouder is dan 4 jaar dan graag onderstaande gegevens invullen",
                "fields": {
                    "school-laatst-bezocht":{
                        "label": "Laatst bezochte school?",
                    },
                    "school-adres":{
                        "label": "Adres?",
                    },
                    "school-postcode":{
                        "label": "PC",
                        "disallowEmptySpaces": true,
                    },
                    "school-plaats":{
                        "label": "Plaats?",
                    },
                    "school-tel":{
                        "label": "Tel?",
                    },
                    "school-dir":{
                        "label": "Naam directeur?",
                    },
                    "reden-aanmelding":{
                        "label": "Reden aanmelding?",
                        "type": "textarea",
                    },
                },
                "dependencies": {
                    "leeftijd": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
                }
            },

            "handtekening-verzorger-a":{
                "label": "Handtekening a",
            },
            "handtekening-verzorger-b":{
                "label": "Handtekening b",
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
              var geboren=moment(geboortedatum.getValue(), geboortedatum.options.dateFormat)
              leeftijd.setValue(moment().diff(geboren, 'years'))
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
              "template": 'http://localhost/~erwinelling/Werkplaats/WerkplaatsForm/quickstart/werkplaats-layout.html',
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
                  "adres": "kind-fields",
                  "postcode": "kind-fields",
                  "woonplaats": "kind-fields",
                  "telefoonnummer": "kind-fields",
                  "thuissituatie": "#verzorgers-fields",
                  "verzorger-a": "#verzorgers-fields",
                  "verzorger-b": "#verzorgers-fields",
                  "gezag": "#verzorgers-fields",
                  "gezag-specifiek": "#verzorgers-fields",
                  "informatieochtend": "#info-fields",
                  "aantal-kinderen": "#gezin-fields",
                  "leeftijd-kinderen": "#gezin-fields",
                  "scholen-kinderen": "#gezin-fields",
                  "aandacht-soc-emo": "begeleiding-fields",
                  "aandacht-soc-emo-uitleg": "begeleiding-fields",
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
                  "handtekening-verzorger-a": "#handtekening-fields",
                  "handtekening-verzorger-b": "#handtekening-fields",
              },
            },
        },
    });
});
