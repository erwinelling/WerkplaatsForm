// @codekit-prepend "../../bower_components/jquery/dist/jquery.js", "../../bower_components/moment/min/moment.min.js", "../../bower_components/bootstrap/dist/js/bootstrap.js", "../../bower_components/handlebars/handlebars.js", "../../bower_components/alpaca/dist/alpaca/bootstrap/alpaca.js", "../../bower_components/jq-signature/jq-signature.js", "../../bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"
$(document).ready(function() {

    // HTML template voor het formulier
    var werkplaatslayouttemplate = '<div class="registration"> \
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
        <div id="alert" class="" role="alert"></div> \
    </div> \
    '

    // HTML template voor de eerste handtekening
    var handtekeninglayouta = '<script type="text/x-handlebars-template"> \
        <div> \
          {{#if options.label}} \
            <label class="{{#if options.labelClass}}{{options.labelClass}}{{/if}} alpaca-control-label" for="{{id}}">{{{options.label}}}</label> \
            {{/if}} \
             {{#control}}{{/control}} \
            {{#if options.helpers}} \
            {{#each options.helpers}} \
            <p class="{{#if options.helperClass}}{{options.helperClass}}{{/if}}"> \
                <i class="info-sign"></i> \
                {{{.}}} \
            </p> \
            {{/each}} \
            {{/if}} \
            <label>Handtekening</label> \
            <div class="js-signature-a"></div> \
        </div> \
    </script> \
    '

    // HTML template voor de tweede handtekening
    var handtekeninglayoutb = '<script type="text/x-handlebars-template"> \
        <div> \
          {{#if options.label}} \
            <label class="{{#if options.labelClass}}{{options.labelClass}}{{/if}} alpaca-control-label" for="{{id}}">{{{options.label}}}</label> \
            {{/if}} \
             {{#control}}{{/control}} \
            {{#if options.helpers}} \
            {{#each options.helpers}} \
            <p class="{{#if options.helperClass}}{{options.helperClass}}{{/if}}"> \
                <i class="info-sign"></i> \
                {{{.}}} \
            </p> \
            {{/each}} \
            {{/if}} \
            <label>Handtekening</label> \
            <div class="js-signature-b"></div> \
        </div> \
    </script> \
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
                "type": "string"
            },
            "geboorteplaats":{
                "type": "string",
                "required": true
            },
            "nationaliteit":{
                "type": "string",
                "required": true
            },
            "bsn":{
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
                "pattern": "^[1-9][0-9]{3}[A-Za-z]{2}$"
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
                    }
                }
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
                    }
                }
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
                    }
                },
                "dependencies": {
                    "kdv-uitleg": ["kdv"],
                    "aandacht-motorisch-uitleg": ["aandacht-motorisch"]
                }
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
                    }
                },
                "dependencies": {
                }
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
            }
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
            "school-kinderen-anders": ["scholen-kinderen"]
        }
    }


    /**
     * Layout options for the form
     *
     * These options describe UI configuration for the controls that are rendered for the data and schema.  You can
     * tweak the layout and presentation aspects of the form in this section.
     *
     * Full options settings are listed here:
     * @see http://www.alpacajs.org
     *
     *
     * Kopieer deze opties naar data/werkplaats-options.json voor een net opgemaakte PDF.
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
                  "vertical": true
              },
              "geboortedatum":{
                  "label": "Geboortedatum",
                  "dateFormat": "DD/MM/YYYY"
              },
              "leeftijd":{
                "label": "Leeftijd",
                "type": "hidden"
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
                  "label": "Adres"
              },
              "postcode":{
                  "label": "Postcode",
                  "disallowEmptySpaces": true
              },
              "woonplaats":{
                  "label": "Woonplaats"
              },
              "telefoonnummer":{
                  "label": "Telefoonnummer"
              },
              "thuissituatie":{
                  "label": "Thuissituatie",
                  "optionLabels": {"samen":"Twee ouders", "een":"Eenoudergezin", "co":"Co-ouderschap"},
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "gezag":{
                  "label": "Bij wie ligt het gezag?",
                   "optionLabels": {"2":"Beide ouders", "1":"Één ouder", "anders":"Anders"},
                   "hideNone": true,
                   "sort": false,
                   "vertical": true
              },
              "gezag-specifiek":{
                  "label": "Namelijk:",
                  "dependencies": {
                    "gezag": ["anders", "1"]
                  }
              },
              "verzorger-a":{
                  "label": "Verzorger A",
                  "fields": {
                      "naam-verzorger-a":{
                          "label": "Naam"
                      },
                      "mobiele-telefoonnummer-verzorger-a":{
                          "label": "Mobiele telefoonnummer"
                      },
                      "email-verzorger-a":{
                          "label": "E-mailadres"
                      },
                      "beroep-verzorger-a":{
                          "label": "Beroep"
                      }
                  },
                  "dependencies": {
                    "thuissituatie": ["samen", "co", "een"]
                  }
              },
              "verzorger-b":{
                  "label": "Verzorger B",
                  "fields": {
                      "naam-verzorger-b":{
                          "label": "Naam"
                      },
                      "mobiele-telefoonnummer-verzorger-b":{
                          "label": "Mobiele telefoonnummer"
                      },
                      "email-verzorger-b":{
                          "label": "E-mailadres"
                      },
                      "beroep-verzorger-b":{
                          "label": "Beroep"
                      }
                  },
                  "dependencies": {
                    "thuissituatie": ["samen", "co"]
                  }
              },
              "informatieochtend":{
                  "label": "Is deze ochtend door u bezocht?",
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "aantal-kinderen":{
                  "label": "Uit hoeveel kinderen bestaat uw gezin?",
                  "type": "integer"
              },
              "leeftijd-zussen":{
                  "label": "Leeftijd(en) zus(sen):"
              },
              "leeftijd-broers":{
                  "label": "Leeftijd(en) broer(s)"
              },
              "scholen-kinderen":{
                  "label": "Bezoeken meerdere kinderen uit het gezin de Werkplaats?",
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "school-kinderen-werkplaats":{
                  "label": "Welke klassen?",
                  "dependencies": {
                    "scholen-kinderen": ["Ja"]
                  }
              },
              "school-kinderen-anders":{
                  "label": "Welke andere scholen?",
                  "dependencies": {
                    "scholen-kinderen": ["Nee"]
                  }
              },
              "aandacht-soc-emo":{
                  "label": "Is speciale aandacht nodig voor de sociaal emotionele ontwikkeling op de basisschool?",
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "aandacht-soc-emo-uitleg":{
                  "label": "Welk gedrag kan de medewerker verwachten van uw kind en welke adviezen/tips heeft u voor de medewerker om met het betreffende gedrag goed om te gaan?",
                  "type": "textarea",
                  "dependencies": {
                    "aandacht-soc-emo": "Ja"
                  }
              },
              "bso":{
                  "label": "Gaat uw kind gebruik maken van BSO (buitenschoolse opvang)?",
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "bso-uitleg":{
                  "label": "Bij welke BSO?",
                  "type": "textarea",
                  "dependencies": {
                      "bso": "Ja"
                  }
              },
              "aandacht-spelen-leren":{
                  "label": "Is er speciale aandacht nodig voor spelen/leren op de basisschool?",
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "aandacht-spelen-leren-uitleg":{
                  "label": "Welk gedrag kan de medewerker verwachten van uw kind en welke adviezen/tips heeft u voor de medewerker om hiermee goed om te gaan?",
                  "type": "textarea",
                  "dependencies": {
                    "aandacht-spelen-leren": "Ja"
                  }
              },
              "dyslexie":{
                  "label": "Is er sprake van dyslexie in de familie?",
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "aandacht-gezichtsvermogen":{
                  "label": "Zijn er bijzonderheden bij uw kind, denk daarbij aan gezichtsvermogen, ziekten, allergieën, medicijngebruik e.d.?",
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "aandacht-gezichtsvermogen-uitleg":{
                  "label": "Welke?",
                  "type": "textarea",
                  "dependencies": {
                    "aandacht-gezichtsvermogen": "Ja"
                  }
              },
              "onderzoeken":{
                  "label": "Hebben er onderzoeken plaatsgevonden die voor ons als school relevant zijn?",
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "onderzoeken-uitleg":{
                  "label": "Zo ja welke en waarom?",
                  "type": "textarea",
                  "dependencies": {
                    "onderzoeken": "Ja"
                  }
              },
              "bijzonderheden":{
                  "label": "Zijn er bijzondere gebeurtenissen geweest, denk daarbij aan ongevallen, scheiding of overlijden.",
                  "hideNone": true,
                  "sort": false,
                  "vertical": true
              },
              "bijzonderheden-uitleg":{
                  "label": "Welke?",
                  "type": "textarea",
                  "dependencies": {
                    "bijzonderheden": "Ja"
                  }
              },
              "jongerdan5":{
                  "label": "De volgende vragen zijn voor de kinderen tot 5 jaar",
                  "fields": {
                      "kdv":{
                          "label": "Heeft uw kind gebruik gemaakt van een kinderdagverblijf/peuterspeelzaal?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "kdv-uitleg":{
                          "label": "Bij welk kinderdagverblijf/peuterspeelzaal?",
                          "dependencies": {
                            "kdv": "Ja"
                          }
                      },
                      "logopedie":{
                          "label": "Krijgt uw kind logopedie?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "gehoor":{
                          "label": "Zijn er bij uw kind buisjes geplaatst of zijn er gehoorproblemen?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "vve":{
                          "label": "Heeft uw kind deelgenomen aan een voorschools educatie-programma (VVE) en /of taalstimuleringsprogramma?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "aandacht-motorisch":{
                          "label": "Is speciale aandacht nodig voor de motorische ontwikkeling op de basisschool?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "aandacht-motorisch-uitleg":{
                          "label": "Welke bijzonderheden in de ontwikkeling waren/zijn er en welke adviezen heeft u voor de medewerker?",
                          "type": "textarea",
                          "dependencies": {
                            "aandacht-motorisch": "Ja"
                          }
                      },
                      "zindelijk":{
                          "label": "Is uw kind zindelijk?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "zindelijk-herinnering":{
                          "label": "Is uw kind zindelijk maar moet nog wel herinnerd worden om naar de wc te gaan?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "zindelijk-hulp":{
                          "label": "Is uw kind zindelijk, maar heeft nog hulp nodig op de wc?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "eten-hulp":{
                          "label": "Heeft uw kind hulp nodig bij eten en drinken?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "jas-hulp":{
                          "label": "Kan uw kind zelf zijn/haar jas aan- en uitdoen?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      },
                      "schoenen-hulp":{
                          "label": "Kan uw kind zelf schoenen aan- en uitdoen?",
                          "hideNone": true,
                          "sort": false,
                          "vertical": true
                      }
                  },
                  "dependencies": {
                    "leeftijd": ["0", "1", "2", "3", "4"]
                  }
              },
              "ouderdan4":{
                  "label": "Indien uw kund ouder is dan 4 jaar dan graag onderstaande gegevens invullen",
                  "fields": {
                      "school-laatst-bezocht":{
                          "label": "Laatst bezochte school?"
                      },
                      "school-adres":{
                          "label": "Adres"
                      },
                      "school-postcode":{
                          "label": "Postcode",
                          "disallowEmptySpaces": true
                      },
                      "school-plaats":{
                          "label": "Plaats"
                      },
                      "school-tel":{
                          "label": "Telefoonnummer"
                      },
                      "school-dir":{
                          "label": "Naam directeur"
                      },
                      "reden-aanmelding":{
                          "label": "Reden van aanmelding op de Werkplaats",
                          "type": "textarea"
                      }
                  },
                  "dependencies": {
                      "leeftijd": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
                  }
              },
              "handtekening-verzorger-a-naam":{
                  "label": "Naam verzorger A"
              },
              "handtekening-verzorger-a":{
                  "label": "Handtekening verzorger A",
                  "type": "hidden"
              },
              "handtekening-verzorger-b-naam":{
                  "label": "Naam verzorger B",
                  "dependencies": {
                    "thuissituatie": ["samen", "co"]
                  }
              },
              "handtekening-verzorger-b":{
                  "label": "Handtekening verzorger B",
                  "disabled": true,
                  "dependencies": {
                    "thuissituatie": ["samen", "co"]
                  },
                  "type": "hidden"
              }
          },
          "form": {
              "attributes": {
                  "method": "POST",
                  "action": formaction
              },
              "buttons": {
                  "submit": {
                      "value": "Verstuur",
                      "click": function() {
                          var promise = this.ajaxSubmit({'crossDomain':true});
                          promise.done(function(response) {
                              // alert("Success" + response.status);
                              $('#alert').addClass("alert alert-success");
                              $('#alert').html( "<strong>Uw aanmelding is verstuurd.</strong> Deze aanmelding is definitief op het moment dat u van ons een schriftelijke bevestiging heeft ontvangen." );

                          });
                          promise.fail(function(response) {
                              // alert("Error " + response.status);
                              $('#alert').addClass("alert alert-danger");
                              $('#alert').html( "<strong>Er is iets mis gegaan.</strong> Probeert u het alstublieft later nog eens." );
                          });
                          promise.always(function() {
                              // alert("Completed");
                          });
                      }
                  }
              }
          }
      }

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
               "control": handtekeninglayouta
             }
           },
           "/handtekening-verzorger-b-naam":{
             "templates": {
               "control": handtekeninglayoutb
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
           "template": werkplaatslayouttemplate,
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
          // if (control.form) {
          //     control.form.registerSubmitHandler(function (e) {
          //       control.form.getButtonEl('submit').click();
          //       return false;
          //     });
          // };
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
        "view": "werkplaats",
        "postRender": postRenderCallback
    });
});
