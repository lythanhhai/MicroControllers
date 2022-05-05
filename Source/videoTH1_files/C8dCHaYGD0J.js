if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometVideoHomeCatalogRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5154045221314757",metadata:{},name:"CometVideoHomeCatalogRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeInjectedLiveVideoQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5070901589684714",metadata:{},name:"CometVideoHomeInjectedLiveVideoQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeLatestRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5226166880775062"}),null);
__d("CometVideoHomeLatestRootQuery$Parameters",["CometVideoHomeLatestRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeLatestRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeLatestRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeLiveRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4935263053250504",metadata:{},name:"CometVideoHomeLiveRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeSavedRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5251913141538434"}),null);
__d("CometVideoHomeSavedRootQuery$Parameters",["CometVideoHomeSavedRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeSavedRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeSavedRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeCatalogRoot.entrypoint",["CometVideoHomeCatalogRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeCatalogRoot.react").__setRef("CometVideoHomeCatalogRoot.entrypoint"),function(a){return{queries:{catalogRootQueryReference:{parameters:b("CometVideoHomeCatalogRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("CometVideoHomeLiveEntryPointVariables",["WebPixelRatio","qex"],(function(a,b,c,d,e,f,g){"use strict";a={scale:d("WebPixelRatio").get()};b={feedLocation:"VIDEO_HOME_LIVE_TAB",isComet:!0};e=babelHelpers["extends"]({},a,{isComet:!0});f=babelHelpers["extends"]({},a,b,{openInPageLiveTab:!!c("qex")._("1685")});g.CometVideoHomeLiveHeroUFIEntryPointVariables=b;g.CometVideoHomeLiveHeroEntryPointVariables=e;g.CometVideoHomeLiveRootEntryPointVariables=f}),98);
__d("CometVideoHomeInjectedLiveVideo.entrypoint",["CometVideoHomeInjectedLiveVideoQuery$Parameters","CometVideoHomeLiveEntryPointVariables","JSResourceForInteraction","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=babelHelpers["extends"]({},d("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveHeroEntryPointVariables,d("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveHeroUFIEntryPointVariables,{isLoggedOut:c("gkx")("976093"),videoID:(a=a.routeProps.v)!=null?a:""});return{queries:{injectedLiveVideoQueryReference:{parameters:b("CometVideoHomeInjectedLiveVideoQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometVideoHomeInjectedLiveVideo.react").__setRef("CometVideoHomeInjectedLiveVideo.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeLatestRoot.entrypoint",["CometVideoHomeLatestRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeLatestRoot.react").__setRef("CometVideoHomeLatestRoot.entrypoint"),function(a){a=a.routeProps.is_revamped_version_enabled;return{extraProps:{routeProps:{is_revamped_version_enabled:a}},queries:{latestRootQueryReference:{parameters:b("CometVideoHomeLatestRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("CometVideoHomeLiveRootEntrypoint.entrypoint",["CometVideoHomeLiveEntryPointVariables","CometVideoHomeLiveRootQuery$Parameters","JSResourceForInteraction","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{liveRootQueryReference:{parameters:b("CometVideoHomeLiveRootQuery$Parameters"),variables:babelHelpers["extends"]({},d("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveRootEntryPointVariables,{isLoggedOut:c("gkx")("976093"),trigger_data:{injected_video_id:a.routeProps.v}})}}}},root:c("JSResourceForInteraction")("CometVideoHomeLiveRoot.react").__setRef("CometVideoHomeLiveRootEntrypoint.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeLiveInjectionRoot.entrypoint",["CometVideoHomeInjectedLiveVideo.entrypoint","CometVideoHomeLiveRootEntrypoint.entrypoint","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeLiveInjectionRoot.react").__setRef("CometVideoHomeLiveInjectionRoot.entrypoint"),function(a){return{entryPoints:{injectedLiveVideoNestedEntryPoint:{entryPoint:b("CometVideoHomeInjectedLiveVideo.entrypoint"),entryPointParams:a},liveRootNestedEntryPoint:{entryPoint:b("CometVideoHomeLiveRootEntrypoint.entrypoint"),entryPointParams:a}},extraProps:{externalLogID:a.routeProps.externalLogID,t:a.routeProps.t,v:a.routeProps.v}}});g["default"]=a}),98);
__d("CometVideoHomeLiveRoot.entrypoint",["CometVideoHomeLiveEntryPointVariables","CometVideoHomeLiveRootQuery$Parameters","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeLiveRoot.react").__setRef("CometVideoHomeLiveRoot.entrypoint"),function(a){return{queries:{liveRootQueryReference:{parameters:b("CometVideoHomeLiveRootQuery$Parameters"),variables:babelHelpers["extends"]({},d("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveRootEntryPointVariables,{isLoggedOut:c("gkx")("976093"),trigger_data:{injected_video_id:null}})}}}});g["default"]=a}),98);
__d("CometVideoHomeSavedRoot.entrypoint",["CometVideoHomeSavedRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeSavedRoot.react").__setRef("CometVideoHomeSavedRoot.entrypoint"),function(a){a=a.routeProps.is_revamped_version_enabled;return{extraProps:{routeProps:{is_revamped_version_enabled:a}},queries:{savedRootQueryReference:{parameters:b("CometVideoHomeSavedRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);