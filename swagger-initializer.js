window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui =  SwaggerUIBundle({
    url: "openapi.json", // or use `urls` array for lazy loading
    dom_id: '#swagger-ui',
    deepLinking: true,
    docExpansion: 'none',
    syntaxHighlight: { activated: false },
    presets: [SwaggerUIBundle.presets.apis],
    layout: "BaseLayout"
  });

  

  //</editor-fold>
};
