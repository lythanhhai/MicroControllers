if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("EventCometGuestlistMessageMenuItem_event_admin_message_guest_action_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"EventCometGuestlistMessageMenuItem_event_admin_message_guest_action_renderer$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null}],type:"MessagingActor",abstractKey:"__isMessagingActor"}],storageKey:null}]};e.exports=a}),null);
__d("EventCometGuestlistMessageMenuItem_event_admin_message_guest_action_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometGuestlistMessageMenuItem_event_admin_message_guest_action_renderer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null}],type:"MessagingActor",abstractKey:"__isMessagingActor"}],storageKey:null}],type:"EventAdminMessageGuestActionRenderer",abstractKey:null};e.exports=a}),null);
__d("EventCometGuestlistRemoveMenuItem_event_admin_remove_guest_action_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"EventCometGuestlistRemoveMenuItem_event_admin_remove_guest_action_renderer$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a],storageKey:null},{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"event",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_paid_online_event_purchased_or_free_access_user",storageKey:null}]}}();e.exports=a}),null);
__d("EventCometGuestlistRemoveMenuItem_event_admin_remove_guest_action_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometGuestlistRemoveMenuItem_event_admin_remove_guest_action_renderer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"event",plural:!1,selections:a,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_paid_online_event_purchased_or_free_access_user",storageKey:null}],type:"EventAdminRemoveGuestActionRenderer",abstractKey:null}}();e.exports=a}),null);
__d("EventCometGuestlistMessageMenuItem.react",["fbt","ix","CometDialogCloseCallbackContext.react","CometMenuItem.react","CometRelay","EventCometGuestlistMessageMenuItem_event_admin_message_guest_action_renderer.graphql","fbicon","react","useMWChatOpenTabForUser","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){a=a.event_admin_message_guest_action_renderer;a=d("CometRelay").useFragment(j!==void 0?j:j=b("EventCometGuestlistMessageMenuItem_event_admin_message_guest_action_renderer.graphql"),a);var e=d("CometDialogCloseCallbackContext.react").useCometDialogCloseCallbackContext(),f=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),g=c("useMWChatOpenTabForUser")("event"),l=g[0],m=g[1],n=(g=a.actor)==null?void 0:g.id;g=(a=(g=a.actor)==null?void 0:g.can_viewer_message)!=null?a:!1;a=function(){n!=null&&(l(n),e&&e())};var o=function(){n!=null&&m(n)};return f?k.jsx(c("CometMenuItem.react"),{disabled:!g,icon:d("fbicon")._(i("505619"),16),onClick:a,onHoverIn:o,primaryText:h._(/*FBT_CALL*/"Nh\u1eafn tin"/*FBT_CALL*/)}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometGuestlistRemoveMenuItem.react",["ix","CometMenuItem.react","CometRelay","EventCometGuestlistRemoveMenuItem_event_admin_remove_guest_action_renderer.graphql","fbicon","react","useEventCometGuestlistDetailsListRemoveGuest","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){var e,f;a=a.event_admin_remove_guest_action_renderer;a=d("CometRelay").useFragment(i!==void 0?i:i=b("EventCometGuestlistRemoveMenuItem_event_admin_remove_guest_action_renderer.graphql"),a);e=(e=a.event)==null?void 0:e.id;f=(f=a.actor)==null?void 0:f.id;a=a==null?void 0:a.is_paid_online_event_purchased_or_free_access_user;e=c("useNullthrowsViolation")(c("useEventCometGuestlistDetailsListRemoveGuest")({eventID:e,guestID:f,isDisabled:a===!0}));f=e.disabled;a=e.label;e=e.onPress;return j.jsx(c("CometMenuItem.react"),{disabled:f,icon:d("fbicon")._(h("491583"),16),onClick:e,preventClosingMenuOnSelect:!0,primaryText:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStickerPickerAvatarStickersContentRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5697276003677301"}),null);/*FB_PKG_DELIM*/
__d("LSUpdateDeliveryReceipt",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(14).fetch([[[a[1],{lt:a[0]},a[2]]],"threadKeyDeliveredWatermarkTimestampMs"]),function(c){return b.i64.eq(c.threadKey,a[1])&&b.i64.eq([0,0],[0,0])&&b.i64.eq(c.contactId,a[2])&&b.i64.gt(a[0],c.deliveredWatermarkTimestampMs)}),function(b){var c=b.update;b.item;return c({deliveredWatermarkTimestampMs:a[0]})})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("CometStickerPickerRecentlyUsedStickersContentRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5239791289426230"}),null);