// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/web$1.0.0/src/app/views/produtos/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-BR><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1\"><title>Simple Sidebar - Start Bootstrap Template</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css Wintegrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link href=./../../estatico/css/estilo.css rel=stylesheet><script src=./../../estatico/js/core.js></script></head><body><main class=\"container-fluid p-0 d-flex\" id=wrapper><section class=\"col-lg-10 col-md-10 p-0 m-0\"><article id=page-content-wrapper><aside class=\"navbar navbar-expand-lg navbar-light bg-light border-bottom\" id=header><button class=\"navbar-toggler menu-expand\" onclick=menu(); title=\"Abrir menu\" type=button><section class=navbar-toggler-icon></section></button></aside><aside class=\"container-fluid p-2\"><section class=\"card shadow-sm\"><section class=\"card-header crud_tr\"><h3 class=\"ml-2 py-1 my-auto text-white\"><i class=\"fas fa-plus\"></i><b class=ml-3>Cadastrar Veiculos</b></h3></section><article class=card-body><form method=post action=/produtos>");

  if (data.produto.id) {
    out.w("<input type=hidden name=_method value=put>");
  }

  out.w("<section class=form-row><input type=hidden id=id name=id" +
    marko_attr("value", data.produto.id) +
    "><article class=col><label>Modelo</label><input type=text class=form-control id=nome name=nome" +
    marko_attr("value", data.produto.nome) +
    "></article><article class=\"col-md-3 mb-3\"><label>Preco</label><input type=text class=form-control id=preco name=preco" +
    marko_attr("value", data.produto.preco) +
    "></article><article class=\"col-md-3 mb-3\"><label>Quantidade</label><input type=number class=form-control id=quantidade name=quantidade" +
    marko_attr("value", data.produto.quantidade) +
    "></article></section><section class=\"form-row mt-2\"><article class=\"col-md-4 mb-4\"><label>Marca</label><input type=text class=form-control id=marca name=marca" +
    marko_attr("value", data.produto.marca) +
    "></article><article class=col><label>Descrição</label><input type=text class=form-control id=descricao name=descricao" +
    marko_attr("value", data.produto.descricao) +
    "></article></section><section class=\"form-row float-sm-right mt-2\"><article class=col><button class=\"btn btn-success ml-2\" type=submit>Cadastrar</button></article></section></form></article></section></aside></article></section><section class=\"col-lg-2 col-md-2 p-0 m-0\"><article class=\"border-right sticky-top\" id=sidebar-wrapper> <nav class=\"list-group list-group-flush\"><a class=\"nav_logo logo--parking mt-4\"><img src=./../../estatico/imgs/logo_estacionamento.svg></a><a href=/funcionarios class=nav_link> <h6 class=\"nav-nome mt-1\">Lista de Funcionários</h6></a><a href=/funcionarios/form class=nav_link><h6 class=\"nav-nome mt-1\">Cadastrar Funcionário</h6></a><a href=/produtos class=nav_link><h6 class=\"nav-nome mt-1\">Lista Veiculos</h6></a><a href=/produtos/form class=\"nav_link active\"><h6 class=\"nav-nome mt-1\">Cadastrar Veiculos</h6></a></nav></article></section></main><footer class=rodape>Desenvolvido pela Equipe 9; Yuri,Gabriel,Mateus,Rafael,Robson. </footer><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script><script>\r\n    $(\"#menu-toggle\").click(function (e) {\r\n      e.preventDefault();\r\n      $(\"#wrapper\").toggleClass(\"toggled\");\r\n    });\r\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "59");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/web$1.0.0/src/app/views/produtos/form/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
