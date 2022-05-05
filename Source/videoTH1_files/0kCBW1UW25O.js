if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("LsMessageRequestsEntryPoint.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").zero;c=b("bs_caml_int64").one;d=[0,2];e=[0,3];b=[0,4];var g=[0,5];f.settings=a;f.pendingRequests=c;f.notifications=d;f.chatTabSettings=e;f.chatTabPendingRequests=b;f.inboxFolderList=g}),null);
__d("MWInboxSettingsMenu.bs",["fbt","CometMenuSeparator.react","CurrentEnvironment","CurrentUser","DTSG","DTSGUtils","JSResourceForInteraction","LSDataUseConsentState.bs","LSPlatformLogout.bs","LsMessageRequestsEntryPoint.bs","LsSystemFolder.bs","MWCMGating.bs","MWInboxRestrictedAccountsRouteBuilder.bs","MWInboxSettingsMenuIcons.bs","MWMenu.react","MWMenuItem.react","MWPBumpEntityKey.bs","MWSeparatorContainer.react","MessageRequestsLog.bs","MessengerDesktopPromoEventLogger","ODS","ReQL.bs","ReQLSubscription.bs","Run","SprinkleConfig","URI","UserAgent","WebStorage.bs","XMessengerDotComDesktopControllerRouteBuilder","XMessengerDotComLogoutController","bs_belt_Option","bs_caml","bs_caml_int64","bs_caml_option","bs_curry","bs_js_dict","cr:10878","cr:11854","gkx","promiseDone","qex","react","useCometHomeChatSettings","useCometLazyDialog","useReStore","uuid"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react");function a(a){var c,d=a.showMessageRequests,e=a.showHidden,f=a.showActiveContacts,h=a.showRestrictedAccounts,k=b("useReStore")(),l=b("ReQLSubscription.bs").useFirst(j.useMemo(function(){return b("ReQL.bs").fromTableAscending(k.table("epd_cookie_settings"))},[k])),m=j.useRef(!1),n=j.useRef(b("uuid")()).current;j.useEffect(function(){m.current||(m.current=!0,b("MessengerDesktopPromoEventLogger").log({location:"MessengerSettingsMenu",event:"Impression",funnelSessionId:n}))},[]);var o=function(a){b("MessengerDesktopPromoEventLogger").log({location:"MessengerSettingsMenu",event:"Click",funnelSessionId:n})};a=b("XMessengerDotComDesktopControllerRouteBuilder").buildUri({funnel_session_id:n}).setDomain("www.messenger.com").setProtocol("https").setFragment("startDownload").toString();var p=b("useCometHomeChatSettings").useCometHomeChatSettingsPreloadedQuery(),q=p[1],r=p[0],s=(p=b("useCometLazyDialog"))((c=b("JSResourceForInteraction"))("MWInboxSettingsDialog.react",{name:"MWInboxSettingsDialog.react","class":"fluid"}).__setRef("MWInboxSettingsMenu.bs")),t=s[0];s=p(c("MWInboxBugReportDialog.react",{name:"MWInboxBugReportDialog.react","class":"fluid"}).__setRef("MWInboxSettingsMenu.bs"));var u=s[0];s=b("gkx")("3846");var v=p(c("MWCookieSettingsDialogJSResource.react",{name:"MWCookieSettingsDialogJSResource.react","class":"fluid"}).__setRef("MWInboxSettingsMenu.bs")),w=v[0];v=p(c("MWDropDbDialog.react",{name:"MWDropDbDialog.react","class":"fluid"}).__setRef("MWInboxSettingsMenu.bs"));var x=v[0];p=j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Ch\u00ednh s\u00e1ch v\u1ec1 cookie"/*FBT_CALL*/),href:"https://www.facebook.com/help/cookies",onClick:function(a){return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","cookie_policy")},icon:b("MWInboxSettingsMenuIcons.bs").CookiePolicy.icon,testid:"skytale-settings-cookiepolicy",target:"_blank"});c=b("gkx")("2015778");v=c&&l!==void 0&&b("bs_caml").i64_neq(l.fbTrackersOnOtherCompanies,b("LSDataUseConsentState.bs").unset)&&b("bs_caml").i64_neq(l.otherCompanyTrackersOnFoa,b("LSDataUseConsentState.bs").unset)?j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"C\u00e0i \u0111\u1eb7t cookie"/*FBT_CALL*/),onClick:function(a){return w({cookieSettings:l,onClose:function(a){}},function(a){})},icon:b("MWInboxSettingsMenuIcons.bs").Settings.icon,testid:"skytale-settings-cookiepolicy"}):p;var y=b("LSPlatformLogout.bs").useHook(void 0);c=function(a){b("Run").onUnload(function(a){b("bs_belt_Option").forEach(b("WebStorage.bs").getSessionStorage(void 0),function(a){return a.clear()}),b("bs_belt_Option").forEach(b("WebStorage.bs").getLocalStorage(void 0),function(a){return a.clear()})});b("promiseDone")(b("bs_curry")._1(y,void 0),void 0,void 0);a=b("XMessengerDotComLogoutController").getURIBuilder().getURI();var c={};a=new(i||(i=b("URI")))(a);var d=document.createElement("form");d.action=a.toString();d.method="POST";d.style.display="none";a=b("DTSG").getToken();a.length>0&&(c.fb_dtsg=a,b("SprinkleConfig").param_name.length>0&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(a)));b("bs_js_dict").entries(c).forEach(function(a){var b=document.createElement("input");b.type="hidden";b.name=a[0];b.value=a[1];d.appendChild(b)});document.body.appendChild(d);return d.submit()};var z=b("cr:10878")==null?c:b("bs_curry")._1(b("cr:10878").useHook,c);if(b("CurrentEnvironment").messengerdotcom){p={primaryText:g._(/*FBT_CALL*/"\u0110\u0103ng xu\u1ea5t"/*FBT_CALL*/),onClick:function(a){b("bs_curry")._1(z,void 0);return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","logout")},testid:"skytale-settings-logout"};b("MWInboxSettingsMenuIcons.bs").LogOut.icon!==void 0&&(p.icon=b("bs_caml_option").valFromOption(b("MWInboxSettingsMenuIcons.bs").LogOut.icon));c=j.jsx(b("MWMenuItem.react"),p)}else c=null;p=b("qex")._("698")===!0;if(s){s={primaryText:g._(/*FBT_CALL*/"T\u00e0i kho\u1ea3n b\u1ecb h\u1ea1n ch\u1ebf"/*FBT_CALL*/),onClick:function(a){b("MWCMGating.bs").isM2Enabled||b("bs_curry")._1(h,void 0);return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","show_restricted_accounts")},icon:b("MWInboxSettingsMenuIcons.bs").RestrictedAccounts.icon,testid:"skytale-settings-restrictedaccounts"};var A=b("MWCMGating.bs").isM2Enabled?b("bs_curry")._1(b("MWInboxRestrictedAccountsRouteBuilder.bs").buildURLWithoutThread,{}):void 0;A!==void 0&&(s.href=b("bs_caml_option").valFromOption(A));A=j.jsx(b("MWMenuItem.react"),s)}else A=null;if(b("CurrentEnvironment").messengerdotcom){if(b("CurrentUser").isMessengerOnlyUser()||b("CurrentUser").isDeactivatedAllowedOnMessenger()){s={primaryText:g._(/*FBT_CALL*/"T\u1ea3i th\u00f4ng tin c\u1ee7a b\u1ea1n xu\u1ed1ng"/*FBT_CALL*/),href:"https://www.messenger.com/dyi",target:"_blank"};b("MWInboxSettingsMenuIcons.bs").DownloadYourInformation.icon!==void 0&&(s.icon=b("bs_caml_option").valFromOption(b("MWInboxSettingsMenuIcons.bs").DownloadYourInformation.icon));s=j.jsx(b("MWMenuItem.react"),s)}else s=null;p=j.jsxs("div",{children:[j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Gi\u1edbi thi\u1ec7u"/*FBT_CALL*/),href:"https://www.messenger.com/about",onClick:function(a){return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","about")},icon:b("MWInboxSettingsMenuIcons.bs").About.icon,testid:"skytale-settings-about",target:"_blank"}),j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"\u0110i\u1ec1u kho\u1ea3n"/*FBT_CALL*/),href:"https://www.facebook.com/policies",onClick:function(a){return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","terms")},icon:b("MWInboxSettingsMenuIcons.bs").Terms.icon,testid:"skytale-settings-terms",target:"_blank"}),j.jsx(b("MWMenuItem.react"),{primaryText:p?g._(/*FBT_CALL*/"Ch\u00ednh s\u00e1ch quy\u1ec1n ri\u00eang t\u01b0"/*FBT_CALL*/):g._(/*FBT_CALL*/"Ch\u00ednh s\u00e1ch d\u1eef li\u1ec7u"/*FBT_CALL*/),href:p?"https://www.facebook.com/privacy/policy?entry_point=messenger_settings":"https://www.facebook.com/privacy/explanation",onClick:function(a){return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","privacy_policy")},icon:b("MWInboxSettingsMenuIcons.bs").PrivacyPolicy.icon,testid:"skytale-settings-privacypolicy",target:"_blank"}),v,s,b("CurrentUser").isMessengerOnlyUser()?j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"X\u00f3a t\u00e0i kho\u1ea3n c\u1ee7a b\u1ea1n"/*FBT_CALL*/),href:"https://www.facebook.com/help/messenger-app/ipad/458908261952384?helpref=platform_switcher&rdrhc",onClick:function(a){b("ODS").bumpEntityKey(3185,"inbox_settings","delete_account")},icon:b("MWInboxSettingsMenuIcons.bs").About.icon,target:"_blank"}):null]})}else p=null;return j.jsx(b("MWMenu.react"),{children:j.jsxs(b("MWSeparatorContainer.react"),{children:[j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"T\u00f9y ch\u1ecdn"/*FBT_CALL*/),onClick:function(a){b("bs_curry")._1(q,void 0);t({chatSettingsQueryReference:r},function(a){});return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","preferences")},icon:b("MWInboxSettingsMenuIcons.bs").Settings.icon,testid:"skytale-settings-menuitem"}),b("MWCMGating.bs").isM2Enabled?A:j.jsxs("div",{children:[j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Ng\u01b0\u1eddi li\u00ean h\u1ec7 \u0111ang ho\u1ea1t \u0111\u1ed9ng"/*FBT_CALL*/),onClick:function(a){b("bs_curry")._1(f,void 0);return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","active_contacts")},icon:b("MWInboxSettingsMenuIcons.bs").ActiveContacts.icon,testid:"skytale-settings-activecontacts"}),j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Tin nh\u1eafn \u0111ang ch\u1edd"/*FBT_CALL*/),onClick:function(a){b("MessageRequestsLog.bs").logMessageRequestsView(b("bs_caml_int64").to_int32(b("LsMessageRequestsEntryPoint.bs").settings),b("bs_caml_int64").to_int32(b("LsSystemFolder.bs").pending));b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","message_requests");return b("bs_curry")._1(d,void 0)},icon:b("MWInboxSettingsMenuIcons.bs").MessageRequests.icon,testid:"skytale-settings-messagerequests"}),j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"\u0110o\u1ea1n chat \u0111\u00e3 l\u01b0u tr\u1eef"/*FBT_CALL*/),onClick:function(a){b("bs_curry")._1(e,void 0);return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","report_problem")},icon:b("MWInboxSettingsMenuIcons.bs").HiddenChats.icon,testid:"skytale-settings-hidden"}),A]}),b("cr:11854")==null?null:j.jsx(j.Fragment,{children:j.jsx(b("cr:11854").make,{})}),j.jsxs("div",{children:[j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Tr\u1ee3 gi\u00fap"/*FBT_CALL*/),href:"https://www.facebook.com/help/messenger-app",onClick:function(a){return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","help")},icon:b("MWInboxSettingsMenuIcons.bs").Help.icon,testid:"skytale-settings-help",target:"_blank"}),b("CurrentEnvironment").messengerdotcom?j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"B\u00e1o c\u00e1o s\u1ef1 c\u1ed1"/*FBT_CALL*/),onClick:function(a){u({initialProduct:"chat"},function(a){});return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","report_problem")},icon:b("MWInboxSettingsMenuIcons.bs").ReportAProblem.icon,testid:"skytale-settings-reportproblem"}):null]}),p,b("UserAgent").isPlatform("Mac OS X")?j.jsxs("div",{children:[j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"M\u1edbi! Messenger d\u00e0nh cho m\u00e1y Mac"/*FBT_CALL*/),href:a,onClick:function(a){o(void 0);return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","desktop_promo")},icon:b("MWInboxSettingsMenuIcons.bs").NewMessengerDesktopClient.icon,testid:"skytale-settings-macapp"}),c]}):b("UserAgent").isPlatform("Windows")?j.jsxs("div",{children:[j.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"M\u1edbi! Messenger d\u00e0nh cho Windows"/*FBT_CALL*/),href:a,onClick:function(a){o(void 0);return b("MWPBumpEntityKey.bs").bumpEntityKeyWithAppId("mw.sidebar","desktop_promo")},icon:b("MWInboxSettingsMenuIcons.bs").NewMessengerDesktopClient.icon,testid:"skytale-settings-windowsapp"}),c]}):c,b("CurrentUser").isEmployee()&&b("gkx")("3174")?j.jsx(b("MWMenuItem.react"),{primaryText:"[Fb-only] Clear Messaging DB and Cookies",onClick:function(a){return x(void 0,function(a){})},icon:b("MWInboxSettingsMenuIcons.bs").Terms.icon,testid:"skytale-settings-db"}):null],separator:j.jsx(b("CometMenuSeparator.react"),{})}),testid:"skytale-settings-menu",truncate:!0,withArrow:!0})}c=b("MWCMGating.bs").isM2Enabled;d=a;f.isCMInbox=c;f.$MAWSecretConversationsLogOut$requireCond=b("cr:10878");f.$MWChatSidebarSettingsPrivacyMenu$requireCond=b("cr:11854");f.make=d}),null);
__d("MWInboxSettingsMenu.react",["MWInboxSettingsMenu.bs"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=d("MWInboxSettingsMenu.bs").make}),98);