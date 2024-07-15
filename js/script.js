var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function(){
// IPad/IPhone
 var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
 ua = navigator.userAgent,

 gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

 scaleFix = function () {
  if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
   viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
   document.addEventListener("gesturestart", gestureStart, false);
  }
 };

 scaleFix();
 // Menu Android
 if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    } 
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

}

/*
playback timings (ms):
  captures_list: 3.816
  exclusion.robots: 0.06
  exclusion.robots.policy: 0.031
  esindex: 0.045
  cdx.remote: 31.64
  LoadShardBlock: 208.841 (3)
  PetaboxLoader3.datanode: 72.673 (4)
  PetaboxLoader3.resolve: 186.51 (3)
  load_resource: 123.071
*/