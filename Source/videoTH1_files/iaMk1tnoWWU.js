if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometPhotoPermalinkRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5240998789269061"}),null);
__d("CometPhotoPermalinkRootQuery$Parameters",["CometPhotoPermalinkRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometPhotoPermalinkRootQuery_facebookRelayOperation"),metadata:{},name:"CometPhotoPermalinkRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotoRootContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5010818929004635"}),null);
__d("CometPhotoRootContentQuery$Parameters",["CometPhotoRootContentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometPhotoRootContentQuery_facebookRelayOperation"),metadata:{},name:"CometPhotoRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotosLoggedOutCTAWrapperFooterDataQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4026980064008234"}),null);
__d("CometPhotosLoggedOutCTAWrapperFooterDataQuery$Parameters",["CometPhotosLoggedOutCTAWrapperFooterDataQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometPhotosLoggedOutCTAWrapperFooterDataQuery_facebookRelayOperation"),metadata:{},name:"CometPhotosLoggedOutCTAWrapperFooterDataQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotoTagLayerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4887383708049693"}),null);
__d("CometPhotoTagLayerQuery$Parameters",["CometPhotoTagLayerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometPhotoTagLayerQuery_facebookRelayOperation"),metadata:{},name:"CometPhotoTagLayerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotoPermalinkRoot.entrypoint",["CometPhotoPermalinkRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.routeParams;var c=a.comment_id,e=a.fbid,f=a.reply_comment_id;a=a.set;f=(f=f)!=null?f:c;c={UFI2CommentsProvider_commentsKey:"CometPhotoPermalinkRootQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:2,feedLocation:"PERMALINK",focusCommentID:f!=null?String(f):null,mediasetToken:a,nodeID:e,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:d("WebPixelRatio").get(),useDefaultActor:!1};return{queries:{photoPermalinkRootQueryReference:{parameters:b("CometPhotoPermalinkRootQuery$Parameters"),variables:c}}}},root:c("JSResourceForInteraction")("CometPhotoPermalinkRoot.react").__setRef("CometPhotoPermalinkRoot.entrypoint")};g["default"]=a}),98);
__d("CometPhotoRoot.entrypoint",["CometPhotoRootContentQuery$Parameters","CometPhotoTagLayerQuery$Parameters","CometPhotosLoggedOutCTAWrapperFooterDataQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e=a.routeParams,f=e.comment_id,g=e.fbid,h=e.reply_comment_id;e=e.set;h=(h=h)!=null?h:f;a=(f=a.passthroughProps)==null?void 0:f.glbFileURIHackToRenderAs3D_DO_NOT_USE;f={UFI2CommentsProvider_commentsKey:"CometPhotoRootQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:h!=null?String(h):null,glbFileURIHackToRenderAs3D_DO_NOT_USE:a,isMediaset:e!=null,mediasetToken:e,nodeID:g,privacySelectorRenderLocation:"COMET_MEDIA_VIEWER",renderLocation:"permalink",scale:d("WebPixelRatio").get(),useDefaultActor:!1};h={nodeID:g,scale:d("WebPixelRatio").get()};a={photoRootQueryReference:{parameters:b("CometPhotoRootContentQuery$Parameters"),variables:f},photoTagLayerQueryReference:{parameters:b("CometPhotoTagLayerQuery$Parameters"),variables:h}};if(c("gkx")("1692176"))return{queries:babelHelpers["extends"]({},a,{loggedOutCTAfooterDataQueryReference:{parameters:b("CometPhotosLoggedOutCTAWrapperFooterDataQuery$Parameters"),variables:{nodeID:g}}})};else return{queries:a}},root:c("JSResourceForInteraction")("CometPhotoRoot.react").__setRef("CometPhotoRoot.entrypoint")};g["default"]=a}),98);