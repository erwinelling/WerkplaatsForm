$(document).ready(function() {
  $("#form").alpaca({
      "dataSource": "http://localhost/~erwinelling/Werkplaats/WerkplaatsForm/data/connector-custom-data.json",
      "schemaSource": "http://localhost/~erwinelling/Werkplaats/WerkplaatsForm/data/werkplaats-schema2.json",
      "optionsSource": "http://localhost/~erwinelling/Werkplaats/WerkplaatsForm/data/werkplaats-options.json",
      "viewSource": "http://localhost/~erwinelling/Werkplaats/WerkplaatsForm/data/werkplaats-view.json",
      // "view": {
      //   "wizard": {
      //     "buttons": {
      //       "submit": {
      //         "click": function(e) {
      //             alert(JSON.stringify(this.getValue(), null, "  "));
      //         }
      //       }
      //     }
      //   }
      //}
  });
});
