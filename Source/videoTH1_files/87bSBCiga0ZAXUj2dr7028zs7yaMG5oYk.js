if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MWInboxSettingsPresenceMainPushPageQuery$Parameters",["MWInboxSettingsPresenceMainPushPageQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("MWInboxSettingsPresenceMainPushPageQuery_facebookRelayOperation"),metadata:{live:{polling_interval:1e3}},name:"MWInboxSettingsPresenceMainPushPageQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MWChatVisibilitySetMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3838961626173722"}),null);
__d("MWChatVisibilitySetMutation.graphql",["MWChatVisibilitySetMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"MessengerChatVisibilitySetResponsePayload",kind:"LinkedField",name:"messenger_chat_visibility_set",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"chat_visibility",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatVisibilitySetMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatVisibilitySetMutation",selections:c},params:{id:b("MWChatVisibilitySetMutation_facebookRelayOperation"),metadata:{},name:"MWChatVisibilitySetMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("MWInboxSettingsPresenceDialog.entrypoint",["JSResourceForInteraction","MWInboxSettingsPresenceMainPushPageQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{mainPushPageQueryReference:{parameters:b("MWInboxSettingsPresenceMainPushPageQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("MWInboxSettingsPresenceDialog.react").__setRef("MWInboxSettingsPresenceDialog.entrypoint")};g["default"]=a}),98);
__d("MWPresenceSettingsUtils.bs",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a=g._(/*FBT_CALL*/"Tr\u1ea1ng th\u00e1i ho\u1ea1t \u0111\u1ed9ng: \u0110ANG T\u1eaeT"/*FBT_CALL*/);b=g._(/*FBT_CALL*/"Tr\u1ea1ng th\u00e1i ho\u1ea1t \u0111\u1ed9ng: \u0110ANG B\u1eacT"/*FBT_CALL*/);c=g._(/*FBT_CALL*/"B\u1eadt tr\u1ea1ng th\u00e1i ho\u1ea1t \u0111\u1ed9ng"/*FBT_CALL*/);d=g._(/*FBT_CALL*/"T\u1eaft tr\u1ea1ng th\u00e1i ho\u1ea1t \u0111\u1ed9ng"/*FBT_CALL*/);f.cometTextInactive=a;f.cometTextActive=b;f.textInactive=c;f.textActive=d}),null);
__d("MWPresenceSettingsUtils.re",["MWPresenceSettingsUtils.bs"],(function(a,b,c,d,e,f){c=(a=b("MWPresenceSettingsUtils.bs")).cometTextInactive;f.cometTextInactive=c;d=a.cometTextActive;f.cometTextActive=d;e=a.textInactive;f.textInactive=e;b=a.textActive;f.textActive=b}),null);
__d("useRTWebCallBlockedSettingDialog",["JSResourceForInteraction","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("JSResourceForInteraction")("RTWebCallBlockedSettingDialog.react").__setRef("useRTWebCallBlockedSettingDialog");function a(){var a=c("useCometLazyDialog")(i),b=a[0];return h(function(a){a=a.setCallBlockedSetting;b({setCallBlockedSetting:a})},[b])}g["default"]=a}),98);
__d("RTWebCallBlockedSettingMenuItem.react",["ix","CometMenuItemSelectable_DEPRECATED.react","CometSwitch.react","fbicon","react","useRTWebCallBlockedSettingDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.hasCallsBlocked,e=a.label,f=a.setCallBlockedSetting,g=c("useRTWebCallBlockedSettingDialog")();return i.jsx(c("CometMenuItemSelectable_DEPRECATED.react"),{aux:function(a){return i.jsx(c("CometSwitch.react"),{"aria-hidden":!0,size:"small",value:a,children:e})},icon:d("fbicon")._(h("1160762"),20),isSelected:!b,onClick:function(){b?f(0):g({setCallBlockedSetting:f})},preventClosingMenuOnSelect:b?!0:void 0,primaryText:e,role:"menuitemcheckbox"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatVisibilitySetMutation",["MWChatVisibilitySetMutation.graphql","cr:1012418"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("MWChatVisibilitySetMutation.graphql");function a(a){var c=a.environment;a=a.input;return b("cr:1012418").commitMutation(c,{mutation:i,variables:{input:babelHelpers["extends"]({},a)}})}g.commit=a}),98);
__d("XChatPrivacyDialogControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ajax/chat/privacy/settings_dialog_compat/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useCometCompatPrivacyToggle",["CometCompatModalDialogResource","CometRelay","MWChatVisibilitySetMutation","MessengerMQTTPresenceReporting","XChatPrivacyDialogControllerRouteBuilder","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=d("CometRelay").useRelayEnvironment(),e=c("useCometLazyDialog")(c("CometCompatModalDialogResource")),f=e[0];return h(function(){if(!a){d("MWChatVisibilitySetMutation").commit({environment:b,input:{chat_visibility:!0}});d("MessengerMQTTPresenceReporting").reportChatVisibility(a);return}f({customCompatEventHandler:function(a){a=a.addListener("chat-visibility-change",function(a){if(a!=null){a=a.data;if(typeof a==="object"){var c=a==null?void 0:a.chatVisibility;(c===!0||c===!1)&&(b.commitUpdate(function(a){a=a.getRoot();if(a==null)return;a=a.getLinkedRecord("viewer");if(a==null)return;a.setValue(c,"chat_visibility")}),d("MessengerMQTTPresenceReporting").reportChatVisibility(c))}}});return a.remove},params:{rel:"dialog",uri:c("XChatPrivacyDialogControllerRouteBuilder").buildURL({dialog_type:"turn_off_dialog"})}})},[a,b,f])}g["default"]=a}),98);
__d("MWChatSidebarSettingsDropdown.react",["fbt","ix","CometEntryPointDialogTrigger.react","CometMenu.react","CometMenuItem.react","CometMenuItemSelectable_DEPRECATED.react","CometSeparatorMenuItem.react","CometSwitch.react","CurrentUser","MWInboxSettingsPresenceDialog.entrypoint","MWPresenceSettingsUtils.re","MessageRequestsViewThreadlistFalcoEvent","ODS","RTWebCallBlockedSettingMenuItem.react","XCometSettingsControllerRouteBuilder","cr:11517","cr:56","fbicon","gkx","react","useCometCompatPrivacyToggle"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=(e=b("cr:56")==null?void 0:b("cr:56").make)!=null?e:null,l=(e=b("cr:11517")==null?void 0:b("cr:11517").make)!=null?e:null,m=h._(/*FBT_CALL*/"\u00c2m thanh tin nh\u1eafn"/*FBT_CALL*/),n=h._(/*FBT_CALL*/"Tin nh\u1eafn m\u1edbi b\u1eadt l\u00ean"/*FBT_CALL*/),o=h._(/*FBT_CALL*/"\u00c2m thanh cu\u1ed9c g\u1ecdi \u0111\u1ebfn"/*FBT_CALL*/);function a(a){var b=a.activeStatusOn,e=a.chatSoundsOn,f=a.chatTabsTurnedOff,g=a.contextualMenuItem,p=a.hasCallsBlocked,q=a.onChangeSoundsSetting,r=a.onChangeTurnOffTabsSetting,s=a.onOpenMessageRequests,t=a.onOpenRestrictedAccountsList;a=a.setCallBlockedUntil;var u=c("useCometCompatPrivacyToggle")(b),v=c("gkx")("3846")&&t!=null;return j.jsxs(c("CometMenu.react"),{header:{meta:h._(/*FBT_CALL*/"T\u00f9y ch\u1ec9nh tr\u1ea3i nghi\u1ec7m tr\u00ean Messenger."/*FBT_CALL*/),title:h._(/*FBT_CALL*/"C\u00e0i \u0111\u1eb7t chat"/*FBT_CALL*/)},withArrow:!0,children:[j.jsx(c("RTWebCallBlockedSettingMenuItem.react"),{hasCallsBlocked:p,label:o,setCallBlockedSetting:a}),j.jsx(c("CometMenuItemSelectable_DEPRECATED.react"),{aux:function(a){return j.jsx(c("CometSwitch.react"),{"aria-hidden":!0,size:"small",value:a,children:m})},icon:d("fbicon")._(i("1146252"),20),isSelected:e!==!1,onClick:q,preventClosingMenuOnSelect:!0,primaryText:m,role:"menuitemcheckbox"}),j.jsx(c("CometMenuItemSelectable_DEPRECATED.react"),{aux:function(a){return j.jsx(c("CometSwitch.react"),{"aria-hidden":!0,size:"small",value:a,children:n})},icon:d("fbicon")._(i("1111403"),20),isSelected:!f,onClick:function(){f&&d("ODS").bumpEntityKey(3185,"messenger_settings","chat_tabs_enable"),r()},preventClosingMenuOnSelect:!0,primaryText:n,role:"menuitemcheckbox",secondaryText:h._(/*FBT_CALL*/"T\u1ef1 \u0111\u1ed9ng m\u1edf tin nh\u1eafn m\u1edbi."/*FBT_CALL*/),testid:void 0}),g!=null?j.jsx(c("CometSeparatorMenuItem.react"),{}):null,g!=null?g:null,l!=null?j.jsx(c("CometSeparatorMenuItem.react"),{}):null,l!=null?j.jsx(l,{}):null,k!=null&&c("CurrentUser").isEmployee()?j.jsx(k,{}):null,j.jsx(c("CometSeparatorMenuItem.react"),{}),c("gkx")("3634")?j.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("MWInboxSettingsPresenceDialog.entrypoint"),otherProps:{},preloadParams:{routeParams:{},routeProps:{}},children:function(a){return j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("1146260"),20),onClick:a,primaryText:b?d("MWPresenceSettingsUtils.re").cometTextActive:d("MWPresenceSettingsUtils.re").cometTextInactive,role:"menuitemcheckbox"})}}):j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("1146260"),20),onClick:u,primaryText:b?h._(/*FBT_CALL*/"T\u1eaft tr\u1ea1ng th\u00e1i ho\u1ea1t \u0111\u1ed9ng"/*FBT_CALL*/):h._(/*FBT_CALL*/"B\u1eadt tr\u1ea1ng th\u00e1i ho\u1ea1t \u0111\u1ed9ng"/*FBT_CALL*/),role:"menuitemcheckbox"}),s?j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("610742"),20),onClick:function(){c("MessageRequestsViewThreadlistFalcoEvent").log(function(){return{action:0,actioned_thread_count:"0",actioned_unread_thread_count:"0",entry_point:3,folder:-1}}),s()},primaryText:h._(/*FBT_CALL*/"Tin nh\u1eafn \u0111ang ch\u1edd"/*FBT_CALL*/),testid:void 0}):null,c("gkx")("2297")?j.jsx(c("CometMenuItem.react"),{href:c("XCometSettingsControllerRouteBuilder").buildURL({tab:"privacy"}),icon:d("fbicon")._(i("788355"),20),primaryText:h._(/*FBT_CALL*/"C\u00e0i \u0111\u1eb7t g\u1eedi tin nh\u1eafn"/*FBT_CALL*/),testid:void 0}):null,v?j.jsx(c("CometSeparatorMenuItem.react"),{}):null,v?j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("995804"),20),onClick:t,primaryText:h._(/*FBT_CALL*/"T\u00e0i kho\u1ea3n b\u1ecb h\u1ea1n ch\u1ebf"/*FBT_CALL*/)}):null,j.jsx(c("CometMenuItem.react"),{href:c("XCometSettingsControllerRouteBuilder").buildURL({tab:"blocking"}),icon:d("fbicon")._(i("538079"),20),primaryText:h._(/*FBT_CALL*/"C\u00e0i \u0111\u1eb7t ch\u1eb7n"/*FBT_CALL*/)})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeChatSettings.react",["fbt","ix","CometMenuItemSelectable_DEPRECATED.react","CometSwitch.react","MWChatSidebarSettingsDropdown.react","fbicon","react","useCometHomeChatSettings"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.props;a=a.queries;a=d("useCometHomeChatSettings").useCometHomeChatSettings(a.chatSettingsQueryReference);var e=a.activeStatusOn,f=a.callBlockedUntil,g=a.chatSidebarIsCollapsed,h=a.chatSoundsOn,i=a.chatTabsTurnedOff;a=d("useCometHomeChatSettings").useCometHomeChatSettingsMutations();var k=a.onChangeSidebarIsCollapsedSetting,m=a.onChangeSoundsSetting,n=a.onChangeTurnOffTabsSetting;a=a.setCallBlockedUntil;return j.jsx(c("MWChatSidebarSettingsDropdown.react"),{activeStatusOn:e,chatSoundsOn:h,chatTabsTurnedOff:i,contextualMenuItem:b.chatSettingsContextualSection==="contacts"?j.jsx(l,{chatSidebarIsCollapsed:g,onChangeSidebarIsCollapsedSetting:function(){k(!g)}}):null,hasCallsBlocked:f!==0,onChangeSoundsSetting:function(){m(!h)},onChangeTurnOffTabsSetting:function(){n(!i)},onOpenMessageRequests:b.onOpenMessageRequests,onOpenRestrictedAccountsList:b.onOpenRestrictedAccountsList,setCallBlockedUntil:a})}a.displayName=a.name+" [from "+f.id+"]";var k=h._(/*FBT_CALL*/"Hi\u1ec3n th\u1ecb danh b\u1ea1"/*FBT_CALL*/);function l(a){return j.jsx(c("CometMenuItemSelectable_DEPRECATED.react"),{aux:function(a){return j.jsx(c("CometSwitch.react"),{"aria-hidden":!0,size:"small",value:a,children:k})},icon:d("fbicon")._(i("509569"),20),isSelected:!a.chatSidebarIsCollapsed,onClick:a.onChangeSidebarIsCollapsedSetting,primaryText:k,role:"menuitemcheckbox"})}l.displayName=l.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometLeftRailComponentWithSSRBoundary.react",["CometLeftRailComponent.react","CometSSRMultipassBoundary.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("CometSSRMultipassBoundary.react"),{id:"left_rail",children:h.jsx(c("CometLeftRailComponent.react"),babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MarketplaceCategoryIDsContext",["emptyArray","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyArray"));g["default"]=b}),98);
__d("MarketplaceSEOContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={isCrawler:!1};c=a.createContext(b);g["default"]=c}),98);
__d("CometMarketplaceApp.react",["CometDensityAwarenessContext","CometTransientDialogProvider.react","MarketplaceApplicationContext.hybrid","MarketplaceApplicationLocationState.hybrid","MarketplaceCategoryIDsContext","MarketplaceCometC2CShippedGating.hybrid","MarketplaceSEOContext","emptyArray","react","useRoutePassthroughProps"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useReducer;function a(a){var b=a.categoryIDs;b=b===void 0?c("emptyArray"):b;var e=a.children,f=a.isCrawler,g=f===void 0?!1:f;f=a.location;a=c("useRoutePassthroughProps")();a=(a=d("MarketplaceApplicationLocationState.hybrid").toBuyLocation(a==null?void 0:a.location))!=null?a:f;d("MarketplaceCometC2CShippedGating.hybrid").shouldBlockShippingForKYCAfter14Days();f=j(d("MarketplaceApplicationContext.hybrid").reducer,d("MarketplaceApplicationContext.hybrid").reducer({location:a}));var k=f[0],l=f[1];a=i(function(){return{dispatch:l,state:k}},[l,k]);f=i(function(){return{isCrawler:g}},[g]);return h.jsx(d("MarketplaceApplicationContext.hybrid").MarketplaceApplicationContext.Provider,{value:a,children:h.jsx(c("CometDensityAwarenessContext").Provider,{value:!0,children:h.jsx(c("MarketplaceSEOContext").Provider,{value:f,children:h.jsx(c("MarketplaceCategoryIDsContext").Provider,{value:b,children:h.jsx(c("CometTransientDialogProvider.react"),{children:e})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MarketplaceFirstScrollFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743924");c=b("FalcoLoggerInternal").create("marketplace_first_scroll",a);e.exports=c}),null);
__d("CometMarketplaceSurfaceComponent.react",["CometMarketplaceSurfaceLoggingUtils","CometRouteParams","HiddenSubtreeContext","MarketplaceFirstScrollFalcoEvent","react","useCurrentMarketplaceSurface","useIsCategoryRouteActive","useOnBeforeUnload"],(function(a,b,c,d,e,f,g){"use strict";d("react");b=d("react");var h=b.useContext,i=b.useEffect,j=b.useRef,k={};function a(a){var b=a.children,e=a.metadata,f=e===void 0?k:e,g=a.qplPointLogger,l=h(c("HiddenSubtreeContext")).hidden,m=j(!1),n=j(!1),o=j(!1),p=c("useCurrentMarketplaceSurface")(),q=p.surface;e=d("CometRouteParams").useRouteParams();a=e.category_id;e=c("useIsCategoryRouteActive")();var r=!e||a==null?null:String(a);i(function(){if(!l&&!n.current){m.current=!1;n.current=!0;g&&g("form_loaded");var a=babelHelpers["extends"]({},f,{seoUrl:r});d("CometMarketplaceSurfaceLoggingUtils").logSurfaceEvent("surface_enter",p,a)}},[f,g,r,p,l]);i(function(){if(o.current)return;var a=function a(){!o.current&&q!=null&&(o.current=!0,c("MarketplaceFirstScrollFalcoEvent").logImmediately(function(){return{clienttime:Date.now(),referralSurface:p.referralSurface,surface:q}}),window.removeEventListener("scroll",a))};window.addEventListener("scroll",a);return function(){return window.removeEventListener("scroll",a)}});c("useOnBeforeUnload")(function(){!l&&!m.current&&(m.current=!0,n.current=!1,o.current=!1,d("CometMarketplaceSurfaceLoggingUtils").logSurfaceEvent("surface_exit",p,f))});return b}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMarketplaceNavLink.react",["TetraAccessoryListCell.react","TetraText.react","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.addOnEnd,d=a.icon,e=a.isActive,f=a.onClick;f=f===void 0?c("emptyFunction"):f;var g=a.preventLocalNavigation;g=g===void 0?!1:g;var i=a.title;a=a.url;return h.jsx(c("TetraAccessoryListCell.react"),{addOnEnd:b,addOnPrimary:{color:e?"blue":"gray",icon:d,size:36,type:"contained-icon"},headline:h.jsx(c("TetraText.react"),{type:"headline4",children:i}),linkProps:{preventLocalNavigation:g,url:a},onPress:f,selected:e,selectedBackground:"wash"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometMarketplaceLiveShoppingControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/marketplace/live-shopping/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("CometMarketplaceLiveShoppingNavigationItem.react",["fbt","ix","CometMarketplaceNavLink.react","XCometMarketplaceLiveShoppingControllerRouteBuilder","fbicon","react","useIsRouteActive"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){a=c("useIsRouteActive")("comet.marketplace.live_shopping");return j.jsx(c("CometMarketplaceNavLink.react"),{icon:d("fbicon")._(i("682729"),20),isActive:a,title:h._(/*FBT_CALL*/"Mua s\u1eafm tr\u1ef1c ti\u1ebfp"/*FBT_CALL*/),url:c("XCometMarketplaceLiveShoppingControllerRouteBuilder").buildURL({})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometMarketplaceComposerCreateControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/marketplace/create/",Object.freeze({shipping:!1}),void 0);b=a;g["default"]=b}),98);
__d("CometMarketplaceComposerNavLink.react",["fbt","ix","TetraButton.react","XCometMarketplaceComposerCreateControllerRouteBuilder","cr:1385414","fbicon","react","useLogMarketplaceClick"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var e=a.reduceEmphasis;e=e===void 0?!0:e;a=a.size;a=a===void 0?"medium":a;var f=c("useLogMarketplaceClick")("start_selling_button"),g=c("XCometMarketplaceComposerCreateControllerRouteBuilder").buildURL({}),k=function(){f(),b("cr:1385414")!=null&&b("cr:1385414").openLegacyDialog(g)};return j.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("483768"),16),label:h._(/*FBT_CALL*/"T\u1ea1o b\u00e0i ni\u00eam y\u1ebft m\u1edbi"/*FBT_CALL*/),linkProps:{preventLocalNavigation:b("cr:1385414")!=null,url:g},onPress:k,reduceEmphasis:e,size:a,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MarketplaceFakeMSiteBanner.react",["fbt","ix","CometPressable.react","CometRouteParams","TetraIcon.react","fbicon","gkx","react","useMarketplaceGoBackDispatcher"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){a=a.force;a=a===void 0?!1:a;var b=c("useMarketplaceGoBackDispatcher")(),e=d("CometRouteParams").useRouteParams();if(c("gkx")("708253"))return null;return!c("gkx")("1489406")&&!a||e.ref==="page_home_tab"?null:j.jsx(c("CometPressable.react"),{expanding:!0,onPress:b,children:j.jsxs("div",{className:"ow71b3p4 rymlbt9a qozo4j9o bjsqk2b0 e71djeip lr1j1er4 dwxd3oue q852woou hcl0qszc jd4qzzce odq3wexb mkhogb32",children:[j.jsx("div",{className:"fcg2cn6m ax37mqq2 pmk7jnqg",children:j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("512647"),20)})}),h._(/*FBT_CALL*/"Marketplace"/*FBT_CALL*/)]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MarketplacePDPContainerDeferred.react",["deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";d("react");a=c("deferredLoadComponent")(c("requireDeferredForDisplay")("MarketplacePDPContainer.react").__setRef("MarketplacePDPContainerDeferred.react"));g["default"]=a}),98);
__d("MarketplaceDistance",[],(function(a,b,c,d,e,f){"use strict";var g=1.60934;a=function(){function a(a,b){this.$1=a,this.$2=b}a.km=function(b){return new a(b,"km")};a.meters=function(b){return new a(b,"meters")};a.miles=function(b){return new a(b,"miles")};var b=a.prototype;b.toMiles=function(){switch(this.$2){case"km":return this.$1/g;case"meters":return this.$1/1e3/g;default:return this.$1}};b.toKm=function(){switch(this.$2){case"meters":return this.$1/1e3;case"miles":return this.$1*g;default:return this.$1}};b.toMeters=function(){switch(this.$2){case"km":return this.$1*1e3;case"miles":return this.$1*g*1e3;default:return this.$1}};return a}();f["default"]=a}),66);
__d("useIsRouteOrSubRouteActive",["useCometRouterState"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=c("useCometRouterState")();b=b==null?void 0:(b=b.main)==null?void 0:(b=b.route)==null?void 0:b.tracePolicy;return b!=null?b.includes(a):!1}g["default"]=a}),98);
__d("createCommitMutation_DEPRECATED",["Promise","cr:819055"],(function(a,b,c,d,e,f,g){"use strict";function h(a,c,d){return new(b("Promise"))(function(e,f){return b("cr:819055").commitMutation(a,babelHelpers["extends"]({},d,{variables:{input:c},onCompleted:function(a,b){b&&b.length?f(b):e(a)},onError:function(a){return f([a])}}))})}function a(a,b){return function(c){return h(a,c,b)}}function c(a){return function(b,c){return h(b,c,a)}}function d(a,b){return function(c){return h(a,c,b(c))}}g.createCommitMutation_DEPRECATED=a;g.createCommitMutationForEnvironment_DEPRECATED=c;g.createCommitMutationWithVariables_DEPRECATED=d}),98);
__d("XCometMarketplaceComposerBulkUploadControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/marketplace/create/bulk/",Object.freeze({edit_mode:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometMarketplaceInboxControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/marketplace/inbox/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("useCometHomeChatSettingsQuery.graphql",["useCometHomeChatSettingsQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"call_blocked_until",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"chat_sounds_on",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"chat_tabs_turned_off",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"chat_visibility",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"chat_sidebar_is_collapsed",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"is_active_status_viewable",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometHomeChatSettingsQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[a,c,d,e,f,{alias:null,args:null,concreteType:"PresenceViewerBasedSettings",kind:"LinkedField",name:"presence_view_side_settings",plural:!1,selections:[g],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"useCometHomeChatSettingsQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[a,c,d,e,f,{alias:null,args:null,concreteType:"PresenceViewerBasedSettings",kind:"LinkedField",name:"presence_view_side_settings",plural:!1,selections:[g,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("useCometHomeChatSettingsQuery_facebookRelayOperation"),metadata:{},name:"useCometHomeChatSettingsQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("MWCallBlockedUntilSettingMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4521891241180564"}),null);
__d("MWCallBlockedUntilSettingMutation.graphql",["MWCallBlockedUntilSettingMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"SetCallBlockedUntilSettingResponsePayload",kind:"LinkedField",name:"set_call_blocked_until_setting",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"call_blocked_until",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWCallBlockedUntilSettingMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWCallBlockedUntilSettingMutation",selections:c},params:{id:b("MWCallBlockedUntilSettingMutation_facebookRelayOperation"),metadata:{},name:"MWCallBlockedUntilSettingMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("MWChatChangeSoundsSettingMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2293508424080940"}),null);
__d("MWChatChangeSoundsSettingMutation.graphql",["MWChatChangeSoundsSettingMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"SetChatSoundsSettingResponsePayload",kind:"LinkedField",name:"set_chat_sounds_setting",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"chat_sounds_on",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatChangeSoundsSettingMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatChangeSoundsSettingMutation",selections:c},params:{id:b("MWChatChangeSoundsSettingMutation_facebookRelayOperation"),metadata:{},name:"MWChatChangeSoundsSettingMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("MWChatChangeTurnOffTabsSettingMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2558711324213856"}),null);
__d("MWChatChangeTurnOffTabsSettingMutation.graphql",["MWChatChangeTurnOffTabsSettingMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"SetTurnOffChatTabsSettingResponsePayload",kind:"LinkedField",name:"set_turn_off_chat_tabs_setting",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"chat_tabs_turned_off",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatChangeTurnOffTabsSettingMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatChangeTurnOffTabsSettingMutation",selections:c},params:{id:b("MWChatChangeTurnOffTabsSettingMutation_facebookRelayOperation"),metadata:{},name:"MWChatChangeTurnOffTabsSettingMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3427061027335727"}),null);
__d("MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription.graphql",["MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"MessengerChatSoundsSettingSubscribeResponsePayload",kind:"LinkedField",name:"messenger_chat_sounds_setting_subscribe",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"chat_sounds_enabled",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription",selections:c,type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription",selections:c},params:{id:b("MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription_facebookRelayOperation"),metadata:{subscriptionName:"messenger_chat_sounds_setting_subscribe"},name:"MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2523273457796088"}),null);
__d("MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription.graphql",["MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"MessengerChatTabsSettingSubscribeResponsePayload",kind:"LinkedField",name:"messenger_chat_tabs_setting_subscribe",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"chat_tabs_enabled",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription",selections:c,type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription",selections:c},params:{id:b("MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription_facebookRelayOperation"),metadata:{subscriptionName:"messenger_chat_tabs_setting_subscribe"},name:"MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("MWCallBlockedUntilSettingMutation",["MWCallBlockedUntilSettingMutation.graphql","createCommitMutation_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;a=d("createCommitMutation_DEPRECATED").createCommitMutationForEnvironment_DEPRECATED({mutation:h!==void 0?h:h=b("MWCallBlockedUntilSettingMutation.graphql")});g.commit=a}),98);
__d("MWChatChangeSoundsSettingMutation",["MWChatChangeSoundsSettingMutation.graphql","createCommitMutation_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;a=d("createCommitMutation_DEPRECATED").createCommitMutationForEnvironment_DEPRECATED({mutation:h!==void 0?h:h=b("MWChatChangeSoundsSettingMutation.graphql")});g.commit=a}),98);
__d("MWChatChangeTurnOffTabsSettingMutation",["MWChatChangeTurnOffTabsSettingMutation.graphql","createCommitMutation_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;a=d("createCommitMutation_DEPRECATED").createCommitMutationForEnvironment_DEPRECATED({mutation:h!==void 0?h:h=b("MWChatChangeTurnOffTabsSettingMutation.graphql")});g.commit=a}),98);
__d("MWChatSoundsSettingSubscription",["CometRelay","MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription.graphql");function a(a,b){return d("CometRelay").requestSubscription(a,{onNext:b,subscription:i,variables:{input:{}}})}g.subscribe=a}),98);
__d("MWChatTabsSettingSubscription",["CometRelay","MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription.graphql");function a(a,b){return d("CometRelay").requestSubscription(a,{onNext:b,subscription:i,variables:{input:{}}})}g.subscribe=a}),98);
__d("useCometHomeChatSettings",["Actor","CometRelay","MWCallBlockedUntilSettingMutation","MWChatChangeSoundsSettingMutation","MWChatChangeTurnOffTabsSettingMutation","MWChatSidebarStateSettingMutation","MWChatSoundsSettingSubscription","MWChatTabsSettingSubscription","RTWebCallBlockedSettingSubscription","qex","react","useCometHomeChatSettingsQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;f=d("react");var i=f.useCallback,j=f.useEffect,k=function(a,b){return function(c){c=c.getRoot();if(c==null)return;c=c.getLinkedRecord("viewer");if(c==null)return;c.setValue(b,a)}},l=h!==void 0?h:h=b("useCometHomeChatSettingsQuery.graphql");function a(a){var b,e,f,g;m();a=d("CometRelay").usePreloadedQuery(l,a);b=(b=(b=a.viewer)==null?void 0:b.call_blocked_until)!=null?b:0;e=(e=(e=a.viewer)==null?void 0:e.chat_sounds_on)!=null?e:!0;f=((f=a.viewer)==null?void 0:f.chat_tabs_turned_off)===!0;g=((g=a.viewer)==null?void 0:g.chat_sidebar_is_collapsed)===!0;var h=c("qex")._("1285");a=h===!0?((h=a.viewer)==null?void 0:(h=h.presence_view_side_settings)==null?void 0:h.is_active_status_viewable)===!0:((h=a.viewer)==null?void 0:h.chat_visibility)===!0;return{activeStatusOn:a,callBlockedUntil:b,chatSidebarIsCollapsed:g,chatSoundsOn:e,chatTabsTurnedOff:f}}function e(){var a=d("CometRelay").useRelayEnvironment();return{onChangeSidebarIsCollapsedSetting:function(b){c("MWChatSidebarStateSettingMutation")({environment:a,isCollapsed:b})},onChangeSoundsSetting:function(b){d("MWChatChangeSoundsSettingMutation").commit(a,{sounds_on:b})},onChangeTurnOffTabsSetting:function(b){d("MWChatChangeTurnOffTabsSettingMutation").commit(a,{turn_off_chat_tabs:b})},setCallBlockedUntil:function(b){d("MWCallBlockedUntilSettingMutation").commit(a,{call_blocked_until:b})}}}f=function(){var a=d("CometRelay").useQueryLoader(l),b=a[0],c=a[1];a=i(function(){return c({})},[c]);j(function(){return c({})},[c]);return[b,a]};function m(){var a=d("CometRelay").useRelayEnvironment(),b=d("Actor").useActor(),c=b[0];j(function(){var b={viewer_id:c},e=[d("RTWebCallBlockedSettingSubscription").subscribe(a,b,function(b){b=b==null?void 0:b.rtweb_call_blocked_setting_subscribe;b!=null&&a.commitUpdate(k("call_blocked_until",b.call_blocked_until))}),d("MWChatSoundsSettingSubscription").subscribe(a,function(b){b=b==null?void 0:b.messenger_chat_sounds_setting_subscribe;b!=null&&a.commitUpdate(k("chat_sounds_on",b.chat_sounds_enabled))}),d("MWChatTabsSettingSubscription").subscribe(a,function(b){b=b==null?void 0:b.messenger_chat_tabs_setting_subscribe;b!=null&&a.commitUpdate(k("chat_tabs_turned_off",!b.chat_tabs_enabled))})];return function(){e.forEach(function(a){return a.dispose()})}})}g.query=l;g.useCometHomeChatSettings=a;g.useCometHomeChatSettingsMutations=e;g.useCometHomeChatSettingsPreloadedQuery=f}),98);
__d("MWInboxSettingsMenuIcons.bs",["cr:1723554"],(function(a,b,c,d,e,f){"use strict";c=(a=b("cr:1723554")).Settings;d=a.ActiveContacts;e=a.MessageRequests;b=a.HiddenChats;var g=a.RestrictedAccounts,h=a.Help,i=a.ReportAProblem,j=a.About,k=a.Data,l=a.Terms,m=a.PrivacyPolicy,n=a.CookiePolicy,o=a.NewMessengerDesktopClient,p=a.LogOut,q=a.DownloadYourInformation,r=a.TrustedLogins,s=a.MessengerCode,t=a.SecurityAlerts;f.$MDSSettingsMenuIcons$OR$TetraSettingsMenuIcons$requireCond=a;f.Settings=c;f.ActiveContacts=d;f.MessageRequests=e;f.HiddenChats=b;f.RestrictedAccounts=g;f.Help=h;f.ReportAProblem=i;f.About=j;f.Data=k;f.Terms=l;f.PrivacyPolicy=m;f.CookiePolicy=n;f.NewMessengerDesktopClient=o;f.LogOut=p;f.DownloadYourInformation=q;f.TrustedLogins=r;f.MessengerCode=s;f.SecurityAlerts=t}),null);
__d("TetraSettingsMenuIcons.bs",["ix","fbicon"],(function(a,b,c,d,e,f,g){"use strict";c=(a=b("fbicon"))._(g("497570"),20);d={icon:c};e=a._(g("1707065"),20);b={icon:e};c=a._(g("610742"),20);e={icon:c};c=a._(g("577043"),20);c={icon:c};var h=a._(g("995804"),20);h={icon:h};var i=a._(g("496959"),20);i={icon:i};var j=a._(g("502065"),20);j={icon:j};var k=a._(g("479180"),20);k={icon:k};var l=a._(g("174632"),20);l={icon:l};var m=a._(g("1707074"),20);m={icon:m};var n=a._(g("1707074"),20);n={icon:n};var o=a._(g("1707074"),20);o={icon:o};var p=a._(g("505620"),20);p={icon:p};var q=a._(g("492717"),20);q={icon:q};var r=a._(g("152046"),20);r={icon:r};var s={icon:void 0},t={icon:void 0};a=a._(g("497248"),20);g={icon:a};f.Settings=d;f.ActiveContacts=b;f.MessageRequests=e;f.HiddenChats=c;f.RestrictedAccounts=h;f.Help=i;f.ReportAProblem=j;f.About=k;f.Data=l;f.Terms=m;f.PrivacyPolicy=n;f.CookiePolicy=o;f.NewMessengerDesktopClient=p;f.TrustedLogins=q;f.MessengerCode=r;f.LogOut=s;f.DownloadYourInformation=t;f.SecurityAlerts=g}),null);
__d("LSDataUseConsentState.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").zero;c=b("bs_caml_int64").one;d=[0,2];e=[0,3];b=[0,4];f.unset=a;f.consented=c;f.withdrawn=d;f.notApplicable=e;f.seen=b}),null);
__d("XMessengerDotComLogoutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/logout/",{next:{type:"String"}})}),null);