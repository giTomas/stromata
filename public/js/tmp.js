!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.comments=n({1:function(n,a,e,l,m){var s,t=null!=a?a:{},c=e.helperMissing,o="function",r=n.escapeExpression;return'  <div class="c-comment">\n    <p class="c-comment__name">'+r((s=null!=(s=e.name||(null!=a?a.name:a))?s:c,typeof s===o?s.call(t,{name:"name",hash:{},data:m}):s))+'</p>\n    <p class="c-comment__body">'+r((s=null!=(s=e.body||(null!=a?a.body:a))?s:c,typeof s===o?s.call(t,{name:"body",hash:{},data:m}):s))+"</p>    \n  </div>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,m){var s;return null!=(s=e.each.call(null!=a?a:{},null!=a?a.comments:a,{name:"each",hash:{},fn:n.program(1,m,0),inverse:n.noop,data:m}))?s:""},useData:!0})}();