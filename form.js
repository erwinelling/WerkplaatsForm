$(document).ready(function() {
  $("#form").alpaca({
      "schemaSource": "/data/werkplaats-schema.json",
      "optionsSource": "/data/werkplaats-options.json",
      "viewSource": "/data/werkplaats-view.json",
      "view": {
        "wizard": {
          "buttons": {
            "submit": {
              "click": function(e) {
                  alert(JSON.stringify(this.getValue(), null, "  "));
              }
            }
          }
        }
      }
  });
});
