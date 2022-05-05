if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("LSUpdateUserSettingsForCommunities",["LSArrayGetObjectAt","LSGetViewerFBID","LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.seq([function(e){return d[0]=c.i64.of_int32(a[0].length),c.i64.gt(d[0],[0,0])?c.loopAsync(d[0],function(e){return d[5]=e,c.seq([function(e){return c.ntop("Array",b("LSArrayGetObjectAt"),a[0],d[5]).then(function(a){return a=a,d[6]=a[0],d[7]=a[1],a})},function(a){return d[8]=d[6].get("community_id"),d[6],d[9]=d[6].get("is_hidden"),d[6],c.fe(c.db.table(162).fetch([[[d[8]]]]),function(a){var b=a.update;a.item;return b({isHidden:d[9]})})}])}):c.resolve()},function(a){return c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[1]=a[0],a})},function(e){return d[2]=new c.Map(),d[2].set("actor_id",d[1]),d[2].set("updates",a[0]),d[3]=d[2].get("actor_id"),d[2],d[4]=c.toJSON(d[2]),c.sp(b("LSIssueNewTask"),["update_user_settings_for_communities","_",c.i64.to_string(d[3])].join(""),[0,465],d[4],f,f,[0,0],[0,0],f,f,[0,0])}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("FDSCMCollapsible.react",["ix","BaseListCell.react","MDSBaseCollapsible.react","MDSText.react","TetraIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback,k={icon:{display:"j83agx80",paddingEnd:"dflh9lhu",paddingStart:"scb9dxdr",paddingTop:"cxgpxx05",paddingBottom:"sj5x9vvc"},label:{paddingStart:"scb9dxdr",paddingTop:"pybr56ya",paddingBottom:"f10w8fjw"},overflow:{display:"pq6dq46d",marginEnd:"cgat1ltu",marginTop:"hop8lmos"},pressable:{alignItems:"bp9cbjyn",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",display:"j83agx80",minHeight:"nnctdnn4"}};function a(a,b){var e=a.addOnEnd,f=a.children,g=a.isOpen,l=a.label,m=a.onPress,n=a.renderButtonContainer;a=a.testid;var o=j(function(a){return i.jsxs("div",{className:c("stylex")(k.icon),children:[i.jsx("div",{className:c("stylex")(k.overflow),children:e}),i.jsx(c("TetraIcon.react"),{color:"secondary",icon:a?d("fbicon")._(h("505565"),20):d("fbicon")._(h("492454"),20)})]})},[e]);a=j(function(a){return i.jsx(c("BaseListCell.react"),{addOnEnd:o(a),addOnEndVerticalAlign:"center",addOnStartVerticalAlign:"center",content:i.jsx("div",{className:c("stylex")(k.label),children:i.jsx(c("MDSText.react"),{color:"primary",numberOfLines:1,type:"headlineEmphasized4",children:l})})})},[l,o]);return i.jsx(c("MDSBaseCollapsible.react"),{isOpen:g,onPress:m,ref:b,renderButtonContainer:n,renderLabel:a,testid:void 0,xstyleForPressable:k.pressable,children:f})}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);b.displayName="FDSCollapsible";e=b;g["default"]=e}),98);
__d("LSGroupParticipantJoinState.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").zero;c=b("bs_caml_int64").one;d=[0,2];f.member=a;f.pending=c;f.invited=d}),null);
__d("LSThreadMediaGalleryGroup.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").zero;c=b("bs_caml_int64").one;d=[0,2];f.photosAndVideos=a;f.filesOnly=c;f.links=d}),null);