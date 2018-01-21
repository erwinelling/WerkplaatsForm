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
                ],
                "required": true
            },
            "geboortedatum":{
                "type": "text",
                "format": "date",
                "default": "01/01/2015",
                "required": true
            },
            "leeftijd":{
                "type": "string",
            },
            "geboorteplaats":{
                "type": "string",
                "required": true,
            },
            "nationaliteit":{
                "type": "string",
                "required": true,
            },
            "bsn":{
                "type": "string",
                "required": true,
            },
            "adres":{
                "type": "string",
                "required": true,
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
                "required": true
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
                ],
                "required": true
            },
            "gezag-specifiek":{
                "type": "string",
                "required": true
            },
            "informatieochtend":{
                "type": "string",
                "enum": ["Ja", "Nee"],
                "required": true
            },


            "aantal-kinderen":{
                "type": "string",
                "required": true
            },
            "leeftijd-zussen":{
                "type": "string"
            },
            "leeftijd-broers":{
                "type": "string"
            },
            "scholen-kinderen":{
                "type": "string",
                "enum": ["Ja", "Nee"]
            },
            "school-kinderen-werkplaats":{
                "type": "string"
            },
            "school-kinderen-anders":{
                "type": "string"
            },

            "aandacht-soc-emo":{
                "type": "string",
                "enum": ["Ja", "Nee"],
                "required": true
            },
            "aandacht-soc-emo-uitleg":{
                "type": "string",
                "required": true
            },

            "bso":{
                "type": "string",
                "enum": ["Ja", "Nee"],
                "required": true
            },
            "bso-uitleg":{
                "type": "string",
                "required": true
            },
            "aandacht-spelen-leren":{
                "type": "string",
                "enum": ["Ja", "Nee"],
                "required": true
            },
            "aandacht-spelen-leren-uitleg":{
                "type": "string",
                "required": true
            },
            "dyslexie":{
                "type": "string",
                "enum": ["Ja", "Nee"],
                "required": true
            },
            "aandacht-gezichtsvermogen":{
                "type": "string",
                "enum": ["Ja", "Nee"],
                "required": true
            },
            "aandacht-gezichtsvermogen-uitleg":{
                "type": "string",
                "required": true
            },
            "onderzoeken":{
                "type": "string",
                "enum": ["Ja", "Nee"],
                "required": true
            },
            "onderzoeken-uitleg":{
                "type": "string",
                "required": true
            },
            "bijzonderheden":{
                "type": "string",
                "enum": ["Ja", "Nee"],
                "required": true
            },
            "bijzonderheden-uitleg":{
                "type": "string",
                "required": true
            },

            "jongerdan5":{
                "type": "object",
                "properties": {
                    "kdv":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "kdv-uitleg":{
                        "type": "string",
                        "required": true
                    },
                    "logopedie":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "gehoor":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "vve":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "aandacht-motorisch":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "aandacht-motorisch-uitleg":{
                        "type": "string",
                        "required": true
                    },
                    "zindelijk":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "zindelijk-herinnering":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "zindelijk-hulp":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "eten-hulp":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "jas-hulp":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
                    },
                    "schoenen-hulp":{
                        "type": "string",
                        "enum": ["Ja", "Nee"],
                        "required": true
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
                        "type": "string",
                        "required": true
                    },
                    "school-adres":{
                        "type": "string",
                        "required": true
                    },
                    "school-postcode":{
                        "type": "string",
                        "maxLength": 6,
                        "minLength": 6,
                        "pattern": "^[1-9][0-9]{3}[A-Za-z]{2}$",
                        "required": true
                    },
                    "school-plaats":{
                        "type": "string",
                        "required": true
                    },
                    "school-tel":{
                        "type": "string",
                        "required": true
                    },
                    "school-dir":{
                        "type": "string",
                        "required": true
                    },
                    "reden-aanmelding":{
                        "type": "string",
                        "required": true
                    },
                },
                "dependencies": {
                },
            },
            "handtekening-verzorger-a-naam":{
                "type": "string"
            },
            "handtekening-verzorger-a":{
                "type": "string",
                "required": true
            },
            "handtekening-verzorger-b-naam":{
                "type": "string"
            },
            "handtekening-verzorger-b":{
                "type": "string",
                "required": true
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
            "verzorger-a": ["thuissituatie"],
            "verzorger-b": ["thuissituatie"],
            "handtekening-verzorger-b-naam": ["thuissituatie"],
            "handtekening-verzorger-b": ["thuissituatie"],
            "school-kinderen-werkplaats": ["scholen-kinderen"],
            "school-kinderen-anders": ["scholen-kinderen"],
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
                "hideNone": true,
                "sort": false,
                "vertical": false,
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
            "bsn":{
                "label": "BSN"
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
                "optionLabels": ["Twee ouders", "Eenoudergezin", "Co-ouderschap"],
                "hideNone": true,
                "sort": false,
                "vertical": false,
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
                "dependencies": {
                  "thuissituatie": ["samen", "co", "een"]
                }
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
                 "optionLabels": ["Beide ouders", "Één ouder", "Anders"],
                 "hideNone": true,
                 "sort": false,
                 "vertical": false,
            },
            "gezag-specifiek":{
                "label": "Namelijk:",
                "dependencies": {
                  "gezag": ["anders", "1"],
                }
            },
            "informatieochtend":{
                "label": "Is deze ochtend door u bezocht?",
                "hideNone": true,
                "sort": false,
                "vertical": false,
            },
            "aantal-kinderen":{
                "label": "Uit hoeveel kinderen bestaat uw gezin?",
                "type": "integer",
            },
            "leeftijd-zussen":{
                "label": "Leeftijd(en) zus(sen):",
            },
            "leeftijd-broers":{
                "label": "Leeftijd(en) broer(s)",
            },
            "scholen-kinderen":{
                "label": "Bezoeken meerdere kinderen uit het gezin de Werkplaats?",
                "hideNone": true,
                "sort": false,
                "vertical": false,
            },
            "school-kinderen-werkplaats":{
                "label": "Welke klassen?",
                "dependencies": {
                  "scholen-kinderen": ["ja"]
                }
            },
            "school-kinderen-anders":{
                "label": "Welke andere scholen?",
                "dependencies": {
                  "scholen-kinderen": ["nee"]
                }
            },
            "aandacht-soc-emo":{
                "label": "Is speciale aandacht nodig voor de sociaal emotionele ontwikkeling op de basisschool?",
                "hideNone": true,
                "sort": false,
                "vertical": false,
            },
            "aandacht-soc-emo-uitleg":{
                "label": "Welk gedrag kan de medewerker verwachten van uw kind en welke adviezen/tips heeft u voor de medewerker om met het betreffende gedrag goed om te gaan?",
                "type": "textarea",
                "dependencies": {
                  "aandacht-soc-emo": "ja"
                }
            },

            "bso":{
                "label": "Gaat uw kind gebruik maken van BSO (buitenschoolse opvang)?",
                "hideNone": true,
                "sort": false,
                "vertical": false,
            },
            "bso-uitleg":{
                "label": "Bij welke BSO?",
                "type": "textarea",
                "dependencies": {
                    "bso": "ja"
                }
            },

            "aandacht-spelen-leren":{
                "label": "Is er speciale aandacht nodig voor spelen/leren op de basisschool?",
                "hideNone": true,
                "sort": false,
                "vertical": false,
            },
            "aandacht-spelen-leren-uitleg":{
                "label": "Welk gedrag kan de medewerker verwachten van uw kind en welke adviezen/tips heeft u voor de medewerker om hiermee goed om te gaan?",
                "type": "textarea",
                "dependencies": {
                  "aandacht-spelen-leren": "ja"
                }
            },
            "dyslexie":{
                "label": "Is er sprake van dyslexie in de familie?",
                "hideNone": true,
                "sort": false,
                "vertical": false,
            },
            "aandacht-gezichtsvermogen":{
                "label": "Zijn er bijzonderheden bij uw kind, denk daarbij aan gezichtsvermogen, ziekten, allergieën, medicijngebruik e.d.?",
                "hideNone": true,
                "sort": false,
                "vertical": false,
            },
            "aandacht-gezichtsvermogen-uitleg":{
                "label": "Welke?",
                "type": "textarea",
                "dependencies": {
                  "aandacht-gezichtsvermogen": "ja"
                }
            },
            "onderzoeken":{
                "label": "Hebben er onderzoeken plaatsgevonden die voor ons als school relevant zijn?",
                "hideNone": true,
                "sort": false,
                "vertical": false,
            },
            "onderzoeken-uitleg":{
                "label": "Zo ja welke en waarom?",
                "type": "textarea",
                "dependencies": {
                  "onderzoeken": "ja"
                }
            },
            "bijzonderheden":{
                "label": "Zijn er bijzondere gebeurtenissen geweest, denk daarbij aan ongevallen, scheiding of overlijden.",
                "hideNone": true,
                "sort": false,
                "vertical": false,
            },
            "bijzonderheden-uitleg":{
                "label": "Welke?",
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
                        "label": "Heeft uw kind gebruik gemaakt van een kinderdagverblijf/peuterspeelzaal?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "kdv-uitleg":{
                        "label": "Bij welk kinderdagverblijf/peuterspeelzaal?",
                        "dependencies": {
                          "kdv": "ja"
                        }
                    },
                    "logopedie":{
                        "label": "Krijgt uw kind logopedie?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "gehoor":{
                        "label": "Zijn er bij uw kind buisjes geplaatst of zijn er gehoorproblemen?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "vve":{
                        "label": "Heeft uw kind deelgenomen aan een voorschools educatie-programma (VVE) en /of taalstimuleringsprogramma?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "aandacht-motorisch":{
                        "label": "Is speciale aandacht nodig voor de motorische ontwikkeling op de basisschool?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "aandacht-motorisch-uitleg":{
                        "label": "Welke bijzonderheden in de ontwikkeling waren/zijn er en welke adviezen heeft u voor de medewerker?",
                        "type": "textarea",
                        "dependencies": {
                          "aandacht-motorisch": "ja"
                        }
                    },
                    "zindelijk":{
                        "label": "Is uw kind zindelijk?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "zindelijk-herinnering":{
                        "label": "Is uw kind zindelijk maar moet nog wel herinnerd worden om naar de wc te gaan?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "zindelijk-hulp":{
                        "label": "Is uw kind zindelijk, maar heeft nog hulp nodig op de wc?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "eten-hulp":{
                        "label": "Heeft uw kind hulp nodig bij eten en drinken?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "jas-hulp":{
                        "label": "Kan uw kind zelf zijn/haar jas aan- en uitdoen?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
                    },
                    "schoenen-hulp":{
                        "label": "Kan uw kind zelf schoenen aan- en uitdoen?",
                        "hideNone": true,
                        "sort": false,
                        "vertical": false,
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
                        "label": "Adres",
                    },
                    "school-postcode":{
                        "label": "Postcode",
                        "disallowEmptySpaces": true,
                    },
                    "school-plaats":{
                        "label": "Plaats",
                    },
                    "school-tel":{
                        "label": "Telefoonnummer",
                    },
                    "school-dir":{
                        "label": "Naam directeur",
                    },
                    "reden-aanmelding":{
                        "label": "Reden van aanmelding op de Werkplaats",
                        "type": "textarea",
                    },
                },
                "dependencies": {
                    "leeftijd": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
                }
            },

            "handtekening-verzorger-a-naam":{
                "label": "Naam verzorger A",
                // "view": "bootstrap-display",
            },
            "handtekening-verzorger-a":{
                "label": "Handtekening verzorger A",
                "disabled": true,
            },
            "handtekening-verzorger-b-naam":{
                "label": "Naam verzorger B",
                "dependencies": {
                  "thuissituatie": ["samen", "co"]
                },
                // "view": "bootstrap-display",
            },
            "handtekening-verzorger-b":{
                "label": "Handtekening verzorger B",
                "disabled": true,
                "dependencies": {
                  "thuissituatie": ["samen", "co"]
                }
            },
        },
        "form": {
            "attributes": {
                "method": "POST",
                "action": "./receiver.php",
                "enctype": "multipart/form-data"
            },
            "buttons": {
                "submit": {
                    "value": "Verstuur"
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
                  "verzorger-a": "#verzorgers-fields",
                  "verzorger-b": "#verzorgers-fields",
                  "gezag": "#verzorgers-fields",
                  "gezag-specifiek": "#verzorgers-fields",
                  "informatieochtend": "#info-fields",
                  "aantal-kinderen": "#gezin-fields",
                  "leeftijd-broers": "#gezin-fields",
                  "leeftijd-zussen": "#gezin-fields",
                  "scholen-kinderen": "#gezin-fields",
                  "school-kinderen-werkplaats": "#gezin-fields",
                  "school-kinderen-anders": "#gezin-fields",
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
                  "handtekening-verzorger-a-naam": "#handtekening-fields",
                  "handtekening-verzorger-a": "#handtekening-fields",
                  "handtekening-verzorger-b-naam": "#handtekening-fields",
                  "handtekening-verzorger-b": "#handtekening-fields",
              },
            },
        },
    });
});
