if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("ProfileTabConst",[],(function(a,b,c,d,e,f){e.exports={AD_CENTER:"ad_center",ADMINS:"admins",ALBUM:"album",ALBUMS:"albums",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",EXCLUSIVE_CONTENT:"exclusive_content",FANS:"friends_likes",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",FUN_FACTS:"did_you_know",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",GROUPS_ADMINED:"groups_admined",GUIDES:"guides",INFO:"info",INSIGHTS:"new_insights",LIKES:"likes",LINEAR_CHANNELS:"linear_channels",LIVE_VIDEOS:"live_videos",LOCATIONS:"locations",MAP:"map",MEMBERS:"members",MEMORIAL_CONTACT:"legacy_contact",MENTIONS:"mentions",MY_NOTES:"notes_my_notes",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PAST_HOSTED_EVENTS:"phe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_BY:"photos_by",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",PROFESSIONAL_DASHBOARD:"professional_dashboard",RESUME:"resume",REVIEWS:"reviews",REVIEWS_GIVEN:"reviews_given",SAVE_LISTS:"lists",SAVED_FOR_LATER:"saved",SHOP_TAB:"shop_tab",SPACES:"post_sets",STORIES_ARCHIVE:"archive",SPORTS:"sports",SUBSCRIBER_HUB:"subscriber_hub",SUPPORTERS:"supporters",TAGGED_NOTES:"notes_tagged",TASKS:"tasks",TIMELINE:"timeline",TRIBUTES:"tributes",TIMELINE_OVERVIEW:"grid",UPCOMING_HOSTED_EVENTS:"uhe",VEHICLES:"vehicles_tab",VIDEOS:"videos",VOLUNTEERING:"volunteering",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_FOOD_DRINK_MENU:"food_drink_menu",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",HOME:"home",PAGE_JOBS:"jobs",PAGE_LIVE_VIDEOS:"page_live_videos",PAGE_EPISODES:"episodes",PAGE_SHOP_NT:"shop_nt",PAGE_SHOW:"show",PAGE_PLAYLISTS:"playlists",PAGE_SHOW_VIDEOS:"show_videos",PAGE_COLLECTIONS:"collections",PAGE_SERIES:"series",PAGE_CHANNEL:"channel",PAGE_VEHICLES:"vehicles",CAST_AND_CREW:"cast_and_crew",COMMUNITY:"community",COMMUNITY_PERMALINK:"community_permalink",COMMUNITY_ADMINS:"community_admins",COMMUNITY_MEMBERS:"community_members",COMMUNITY_RULES:"community_rules",FEATURING:"featuring",FREQUENTLY_ASKED_QUESTIONS:"frequently_asked_questions",HASHTAGS:"hashtags",INSTAGRAM:"instagram",LOYALTY:"loyalty",MEMBERS_BADGES:"members_badges",MOVIE_PROVIDER:"movie_provider",PODCASTS:"podcasts",PROFILE_OVERLAYS:"profile_overlays",STORY:"story",CUSTOM:"custom",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video",OG_APP_INSTAGRAM:"app_instapp",OG_APP_POKEDEX:"app_fbpokedex",API:"API",BIRTHDAY:"Birthday",POST:"Post",GENERIC:"Generic",PAGE_DONATE:"Page",EVENT:"Event"}}),null);
__d("CometButtonCommandStopper.react",["CometComponentWithKeyCommands.react","CometKeys","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=[{command:{key:c("CometKeys").SPACE},description:a.label,handler:function(){}},{command:{key:c("CometKeys").ENTER},description:a.label,handler:function(){}}];return h.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:b,debugName:"Button",children:a.children})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesTestUtils",["Banzai","BanzaiConsts"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){this.$1=!1,this.$2=[]}var b=a.prototype;b.initializeBanzaiLogging=function(){var a=this;if(this.$1)return;this.$1=!0;this.$2=[];c("Banzai").subscribe(c("BanzaiConsts").SEND,function(){var b=c("Banzai")._testState();b=b.postBuffer;a.$3(b)});c("Banzai").flush&&c("Banzai").flush()};b.$3=function(a){var b=this;a=a.filter(function(a){var c=a[0];return c==="require_cond_exposure_logging"||c==="gk2_exposure"||!(c.startsWith("logger:DirectMessagingLoggerConfig")||c.includes("falco")||c.startsWith("xtrackable:"))?!1:b.$2.find(function(b){return b[0]===a[0]&&b[2]===a[2]})===void 0});this.$2=this.$2.concat(a)};b.getLogs=function(){return this.$2};b.getMockedCardID=function(a,b,c){return(a*1e3+b*100+c).toString()};b.getNavListName=function(a){return"friend"+a};return a}();b=new a();g["default"]=b}),98);
__d("StoriesSuspensePauseContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={isPaused:!1,setPause:function(a,b){}};c=a.createContext(b);g["default"]=c}),98);
__d("StoriesLoggerSession",["StoriesTestUtils","gkx","uuid"],(function(a,b,c,d,e,f,g){"use strict";var h=null,i=null,j=null,k=null,l=function(){k=null},m=function(a){h=a},n=function(a){i=a==null?c("uuid")():a},o=function(a){j=a==null?c("uuid")():a};function a(){return k}function b(){return h}function d(){return i}function e(){return j}function f(a,b,d){c("gkx")("709647")&&c("StoriesTestUtils").initializeBanzaiLogging(),n(a),o(b),m(d),l()}var p=function(a){k=a};g._initializeCloseGesture=l;g._initializeOpenViewerSource=m;g._initializeTraySessionID=n;g._initializeViewerSessionID=o;g.getCloseGesture=a;g.getOpenViewerSource=b;g.getTraySessionID=d;g.getViewerSessionID=e;g.initialize=f;g.setCloseGesture=p}),98);
__d("useStoriesViewerClose",["CometRouteRenderType","MessengerEnvironment","StoriesLoggerSession","StoriesLoggingConstants","cr:869845","gkx","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h=c("gkx")("708253");function a(){var a=d("CometRouteRenderType").useIsPushView(),e=c("useCometRouterDispatcher")();return function(f){var g=d("StoriesLoggerSession").getOpenViewerSource();d("StoriesLoggerSession").setCloseGesture(f);b("cr:869845")?c("MessengerEnvironment").messengerui?b("cr:869845").getInstance().closeDialogMessenger():g===c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE?b("cr:869845").getInstance().closeArchiveDialogAndRefresh():b("cr:869845").getInstance().navigateToEntryPoint():h&&f===c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.AUTO_EXIT&&(!a&&e&&e.goBack?e.goBack():a&&e&&e.popPushView&&e.popPushView())}}g["default"]=a}),98);
__d("StoriesCloseButton.react",["fbt","ix","CometPressable.react","IconSource","StoriesLoggingConstants","StoriesSuspensePauseContext","TetraIcon.react","cr:1032347","gkx","react","useStoriesViewerClose"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useContext,l=c("gkx")("708253");function a(a){a=a.dark;a=a===void 0?!1:a;var d=c("useStoriesViewerClose")(),e=k(c("StoriesSuspensePauseContext"));e=e.setPause;if(l)return null;var f=function(a){d(c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.CLOSE_BUTTON_EXIT)};a=a?new(c("IconSource"))("FB",i("1351092"),24):new(c("IconSource"))("FB",i("1495001"),24);return j.jsxs("div",{className:"i2p6rm4e heur4gxb art1omkt kmdw4o4n kr520xx4 pmk7jnqg qwwmc0zo n7fi1qx3 j83agx80","data-testid":void 0,children:[b("cr:1032347")&&j.jsx(b("cr:1032347"),{setPause:e}),j.jsx(c("CometPressable.react"),{"aria-label":h._(/*FBT_CALL*/"\u0110\u00f3ng"/*FBT_CALL*/),display:"inline",onPress:f,overlayDisabled:!0,children:j.jsx("div",{className:"gu00c43d sjgh65i0 wkznzc2l tr9rh885 j83agx80 nhd2j8a9",children:j.jsx(c("TetraIcon.react"),{icon:a,size:24})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesLoggerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({logger:{clickInteractiveFeedbackReplyButtonLog:function(a){return void 0},closeStoryLog:function(){return void 0},deleteLog:function(){return void 0},getImpressionConfig:function(){return void 0},getImpressionData:function(a){return void 0},getTimespentConfig:function(){return void 0},handleLiveVideoLog:function(a){return void 0},openLinkLog:function(){return void 0},openMediaLog:function(a){return void 0},openStoryLog:function(){return void 0},openViewerSheetLog:function(){return void 0},pauseByKeyboardLog:function(a,b){return void 0},pauseLog:function(a){return void 0},replyAttemptCompletedLog:function(a,b){return void 0},replyLog:function(a){return void 0},replySentWhenSmartReplyShownLog:function(a,b,c,d){return void 0},smartReplyImpressionLog:function(a,b,c){return void 0},smartReplyTapLog:function(a,b){return void 0},storyMediaViewLog:function(a){return void 0},storyNavigationLog:function(a){return void 0},visitPageLog:function(){return void 0}}});g["default"]=b}),98);
__d("StoriesTrayLoggerSessionContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={trackingStrings:new Map()};c=a.createContext(b);e=c;g["default"]=e}),98);
__d("StoriesTrayLoggerSessionProvider",["StoriesTrayLoggerSessionContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.children,d=a.trackingStrings;a=i(function(){return{trackingStrings:d}},[d]);return h.jsx(c("StoriesTrayLoggerSessionContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesViewerMenuButton.react",["CometButtonCommandStopper.react","CometPressable.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=function(b){var c=b.type==="press";c||b.preventDefault();var d=a.onClick;d!=null&&(!c&&b.type!=="keydown"&&b.stopPropagation(),d())},e=a.icon,f=a.label,g=a.testid;return h.jsx(c("CometButtonCommandStopper.react"),{label:f,children:h.jsx(c("CometPressable.react"),{display:"inline",label:f,onPress:d,overlayDisabled:!0,ref:b,children:h.jsx("div",{className:"h676nmdw oygrvhab oi9244e8 kvgmc6g5 nhd2j8a9","data-testid":void 0,children:e})})})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("storiesViewerSuspenseEmitter",["BaseEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h=new(c("BaseEventEmitter"))();a={bucketLoaded:function(){h.emit("bucketLoaded")},listenToBucketLoaded:function(a){var b=h.addListener("bucketLoaded",a);return function(){return b.remove()}},listenToNavListItemTransition:function(a){var b=h.addListener("navListTransition",a);return function(){return b.remove()}},listenToPauseRequest:function(a){var b=h.addListener("requestPause",a);return function(){return b.remove()}},listenToReshareRequest:function(a){var b=h.addListener("reshareRequest",a);return function(){return b.remove()}},listenToTransitionRequest:function(a){var b=h.addListener("transitionRequest",a);return function(){return b.remove()}},navListItemTransition:function(){h.emit("navListTransition")},requestBucketTransition:function(a,b){b===void 0&&(b=1),h.emit("transitionRequest",a,b)},requestPause:function(a,b){h.emit("requestPause",a,b)},requestReshare:function(a){h.emit("reshareRequest",a)}};b=a;g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("CometComposerPluginsDispatchContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("CometComposerPreSubmitHooksContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({current:new Map()});g["default"]=b}),98);
__d("useCometComposerDecorator",["CometComposerPluginsDispatchContext","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useEffect;function a(a){var b=h(c("CometComposerPluginsDispatchContext"));i(function(){b({decorator:a,type:"install_decorator"});return function(){return b({decorator:a,type:"uninstall_decorator"})}},[a,b])}g["default"]=a}),98);
__d("useCometComposerHandler",["CometComposerPluginsDispatchContext","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useEffect;function a(a){var b=h(c("CometComposerPluginsDispatchContext"));i(function(){b({handler:a,type:"install_handler"});return function(){return b({handler:a,type:"uninstall_handler"})}},[b,a])}g["default"]=a}),98);
__d("useComposerPreSubmitHook",["CometComposerPreSubmitHooksContext","useContextRef"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("useContextRef")(a,c("CometComposerPreSubmitHooksContext"))}g["default"]=a}),98);
__d("getPlainTextFromDeferredDraftEditorState",[],(function(a,b,c,d,e,f){"use strict";function a(a){switch(a.__type){case"plain-text":return a.text;case"editor-state-based":return a.draftEditorState.getCurrentContent().getPlainText();default:return a}}f["default"]=a}),66);
__d("composerEditorStateViewStateReducer",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){switch(b.type){case"update_editor_state":if(b.editorState!==a.editorState)return babelHelpers["extends"]({},a,{editorState:b.editorState});break;case"update_draft_editor_state":var c=a.editorState;if(c!=null&&c.__type==="editor-state-based"&&c.draftEditorState!==b.draftEditorState)return babelHelpers["extends"]({},a,{editorState:babelHelpers["extends"]({},c,{draftEditorState:b.draftEditorState})});break}return a}f["default"]=a}),66);
__d("FeedComposerCometTextStyleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({color:"primary-text",fontSize:24});g["default"]=b}),98);
__d("CometMentionsA11yContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(function(){});g["default"]=b}),98);
__d("StoriesUtils",["ExecutionEnvironment","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h={};b=function(a){h[a]==null&&(h[a]=window.atob(a).split(":")[2]);return h[a]};function a(){var a={format:"image/jpeg",quality:.92};return!c("UserAgent").isBrowser("Chrome")?a:{format:"image/webp",quality:.86}}var i=500;e=function(a,b){b===void 0&&(b=i);return!d("ExecutionEnvironment").canUseDOM?!1:a<b};g.cardID2ThreadID=b;g.getBlobImageParams=a;g.shouldResizeToViewStories=e}),98);
__d("Keys",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LEFT_WINDOW_KEY:91,RIGHT_WINDOW_KEY:92,SELECT_KEY:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL_POINT:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMI_COLON:186,EQUAL_SIGN:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRAKET:221,SINGLE_QUOTE:222});f["default"]=a}),66);
__d("getActiveElement",[],(function(a,b,c,d,e,f){function a(a){a===void 0&&(a=document);if(a===void 0)return null;try{return a.activeElement||a.body}catch(b){return a.body}}f["default"]=a}),66);
__d("getEntityMatcher",[],(function(a,b,c,d,e,f){function g(a,b){return b.getEntity(a)}function a(a,b){return function(c,d,e){var f=b||g;c.findEntityRanges(function(b){b=b.getEntity();return typeof b==="string"&&a(f(b,e))},d)}}f["default"]=a}),66);
__d("DraftEditorFlushControlled",["ReactDOMComet"],(function(a,b,c,d,e,f){a=b("ReactDOMComet").unstable_flushControlled;e.exports=a}),null);
__d("isSoftNewlineEvent",["Keys"],(function(a,b,c,d,e,f){"use strict";function a(a){return a.which===b("Keys").RETURN&&(a.getModifierState("Shift")||a.getModifierState("Alt")||a.getModifierState("Control"))}e.exports=a}),null);
__d("KeyBindingUtil",["UserAgent","isSoftNewlineEvent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h={isCtrlKeyCommand:function(a){return!!a.ctrlKey&&!a.altKey},isOptionKeyCommand:function(a){return g&&a.altKey},usesMacOSHeuristics:function(){return g},hasCommandModifier:function(a){return g?!!a.metaKey&&!a.altKey:h.isCtrlKeyCommand(a)},isSoftNewlineEvent:b("isSoftNewlineEvent")};e.exports=h}),null);
__d("getDefaultKeyBinding",["KeyBindingUtil","Keys","UserAgent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h=g&&b("UserAgent").isBrowser("Firefox < 29"),i=b("KeyBindingUtil").hasCommandModifier,j=b("KeyBindingUtil").isCtrlKeyCommand;function k(a){return g&&a.altKey||j(a)}function l(a){return!i(a)?null:a.shiftKey?"redo":"undo"}function m(a){return!g&&a.shiftKey?null:k(a)?"delete-word":"delete"}function n(a){return i(a)&&g?"backspace-to-start-of-line":k(a)?"backspace-word":"backspace"}function a(a){switch(a.keyCode){case 66:return i(a)?"bold":null;case 68:return j(a)?"delete":null;case 72:return j(a)?"backspace":null;case 73:return i(a)?"italic":null;case 74:return i(a)?"code":null;case 75:return g&&j(a)?"secondary-cut":null;case 77:return j(a)?"split-block":null;case 79:return j(a)?"split-block":null;case 84:return g&&j(a)?"transpose-characters":null;case 85:return i(a)?"underline":null;case 87:return g&&j(a)?"backspace-word":null;case 88:return i(a)&&a.shiftKey?"strikethrough":null;case 89:return j(a)?g?"secondary-paste":"redo":null;case 90:return l(a)||null;case b("Keys").RETURN:return"split-block";case b("Keys").DELETE:return m(a);case b("Keys").BACKSPACE:return n(a);case b("Keys").LEFT:return h&&i(a)?"move-selection-to-start-of-block":null;case b("Keys").RIGHT:return h&&i(a)?"move-selection-to-end-of-block":null;default:return null}}e.exports=a}),null);
__d("getHashtagRegex",["getHashtagRegexString"],(function(a,b,c,d,e,f){function a(){return new RegExp(b("getHashtagRegexString")(),"ig")}f["default"]=a}),66);/*FB_PKG_DELIM*/
__d("StoriesTrayTileWatchLivePopover_bucket.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c=[a];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesTrayTileWatchLivePopover_bucket",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"live_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],type:"DirectMessageThreadBucket",abstractKey:null},{kind:"InlineDataFragmentSpread",name:"useStoriesLogger_bucketNode",selections:[{kind:"InlineDataFragmentSpread",name:"StoriesLogger_bucketNode",selections:[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"story_bucket_owner",plural:!1,selections:[b,{kind:"InlineFragment",selections:c,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"story_bucket_type",storageKey:null},{alias:null,args:null,concreteType:"UnifiedStoryBucketToUnifiedStoriesConnection",kind:"LinkedField",name:"unified_stories",plural:!1,selections:[{alias:null,args:null,concreteType:"UnifiedStoryBucketToUnifiedStoriesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"organic_tracking",storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:c,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:c,type:"Video",abstractKey:null},b],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryCardStoryInfo",kind:"LinkedField",name:"story_card_info",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryCardToStoryViewersConnection",kind:"LinkedField",name:"story_viewers",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]}]}],type:"StoryBucket",abstractKey:"__isStoryBucket"}}();e.exports=a}),null);
__d("StoriesTrayTileWatchLivePopover.react",["fbt","ix","CometMenu.react","CometMenuItem.react","CometRelay","StoriesActorContext","StoriesLoggingConstants","StoriesTrayTileWatchLivePopover_bucket.graphql","fbicon","react","useStoriesLogger"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useContext,m=e.useEffect,n=e.useRef;function a(a){var e=a.bucket;a=a.viewStoryUrl;e=d("CometRelay").useFragment(j!==void 0?j:j=b("StoriesTrayTileWatchLivePopover_bucket.graphql"),e);var f=l(c("StoriesActorContext"));f=f.actorID;var g=c("useStoriesLogger")(f,{bucketIndex:0,cardIndex:0},e),o=n(!1);m(function(){!o.current&&g!=null&&(o.current=!0,g.handleLiveVideoLog(c("StoriesLoggingConstants").LIVE_IN_STORIES_EVENTS.STORY_LIVE_TRAY_DROPDOWN_IMPRESSION))},[g]);e=[{icon:d("fbicon")._(i("484863"),20),onClick:function(){g.handleLiveVideoLog(c("StoriesLoggingConstants").LIVE_IN_STORIES_EVENTS.STORY_LIVE_TRAY_DROPDOWN_CLICK)},passThroughProps:{playerOriginOverride:"fb_stories",playerSubOrigin:"story_tray_live_dropdown"},primaryText:h._(/*FBT_CALL*/"Xem video tr\u1ef1c ti\u1ebfp"/*FBT_CALL*/),url:e==null?void 0:(f=e.live_video)==null?void 0:f.url},{icon:d("fbicon")._(i("1160717"),20),onClick:void 0,passThroughProps:void 0,primaryText:h._(/*FBT_CALL*/"Xem tin"/*FBT_CALL*/),url:a}];return k.jsx(c("CometMenu.react"),{size:"small",children:e.map(function(a,b){return k.jsx(c("CometMenuItem.react"),{href:a.url||"",icon:a.icon,iconStyle:"contained",onClick:a.onClick,passthroughProps:a.passThroughProps,primaryText:a.primaryText},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);