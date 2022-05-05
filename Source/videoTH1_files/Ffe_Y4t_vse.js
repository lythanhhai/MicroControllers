if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CommunityChatsActionEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({TAP:"tap",IMPRESSION:"impression"});f["default"]=a}),66);
__d("CommunityChatsEventEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({CHANNEL_CONVERSION:"channel_conversion",AUDIO_ROOM_START:"audio_room_start",AUDIO_ROOM_JOIN:"audio_room_join",AUDIO_ROOM_30S_TIME_SPENT:"audio_room_30s_time_spent",AUDIO_ROOM_LEAVE:"audio_room_leave",PUSH_NOTIFICATION_SENT:"push_notification_sent"});f["default"]=a}),66);
__d("CommunityChatsSourceEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({THREAD_SEND_BUTTON:"thread_send_button",ROOM_CREATE_BUTTON:"room_create_button",ROOM_JOIN_BUTTON:"room_join_button",AUDIO_ROOM_SCREEN:"audio_room_screen",AUDIO_ROOM_LEAVE_BUTTON:"audio_room_leave_button",NOTIFICATIONS:"notifications"});f["default"]=a}),66);
__d("CommunityChatsSurfaceEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({THREAD_VIEW:"thread_view",SERVERSIDE_PUSH:"serverside_push"});f["default"]=a}),66);
__d("CommunitychatschannelconversionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("2126");c=b("FalcoLoggerInternal").create("communitychatschannelconversion",a);e.exports=c}),null);
__d("CommunitychatschannelconversionFalcoEvent.bs",["CommunitychatschannelconversionFalcoEvent"],(function(a,b,c,d,e,f){"use strict";function a(a){b("CommunitychatschannelconversionFalcoEvent").log(a)}function c(a){b("CommunitychatschannelconversionFalcoEvent").logImmediately(a)}f.log=a;f.logImmediately=c}),null);
__d("MWCMLogCommunityConversion.bs",["CommunityChatsActionEnum","CommunityChatsEventEnum","CommunityChatsSourceEnum","CommunityChatsSurfaceEnum","CommunitychatschannelconversionFalcoEvent.bs","FBID.bs","MessagingLoggingUtilsAttachmentTypeInt.bs","bs_caml"],(function(a,b,c,d,e,f){"use strict";function g(a){if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").image))return"photo";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").gif))return"gif";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").video))return"video";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").audio))return"audio";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").application))return"application";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").share))return"share";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").videoMessage))return"video_message";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").selfieSticker))return"selfie_sticker";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").soundBite))return"sound_emoji";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").sticker))return"sticker";else if(b("bs_caml").i64_eq(a,b("MessagingLoggingUtilsAttachmentTypeInt.bs").none))return"text";else return"not_supported"}function a(a,c,d,e){return b("CommunitychatschannelconversionFalcoEvent.bs").log(function(){return{action:b("CommunityChatsActionEnum").TAP,event:b("CommunityChatsEventEnum").CHANNEL_CONVERSION,source:b("CommunityChatsSourceEnum").THREAD_SEND_BUTTON,surface:b("CommunityChatsSurfaceEnum").THREAD_VIEW,group_id:b("FBID.bs").ofString(e),channel_id:b("FBID.bs").ofString(c),type:d?"reaction":g(a)}})}f.log=a}),null);
__d("LiveProducerLP2GraphicsTabRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4813956258655290"}),null);