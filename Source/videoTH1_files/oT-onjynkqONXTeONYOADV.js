if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("BirthdayCometPostMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2470990426314874"}),null);
__d("BirthdayCometPostMutation.graphql",["BirthdayCometPostMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"story_id",storageKey:null},e={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"has_viewer_posted_for_birthday",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"BirthdayCometPostMutation",selections:[{alias:null,args:c,concreteType:"StoryCreateResponsePayload",kind:"LinkedField",name:"story_create",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[e],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[f],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"BirthdayCometPostMutation",selections:[{alias:null,args:c,concreteType:"StoryCreateResponsePayload",kind:"LinkedField",name:"story_create",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[e,g],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[f,g],storageKey:null}],storageKey:null}]},params:{id:b("BirthdayCometPostMutation_facebookRelayOperation"),metadata:{},name:"BirthdayCometPostMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("PagesCometUnownedPhotosTabRootQuery$Parameters",["PagesCometUnownedPhotosTabRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PagesCometUnownedPhotosTabRootQuery_facebookRelayOperation"),metadata:{},name:"PagesCometUnownedPhotosTabRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("BirthdayCometPostMutation",["BirthdayCometPostMutation.graphql","CometRelay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("BirthdayCometPostMutation.graphql");function a(a){var b=a.environment,c=a.input,e=a.onCompleted,f=a.onError;a=a.updater;c={input:babelHelpers["extends"]({},c)};return d("CometRelay").commitMutation(b,{mutation:i,onCompleted:e,onError:f,updater:a,variables:c})}g.commit=a}),98);
__d("EventCometInsightsCardItem.react",["CometAspectRatioContainer.react","CometCard.react","CometPressable.react","CometRow.react","CometRowItem.react","CometTooltip.react","TetraIcon.react","TetraText.react","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.aspectRatio,d=a.body,e=a.icon,f=a.metaLine,g=a.onPress,i=a.textLevel,j=a.title;a=a.tooltip;f=f!=null?h.jsx(c("TetraText.react"),{type:"body4",children:f}):null;b=h.jsx(c("CometCard.react"),{background:"light-wash",children:h.jsxs(c("CometAspectRatioContainer.react"),{aspectRatio:b,children:[h.jsx(c("CometRow.react"),{paddingTop:12,children:h.jsx(c("CometRowItem.react"),{children:h.jsx(c("TetraIcon.react"),{color:"secondary",icon:e})})}),h.jsx(c("CometRow.react"),{children:h.jsx(c("CometRowItem.react"),{children:h.jsx(c("TetraText.react"),{numberOfLines:1,type:"headline3",children:j})})}),h.jsx(c("CometRow.react"),{expanding:!0,paddingVertical:16,children:h.jsx(c("CometRowItem.react"),{expanding:!0,verticalAlign:"bottom",children:h.jsx(c("TetraTextPairing.react"),{body:d,bodyLineLimit:4,level:i,meta:f,metaLineLimit:1})})})]})});return a==null?b:h.jsx(c("CometTooltip.react"),{position:"above",tooltip:a,children:h.jsx(c("CometPressable.react"),{expanding:!0,onPress:g,children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometInsightsMetricCardItem.react",["fbt","CometNumber.react","EventCometInsightsCardItem.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.aspectRatio,d=a.icon,e=a.link,f=a.metricTotal,g=a.netIncreaseFromPastWeek,j=a.onPress,k=a.period;k=k===void 0?7:k;var l=a.textLevel,m=a.title;a=a.tooltip;e=g==null?e:i.jsxs(i.Fragment,{children:[i.jsxs("b",{children:[g<0?"-":"+",i.jsx(c("CometNumber.react"),{decimals:0,number:g})]})," ",h._(/*FBT_CALL*/{"*":"{lookback_period} ng\u00e0y qua"}/*FBT_CALL*/,[h._plural(k),h._param("lookback_period",k>1?k:null)])]});return i.jsx(c("EventCometInsightsCardItem.react"),{aspectRatio:b,body:i.jsxs(c("TetraText.react"),{type:"entityHeaderHeadline2",children:[" ",f]}),icon:d,metaLine:e,onPress:j,textLevel:l,title:m,tooltip:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometAdminSelfViewJobsRoot.entrypoint",["JSResourceForInteraction","PageAdminCometManageJobsRootJobsQuery$Parameters","buildCometSinglePageRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometSinglePageRoute.entrypoint")(c("JSResourceForInteraction")("PageAdminCometManageJobsRoot.react").__setRef("PagesCometAdminSelfViewJobsRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{extraProps:{pageID:a},queries:{pageAdminCometManageJobsRootClosedJobsQueryReference:{parameters:b("PageAdminCometManageJobsRootJobsQuery$Parameters"),variables:{include_third_party_sources:!1,job_opening_status:["CLOSED"],pageID:a}},pageAdminCometManageJobsRootDraftJobsQueryReference:{parameters:b("PageAdminCometManageJobsRootJobsQuery$Parameters"),variables:{include_third_party_sources:!1,job_opening_status:["DRAFT"],pageID:a}},pageAdminCometManageJobsRootOpenJobsQueryReference:{parameters:b("PageAdminCometManageJobsRootJobsQuery$Parameters"),variables:{include_third_party_sources:!0,job_opening_status:["OPEN"],pageID:a}}}}});g["default"]=a}),98);
__d("PagesCometAdminSelfViewJobsContainerRoot.entrypoint",["JSResourceForInteraction","PagesCometAdminSelfViewJobsRoot.entrypoint","buildCometPageAdminRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometPageAdminRoute.entrypoint")(c("JSResourceForInteraction")("PagesCometAdminSelfViewRoot.react").__setRef("PagesCometAdminSelfViewJobsContainerRoot.entrypoint"),function(a){return{entryPoints:{pageSelfViewEntryPoint:{entryPoint:b("PagesCometAdminSelfViewJobsRoot.entrypoint"),entryPointParams:a}},extraProps:a}});g["default"]=a}),98);
__d("PagesCometUnownedPhotosTabRoot.entrypoint",["JSResourceForInteraction","PagesCometUnownedPhotosTabRootQuery$Parameters","WebPixelRatio","buildPagesUnownedSinglePageRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("JSResourceForInteraction")("PagesCometUnownedPhotosTabRoot.react").__setRef("PagesCometUnownedPhotosTabRoot.entrypoint");e=c("buildPagesUnownedSinglePageRoute.entrypoint")(a,function(a){a=a.routeProps.pageID;return{queries:{unownedPagePhotosRootQueryReference:{parameters:b("PagesCometUnownedPhotosTabRootQuery$Parameters"),variables:{pageID:a,scale:d("WebPixelRatio").get()}}}}});g["default"]=e}),98);
__d("CometPageAdminServicesRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4798719420234891"}),null);
__d("FundraiserPageUpdatesRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5318660061497681"}),null);/*FB_PKG_DELIM*/
__d("FundraiserCampaignType",[],(function(a,b,c,d,e,f){a=Object.freeze({FACEBOOK_TO_USER:1,DONATE_BUTTON_ON_PAGE:2,DONATE_BUTTON_ON_ADS:3,CHARITY_TO_USER:4,DONATE_BUTTON_ON_POST:5,USER_TO_CHARITY:6,DONATE_BUTTON_ON_LIVE_VIDEO:7,LIGHTWEIGHT_FUNDRAISER_FOR_STORY:8,PERSON_FOR_PERSON:9,CRISIS_FOR_CHARITY:10,IG_STICKER_FOR_CHARITY:11,PERSON_FOR_CAUSE:12,PROFILE_FOR_CHARITY:13,IG_CHARITY_BUSINESS_PROFILE:14,PERSON_FOR_CHARITIES_IN_CAUSE:15,IG_LIVE_FOR_CHARITY:16,IG_STANDALONE_FOR_PERSON:17,IG_STANDALONE_FOR_CHARITY:18,TEAM_FUNDRAISER_FOR_CHARITY:19});f["default"]=a}),66);
__d("SocialGoodCharityActionsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:SocialGoodCharityActionsLoggerConfig")}),null);
__d("SocialGoodCharityActionsLoggingUtils",["FundraiserCampaignType","SocialGoodCharityActionsTypedLoggerLite","StoriesUtils","WebSession","getJSEnumSafe"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){c("SocialGoodCharityActionsTypedLoggerLite").log(babelHelpers["extends"]({campaign_type:8,explicit_post_id:b==null?null:d("StoriesUtils").cardID2ThreadID(b),parent_event_type:"create"},a))}function b(a,b,e){c("SocialGoodCharityActionsTypedLoggerLite").log({campaign_id:b,event:a,parent_event_type:"invite",source_attributes:{session_id:d("WebSession").getId(),source_id:b,source_name:(a=e)!=null?a:"fundraiser"}})}function e(a,b,d,e,f){c("SocialGoodCharityActionsTypedLoggerLite").log({attributes:f,campaign_id:d,campaign_type:c("getJSEnumSafe")(c("FundraiserCampaignType"),e),event:a,parent_event_type:"donate",source_attributes:b})}function f(a,b,d,e,f){c("SocialGoodCharityActionsTypedLoggerLite").log({attributes:e,campaign_id:b,campaign_type:c("getJSEnumSafe")(c("FundraiserCampaignType"),f),event:a,parent_event_type:"interact",source_attributes:{source_name:d}})}function h(a,b,d,e,f){c("SocialGoodCharityActionsTypedLoggerLite").log({attributes:e,campaign_id:b,campaign_type:c("getJSEnumSafe")(c("FundraiserCampaignType"),f),event:a,parent_event_type:"interact",source_attributes:{source_name:d}})}g.logFundraiserForStoryCreateEvent=a;g.logFundraiserInviteEvent=b;g.logFundraiserDonateEvent=e;g.logFundraiserInteractEvent=f;g.logChallengesInteractEvent=h}),98);