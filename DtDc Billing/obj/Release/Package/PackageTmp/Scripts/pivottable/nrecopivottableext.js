﻿// 
// NReco PivotTable Extensions
// Author: Vitaliy Fedorchenko
// 
// Copyright (c) nrecosite.com - All Rights Reserved
// THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY 
// KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(7(){7 t(b,c,a,f,d,h,e){2.$z=b;2.$t=c;2.1r=[];2.1q=[];2.1X=a;2.2b=f;2.2a=d;2.1G=h;2.V=e;"2X"!==1v e&&(b=18.1a("1M"),b.s.26="27",2.V=0<=b.s.26.J("27"));2.2t()}6 g=2Y;6 w=7(b,c,a){o("7"==1v b.F.1U)g(a).A("2Z").20("1g","21.25,21.2W",7(){6 a=g(2).1f("2V").2R(" "),d=-1,h=-1;0<=g.1R("25",a)&&g.X(a,7(){0==2.J("2v")&&(h=1s(2.1w(3)));0==2.J("2S")&&(d=1s(2.1w(3)))});o(0<=g.1R("2T",a)){6 e=g(2).1f("P-i");h=1s(e.1w(3))}0<=g.1R("2U",a)&&(e=g(2).1f("P-i"),d=1s(e.1w(3)));a={};o(0<=d)i(e=0;e<c.1W.9;e++){6 p=c.13()[d];a[c.1W[e]]=p[e]}o(0<=h)i(e=0;e<c.1p.9;e++)p=c.15()[h],a[c.1p[e]]=p[e];b.F.1U(a)})},q=7(b,c,a){6 f=[],d;b.K=!1;6 h=b.15(),e=b.13();i(d Y h){6 p=h[d];6 n=8!=c?e[c]:[];n=b.1c(p,n);f.T({16:n.17(),1y:p})}f.4(7(b,c){E a*g.1N.1O(b.16,c.16)});b.1L=[];i(d=0;d<f.9;d++)b.1L.T(f[d].1y);b.K=!0},v=7(b,c,a){6 f=[],d;b.K=!1;6 h=b.15(),e=b.13();i(d Y e){6 p=e[d];6 n=8!=c?h[c]:[];n=b.1c(n,p);f.T({16:n.17(),1y:p})}f.4(7(b,c){E a*g.1N.1O(b.16,c.16)});b.1Z=[];i(d=0;d<f.9;d++)b.1Z.T(f[d].1y);b.K=!0},x=7(b,c,a,f,d){6 h=7(a,b){a.A("M"==b?"1B":"1k")},e=7(b,e,f,p){e.1g(7(){6 e=g(2),h=e.P("1Q"),k=b[h];e.S("1k")?(p(c,h,-1),a.4||(a.4={}),a.4.I="M",a.4[f]=k):e.S("1B")?(c.K=!1,30 a.4[f]):(p(c,h,1),a.4||(a.4={}),a.4.I="1m",a.4[f]=k);d()}).X(7(){o(a.4&&a.4[f]){6 c=g(2);b[c.P("1Q")].Z("14")==a.4[f].Z("14")&&h(c,a.4.I)}})},p=7(a,b){6 c=0;b.X(7(){6 b=g(2),e=g.2f(b.1Y()),d=a[c];8!=d&&0<d.9&&d[d.9-1]==e&&(b.A("1P").P("1Q",c),c++)})};o(b.F.2w){6 n=c.13();p(n,g(f).D(\'.1e[1i="1"]\'));e(n,g(f).D(\'.1e.1P[1i="1"]\'),"1o",q)}b.F.2D&&(n=c.15(),p(n,g(f).D(\'.1j[2i="1"]\')),e(n,g(f).D(\'.1j.1P[2i="1"]\'),"1n",v));b.F.2o&&g(f).D(".2h").X(7(){6 b=g(2),c=g.2f(b.1Y()),e=0<b.24().D(".1e").9;b.P("29",c);b.A(e?"2g":"37");a.4&&(!e||a.4.1n||a.4.12)&&(e||a.4.1o||a.4.11)||h(b,a.4&&a.4.Q&&"M"==a.4.Q[c]?"M":"1m")}).1g(7(){6 b=g(2),e=b.P("29"),f=b.S("2g");a.4||(a.4={});a.4.Q||(a.4.Q={});b.S("1k")?a.4.Q[e]="M":a.4.Q[e]="1m";c.K=!1;f?(a.4.1n=8,a.4.12=!1):(a.4.1o=8,a.4.11=!1);d()});g(f).D("1z:2d .1d").A("39").1g(7(){6 b=g(2);b.S("1k")?(v(c,8,-1),a.4={I:"M",12:!0}):b.S("1B")?(c.K=!1,a.4=8):(v(c,8,1),a.4={I:"1m",12:!0});d()}).X(7(){6 b=g(2);a.4&&a.4.12&&h(b,a.4.I)});g(f).D("1z:36 .1d").A("35").1g(7(){6 b=g(2);b.S("1k")?(q(c,8,-1),a.4={I:"M",11:!0}):b.S("1B")?(c.K=!1,a.4=8):(q(c,8,1),a.4={I:"1m",11:!0});d()}).X(7(){6 b=g(2);a.4&&a.4.11&&h(b,a.4.I)})};j.W=7(b){2.F=g.33({},W.2x,b)};j.W.L.1V=7(b,c){b.U||(b.U=b.2c,b.2c=7(a){6 e=8;g.3a(b.U)?e=b.U(a):8!=b.U&&8!=b.U[a]&&(e=b.U[a]);e||(e=g.1N.1O);E c&&c.4&&c.4.Q&&"M"==c.4.Q[a]?7(a,b){E-e(a,b)}:e});b.K=!1;o(c&&c.4){6 a="M"==c.4.I?-1:1;o(c.4.1o){6 f=b.13(),d=c.4.1o.Z("14"),h;i(h Y f)d==f[h].Z("14")&&q(b,h,a)}1l o(c.4.1n)i(h Y f=b.15(),d=c.4.1n.Z("14"),f)d==f[h].Z("14")&&v(b,h,a);1l c.4.12?v(b,8,a):c.4.11&&q(b,8,a)}};6 y=7(b,c,a){6 f=18.1a("1z");f.s.2L="2P";a=18.1a("21");a.1u("1i",c.1Z.9+1);f.1h(a);c=18.1a("C");c.N="1j";c.1u("1i",g(b).D("1z:2d C.1d").1f("1i"));6 d=g(b).D("2O");0==d.9&&(d=g(b));d[0].1h(f);f.2K(c,a);b=g(18.1a("a"));b[0].1u("2J","2H");b.1Y("3k 3K.3I 3L");g(a).3J("3H 3y ");a.1h(b[0]);a.s.28=b[0].s.28="#3C";b[0].s.3F="3E";g(b[0]).1f("3D","3B://3z.3A.3G/3N.3M")};j.W.L.3w=7(b){6 c=2;E 7(a,f){c.1V(a,f);6 d=b(a,f);6 h=7(){6 e=b(a,f);w(c,a,e);x(c,a,f,e,h);g(d).3i(e);d=e;y(d,a,f);c.F.1b&&c.23(g(d),!0,f.1b);o("7"==1v c.F.1S)c.F.1S(f.4?f.4:{})};w(c,a,d);x(c,a,f,d,h);y(d,a,f);E 7(a){o(c.F.1T){6 b=g(c.F.1T);b.3x(a);a=b}E a}(d)}};j.W.L.23=7(b,c,a){0!=b.9&&(c=c?b.3h(".2e"):b.24(),a="3c"===1v a?a:{},2.1b&&2.1b.2l(),2.1b=3d t(c,b,!0===a.1X?!0:!1,!1===a.3e?!1:!0,!1===a.3f?!1:!0,a.1G?a.1G:.5,!1===a.V?!1:!0))};t.L.22=7(b){7 c(a){E{B:a.3l,H:a.1D,G:a.1E}}7 a(a){a=a.2z();E{B:a.B,H:a.H,G:a.G}}6 f=2.$z,d=2.$t,h=[],e=2.1r=[],g=2.1q=[],n=2.2b,t=2.2a;f.A("2e");d.A("1t");0<d.D("C.1d").9&&d.A("3t");i(6 u=d[0].3u("3v"),k=0;k<u.9;k++){6 m=u[k],l=0<=m.N.J("2h"),q=0<=m.N.J("1d"),r=!l&&(0<=m.N.J("1e")||q&&0<k&&0<=u[k-1].N.J("1e"));q=!l&&(0<=m.N.J("1j")||q&&0<k&&0<=u[k-1].N.J("1j"));l={C:m,2C:r,2j:q};r||(l.1C=!0);q||(l.1F=!0);r=8;o(1==m.19.9&&"3o"==m.19[0].3p)r=m.19[0],r.N="1t";1l{r=18.1a("1M");r.N="1t";(l.2C||l.2j)&&r.1u("3q",m.1I);o(0<m.19.9)i(;0<m.19.9;)r.1h(m.19[0]);1l r.1I=m.1I;m.1h(r)}l.O=r;h.T(l)}u=f[0].2z?a:c;o(2.V){e=u(d[0]);i(k=h.9-1;0<=k;k--)l=h[k],d=u(l.C),l.1D=d.H-e.H,l.1E=d.G-e.G,l.B=d.B;k=7(){i(6 a=0;a<h.9;a++){6 b=h[a];b.O.s.B=b.B+"10";t&&b.1F&&(b.C.s.H=b.1D+"10");n&&b.1C&&(b.C.s.G=b.1E+"10")}f.A("2n");-1!==3n.3r.J("3s")&&f.A("3m")};j.R&&!b?j.R(k):k()}1l{i(k=h.9-1;0<=k;k--)l=h[k],d=u(l.C),l.B=d.B,t&&l.1F&&e.T({O:l.O,C:l.C,H:0,1H:0}),n&&l.1C&&g.T({O:l.O,C:l.C,G:0,1J:0});k=7(){i(6 a=0;a<h.9;a++){6 b=h[a];b.O.s.B=b.B+"10"}};j.R&&!b?j.R(k):k()}};t.L.1A=7(b,c){6 a=2.1q,f=2.1r,d=7(){i(6 d,e,g=0;g<a.9;g++)e=a[g],d=c+e.G,d!=e.1J&&(e.1J=d,e.O.s.G=d+"10");i(g=0;g<f.9;g++)e=f[g],d=b+e.H,d!=e.1H&&(e.1H=d,e.O.s.H=d+"10")};j.R?j.R(d):d()};t.L.2l=7(){2.$z.2u("1K 3g");2.1x&&g(j).2u("2r",2.1x);2.$t=2.$z=2.1q=2.1r=8};t.L.2q=7(){6 b=2;b.$t.D("1M.1t").X(7(){2.s.B="3j";b.V||(2.s.H="2s",2.s.G="2s")});b.$z.2y("2n");b.22(!0);2.V||b.1A(b.$z[0].2m,b.$z[0].2k)};t.L.2t=7(){2.22();6 b=2;o(!2.V){6 c=2.$z[0],a=8,f=-1,d=-1,h=2.1X?b.1A:7(c,d){a&&3b(a);2.$z.A("2B");a=2M(7(){a=8;b.$z.2y("2B");b.1A(c,d)},2N)};2.$z.20("1K",7(a){a=c.2m;6 e=c.2k;o(a!=f||e!=d)f=a,d=e,h.2A(b,a,e)});2.$z.1K()}6 e=2.$z[0].2p;2.1x=7(){6 a=b.$z[0].2p;e!=a&&(e=a,a=7(){b.2q()},j.R?j.R(a):a())};g(j).20("2r",2.1x)};j.W.L.2F=7(b){6 c=2;E 7(a,f){c.1V(a,f);6 d=b(a,f);g(d).A("2G").P("2I",7(){6 b,c=a.13(),d=a.15(),f=[],g=[],q=[];i(m Y d){f[m]=[];i(b Y c){6 k=a.1c(d[m],c[b]);f[m][b]=k.17()}q[m]=a.1c(d[m],[]).17()}i(b Y c)g[b]=a.1c([],c[b]).17();6 m=a.1c([],[]);E{2E:c,34:a.1W,1L:d,1p:a.1p,32:f,2Q:{2v:g,38:q,31:m.17()}}});E d}};j.W.2x={1U:8,1T:8,1S:7(b){},2o:!0,2w:!0,2D:!0,1b:!1}}).2A(2);',62,236,'||this||sort||var|function|null|length|||||||||for|window|||||if||||style|||||||containerElem|addClass|height|th|find|return|options|left|top|direction|indexOf|sorted|prototype|desc|className|el|data|labels|requestAnimationFrame|hasClass|push|__origSorters|useSticky|NRecoPivotTableExtensions|each|in|join|px|col_totals|row_totals|getColKeys|_|getRowKeys|val|value|document|childNodes|createElement|fixedHeaders|getAggregator|pvtTotalLabel|pvtColLabel|attr|click|appendChild|colspan|pvtRowLabel|pvtSortAsc|else|asc|row_key|column_key|rowAttrs|fixedByLeft|fixedByTop|parseInt|pvtFixedHeader|setAttribute|typeof|substring|resizeHandler|key|tr|refreshHeaders|pvtSortDesc|fixedLeft|offsetTop|offsetLeft|fixedTop|disableByAreaFactor|lastTop|textContent|lastLeft|scroll|rowKeys|div|pivotUtilities|naturalSort|pvtSortable|key_index|inArray|onSortHandler|wrapWith|drillDownHandler|sortDataByOpts|colAttrs|smooth|text|colKeys|on|td|buildFixedHeaders|initFixedHeaders|parent|pvtVal|position|sticky|color|axis_name|colHdrEnabled|rowHdrEnabled|sorters|last|pvtFixedHeaderOuterContainer|trim|pvtSortableCol|pvtAxisLabel|rowspan|isRow|scrollLeft|destroy|scrollTop|pvtStickyFixedHeader|sortByLabelEnabled|clientWidth|refresh|resize|0px|init|off|row|sortByColumnsEnabled|defaults|removeClass|getBoundingClientRect|call|pvtFixedHeadersOutdated|isCol|sortByRowsEnabled|columnKeys|wrapPivotExportRenderer|pivotExportData|_blank|getPivotExportData|target|insertBefore|fontSize|setTimeout|300|tbody|10px|totals|split|col|rowTotal|colTotal|class|pvtTotal|boolean|jQuery|pvtValDrillDown|delete|grandTotal|matrix|extend|columnAttrs|pvtTotalRowSortable|first|pvtSortableRow|column|pvtTotalColSortable|isFunction|clearTimeout|object|new|rows|columns|wheel|closest|replaceWith|auto|NReco|clientHeight|pvtStickyChromeFixedHeader|navigator|DIV|tagName|title|userAgent|Chrome|pvtHasTotalsLastColumn|getElementsByTagName|TH|wrapTableRenderer|append|by|www|nrecosite|https|C0C0C0|href|pointer|cursor|com|Powered|js|html|PivotTable|Extensions|aspx|pivot_table_aspnet'.split('|'),0,{}))