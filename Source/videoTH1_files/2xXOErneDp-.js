if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometEntityHeaderBottomRow.react",["BaseRow.react","BaseRowItem.react","CometEntityHeaderResponsiveRow.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{backgroundColor:"cddn0xzi",boxShadow:"dsne8k7f"}};function a(a){var b=a.buttonGroup;a=a.tabs;return h.jsx(c("CometEntityHeaderResponsiveRow.react"),{xstyle:i.root,children:h.jsxs(c("BaseRow.react"),{verticalAlign:"center",children:[h.jsx(c("BaseRowItem.react"),{expanding:!0,children:a}),h.jsx(c("BaseRowItem.react"),{children:b})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometEntityConvergenceHeaderTopRow.react",["CometEntityHeaderScrollToContext","CometLeftRailLayoutContext","CometRouteRenderType","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect,k=b.useRef,l={actionsContainer:{"@media (max-width: 500px)":{width:"qublvx3c"},"@media (max-width: 899px)":{flexDirection:"ew1m30ut",flexGrow:"dwxd3oue",justifyContent:"rymlbt9a",marginTop:"izvtuzxg"},"@media (min-width: 900px)":{alignSelf:"eja8ua2n",flexGrow:"dkw9rofs",marginBottom:"dti9y0u4",marginStart:"t9rp7xwc",marginTop:"nyziof1z",maxWidth:"h374gqy3"}},actorContainer:{"@media (max-width: 899px)":{marginBottom:"mpmpiqla"},"@media (min-width: 900px)":{alignSelf:"aovbcota",bottom:"fln0ibad",marginEnd:"anxc55fr",position:"aw8vmcxp",start:"l54s1dlg"}},mainRow:{alignItems:"bp9cbjyn",display:"j83agx80","@media (max-width: 899px)":{flexDirection:"psu0lv52",justifyItems:"di70i8f1"},"@media (min-width: 900px)":{flexDirection:"s4qno8f7",justifyItems:"py2vq5j3",position:"owhy4gn4"}},titleContainer:{display:"j83agx80","@media (max-width: 899px)":{marginBottom:"mpmpiqla",paddingEnd:"ahl66waf",paddingStart:"tmq14sqq"},"@media (min-width: 900px)":{alignSelf:"rux31ns4",flexGrow:"sjcfkmk3",marginBottom:"dti9y0u4",marginTop:"nyziof1z"}}},m={actionsContainer:{"@media (max-width: 1259px)":{flexDirection:"etgq47z7",flexGrow:"amas0ahj",justifyContent:"pqy3obbr",marginTop:"q1zgui3m"},"@media (max-width: 860px)":{width:"ozwokbgq"},"@media (min-width: 1260px)":{alignSelf:"gb7e1y17",flexGrow:"o9o0lbt3",marginBottom:"pub51kmd",marginStart:"r800qmpv",marginTop:"s0ndlrs0",maxWidth:"piloxx45"}},actorContainer:{"@media (max-width: 1259px)":{marginBottom:"ayh59e20"},"@media (min-width: 1260px)":{alignSelf:"l3jms8v4",bottom:"h6d089fy",marginEnd:"wletkixj",position:"pdg663bu",start:"r1aeysok"}},mainRow:{alignItems:"bp9cbjyn",display:"j83agx80","@media (max-width: 1259px)":{flexDirection:"maz82uak",justifyItems:"s2bl6idr"},"@media (min-width: 1260px)":{flexDirection:"pbotcf4r",justifyItems:"mthkoi0p",position:"kx1n10jd"}},titleContainer:{display:"j83agx80","@media (max-width: 1259px)":{marginBottom:"ayh59e20",paddingEnd:"gpkoo7vy",paddingStart:"bzr302by"},"@media (min-width: 1260px)":{alignSelf:"mcvdn7v7",flexGrow:"if70xf2p",marginBottom:"pub51kmd",marginTop:"s0ndlrs0"}}},n={bleedHosted:{"@media (min-width: 1260px)":{marginTop:"i1n5ts4p"}},bleedUnhosted:{"@media (min-width: 900px)":{marginTop:"rmzkg9qa"}},large:{marginTop:"a0ua4ts5"},medium:{marginTop:"boxn81df"},small:{marginTop:"j8v9yfo1"}},o={large:{width:"dycxa26y"},medium:{width:"ixpc1vvl"},small:{width:"brn1tx4a"},spacer:{flexShrink:"pfnyh3mw",marginEnd:"wkznzc2l"},spacerHosted:{"@media (max-width: 1259px)":{display:"ltb2cvov"}},spacerUnhosted:{"@media (max-width: 899px)":{display:"hlyrhctz"}}};function a(a){var b=a.actionsBlock,e=a.actor,f=a.actorPicSize;f=f===void 0?"large":f;var g=a.banner,p=a.recommendationsUnit;a=a.titleBlock;var q=i(c("CometEntityHeaderScrollToContext")),r=i(c("CometLeftRailLayoutContext")),s=d("CometRouteRenderType").useIsHosted();r=r||s;var t=k(null);j(function(){q.scrollToTop(t,-32)},[q]);return h.jsxs("div",{children:[h.jsxs("div",{className:c("stylex")(r?m.mainRow:l.mainRow),ref:e==null?t:void 0,children:[e!=null&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:c("stylex")(r?m.actorContainer:l.actorContainer,n[f],r?n.bleedHosted:n.bleedUnhosted),ref:t,children:e}),h.jsx("div",{className:c("stylex")(o.spacer,o[f],r?o.spacerHosted:o.spacerUnhosted)})]}),a!=null&&h.jsx("div",{className:c("stylex")(r?m.titleContainer:l.titleContainer),children:a}),b!=null&&h.jsx("div",{className:c("stylex")(r?m.actionsContainer:l.actionsContainer),children:b})]}),p,g]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={glimmer:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",height:"datstx6m",width:"k4urcfbm"},root:{backgroundColor:"cwj9ozl2",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",paddingTop:"ecm0bbzt",paddingEnd:"ph5uu5jm",paddingBottom:"e5nlhep0",paddingStart:"b3onmgus"}};function a(a){a=a.size;return h.jsx(c("BaseLoadingStateElement.react"),{style:{height:a,width:a},xstyle:i.root,children:h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.glimmer),index:0})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometTabsGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{display:"j83agx80",marginBottom:"n851cfcs",marginStart:"dhix69tm",marginTop:"n1l5q3vz"},tab:{borderTopStartRadius:"lit7pgxp",borderTopEndRadius:"o3c63hce",borderBottomEndRadius:"hqlzco19",borderBottomStartRadius:"lsl2245n",height:"jnigpg78",marginTop:"aov4n071",marginEnd:"gso5pdkr",marginBottom:"bi6gxh9e",marginStart:"hcukyx3x",width:"nxfmr2wi"}};function a(){return h.jsxs(c("BaseLoadingStateElement.react"),{xstyle:i.root,children:[h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:1}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:2}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:3}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:4}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:5})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometProfileVanityCommunityControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/community/",Object.freeze({should_open_composer:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometProfileVanityControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/",Object.freeze({should_open_composer:!1,show_switched_toast:!1,show_invite_to_follow:!1,show_switched_tooltip:!1,show_podcast_settings:!1,show_community_transition:!1,show_community_review_changes:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometProfileVanityTributesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/tributes/",Object.freeze({should_open_composer:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityTabControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/{sk}/",Object.freeze({should_open_composer:!1,badge_type:"NEW_MEMBER"}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityTimelineControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/timeline/",Object.freeze({should_open_composer:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityWoodhengeSupportersURLControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/supporters/",Object.freeze({should_open_composer:!1}),void 0);b=a;g["default"]=b}),98);
__d("ProfileCometURIUtils",["ProfileCometContext","XCometProfileControllerRouteBuilder","XCometProfileVanityCommunityControllerRouteBuilder","XCometProfileVanityControllerRouteBuilder","XCometProfileVanityTributesControllerRouteBuilder","XCometVanityTabControllerRouteBuilder","XCometVanityTimelineControllerRouteBuilder","XCometVanityWoodhengeSupportersURLControllerRouteBuilder","react","unrecoverableViolation","useCurrentRouteEntityKey"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(a){var b=h(c("ProfileCometContext"));b=b.profileID;var d=c("useCurrentRouteEntityKey")();b=d!=null&&d.entity_type==="profile"&&d.entity_id===b&&d.section===a;return b}function b(){var a=h(c("ProfileCometContext")),b=a.profileID;a=a.profileVanity;if(a!=null&&a!=="")return c("XCometProfileVanityControllerRouteBuilder").buildURL({vanity:a});if(b!=null)return c("XCometProfileControllerRouteBuilder").buildURL({id:b});throw c("unrecoverableViolation")("Cannot generate URI for profile when id and vanity are both null","profile_comet")}function e(a){var b=h(c("ProfileCometContext")),d=b.profileID;b=b.profileVanity;if(b!=null&&b!==""){if(a==="timeline")return c("XCometVanityTimelineControllerRouteBuilder").buildURL({vanity:b});if(a==="tributes")return c("XCometProfileVanityTributesControllerRouteBuilder").buildURL({vanity:b});if(a==="supporters")return c("XCometVanityWoodhengeSupportersURLControllerRouteBuilder").buildURL({vanity:b});return a==="community"?c("XCometProfileVanityCommunityControllerRouteBuilder").buildURL({vanity:b}):c("XCometVanityTabControllerRouteBuilder").buildURL({sk:a,vanity:b})}if(d!=null)return c("XCometProfileControllerRouteBuilder").buildURL({id:d,sk:a});throw c("unrecoverableViolation")("Cannot generate URI for profile section when id and vanity are both null","profile_comet")}g.useIsProfileSectionActive=a;g.useURIForProfile=b;g.useURIForProfileSection=e}),98);
__d("ProfileCometUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a!=null&&b!=null&&a===b}f.isViewingSelfProfile=a}),66);