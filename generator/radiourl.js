const rp = require('request-promise');
const atob = require('atob');

module.exports = (channel = '903') => {
  channel = channel.toString();
  if (channel != '903' && channel != '881') {
    channel = '903';
  }

  const landingURL = `https://event.881903.com/hktbaudioplayer/player_token.php?ch=hd${channel}`;
  const options = {
    url: landingURL,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
    }
  };

  return rp(options)
    .then(
      (body) => {
        const matches = /src="(https:\/\/playlist.881903[^"]+)"/.exec(body);
        const playlistURL = matches[1];
        return playlistURL
      }
    ).then( playlistURL => {
      const options = {
        url: playlistURL,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
          'Referer': landingURL,
          'Sec-Fetch-Mode': 'no-cors',
        }
      };

      var window = {};
      (function(){
        var a=['w7c9LsOpfg==','wprChWYPw5I=','OXhMUg==','w7nDkmoefw==','worCqMK7Yn4=','w5BjB8K1w4w=','b8Ogw6zDl8Ow','w5LDuMOIFRE=','D8KvaEh0','OlzDu2MG','w7pWaSfDjw==','FBPDgcKMXQ==','NhbDhsKQaw==','bMKTw4wrwpbDqQ==','wqgxwpLCmMO/QlbCtcOGwqLCiA==','N8OQBcKQYVDDt140w7lkeMKgb8Kkf0TCpznCpsKrw6vDgXLCp1tlMnPDnFsJ','DMKDa8KBw7bCtcO8w5tYDsOZCsOvwovCjFQRHX/CohUN','R1hPeFo=','ccK2wq9nHg==','w5F9FMOZwoI=','wqTCgcKeZWU=','JRFGBjDDoyQ=','ccK9w5nCqcOw','JBvDnMOJeQ==','GCXCk0Aiw7fDhnXCuAvDhww=','wohTacOGw73Dj8O8wrYm','On1TU8Kk','w60RwoYmc8O+','IMKaBMOGbg==','w4daeQDDpg==','aVbDisOcw5g=','IBBxEQY=','wqcYw6vDt18=','c8KIdsOlMg==','w4vDosOsNyg=','woTDgMOVw7XDlQ==','w5YdwrhLw6Q=','bcOJwpvDi8Ob','w6sYJsOrTFgow79UwokfUmg=','PjJXAgY=','RsKEZcKdwrg=','DsOLNMKGw4E='];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0x136));var b=function(c,d){c=c-0x0;var e=a[c];if(b['dNaIIn']===undefined){(function(){var f;try{var g=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=g();}catch(h){f=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';f['atob']||(f['atob']=function(j){var k=String(j)['replace'](/=+$/,'');for(var l=0x0,m,n,o=0x0,p='';n=k['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?p+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=i['indexOf'](n);}return p;});}());var q=function(r,d){var t=[],u=0x0,v,w='',x='';r=atob(r);for(var y=0x0,z=r['length'];y<z;y++){x+='%'+('00'+r['charCodeAt'](y)['toString'](0x10))['slice'](-0x2);}r=decodeURIComponent(x);for(var A=0x0;A<0x100;A++){t[A]=A;}for(A=0x0;A<0x100;A++){u=(u+t[A]+d['charCodeAt'](A%d['length']))%0x100;v=t[A];t[A]=t[u];t[u]=v;}A=0x0;u=0x0;for(var B=0x0;B<r['length'];B++){A=(A+0x1)%0x100;u=(u+t[A])%0x100;v=t[A];t[A]=t[u];t[u]=v;w+=String['fromCharCode'](r['charCodeAt'](B)^t[(t[A]+t[u])%0x100]);}return w;};b['acymzk']=q;b['jNnIkE']={};b['dNaIIn']=!![];}var C=b['jNnIkE'][c];if(C===undefined){if(b['JmiAjc']===undefined){b['JmiAjc']=!![];}e=b['acymzk'](e,d);b['jNnIkE'][c]=e;}else{e=C;}return e;};window.atob2=function(c){var d={'wypjC':b('0x0','Z*IX'),'mRNcN':function(e,f){return e<f;},'VChQp':function(g,h){return g|h;},'beDMy':function(i,j){return i<<j;},'NPXQr':function(k,l){return k>=l;},'oKwjC':function(m,n){return m&n;},'LDJrd':function(o,p){return o>>>p;},'NCsga':function(q,r){return q(r);},'xjMVk':function(s,t){return s<=t;},'HeWIE':function(u,v){return u|v;},'lnEIM':function(w,x){return w<<x;},'bghGK':function(y,z){return y&z;},'qTcRr':function(A,B){return A|B;},'MVLQh':function(C,D){return C|D;},'TCUKD':function(E,F){return E|F;},'UBWWb':function(G,H){return G(H);},'vFRWr':function(I,J){return I*J;}};var K=d[b('0x1','5#]5')][b('0x2','UBGB')]('|'),L=0x0;while(!![]){switch(K[L++]){case'0':var M=0x0;continue;case'1':for(var N=0x0;d[b('0x3','*]*B')](N,ap);N++){aq=d[b('0x4','qTau')](d['beDMy'](aq,0x5),as[b('0x5','EJVc')](c[N]));M+=0x5;if(d['NPXQr'](M,0x8)){ao[ar++]=d[b('0x6','XHG$')](d['LDJrd'](aq,M-0x8),0xff);M-=0x8;}}continue;case'2':return d[b('0x7','oNym')](O,ao);case'3':var O=function(){var P=new Array(0x80);var Q=String['fromCodePoint']||String[b('0x8','nODQ')];var R=[];return function(S){var T=b('0x9','*]*B')[b('0xa','wluf')]('|'),U=0x0;while(!![]){switch(T[U++]){case'0':return R['join']('');case'1':R[b('0xb','J$a9')]=0x0;continue;case'2':for(var N=0x0;Z[b('0xc','E#$Y')](N,W);){Y=S[N++];if(Z['loSrN'](Y,0x7f)){X=Y;}else if(Z['loSrN'](Y,0xdf)){X=Z['FaCOD'](Z[b('0xd','%M(G')](Z[b('0xe','gm@t')](Y,0x1f),0x6),S[N++]&0x3f);}else if(Z[b('0xf','EJVc')](Y,0xef)){X=Z[b('0x10','mm6s')](Z[b('0x11','8OJU')](Z[b('0x12','cL!c')](Z[b('0x13','*nOi')](Y,0xf),0xc),Z[b('0x14','O(Mg')](S[N++]&0x3f,0x6)),Z[b('0x15','u4*H')](S[N++],0x3f));}else if(String[b('0x16','5bA$')]){X=Z[b('0x17','EJVc')](Z[b('0x18','PAqa')](Z['yCveU'](Y&0x7,0x12),Z[b('0x19','Pq[i')](Z[b('0x1a','5bA$')](S[N++],0x3f),0xc))|Z[b('0x1b','i!BS')](Z['zWgoq'](S[N++],0x3f),0x6),S[N++]&0x3f);}else{X=0x3f;N+=0x3;}R[b('0x1c','wluf')](P[X]||(P[X]=Z['VVcvt'](Q,X)));}continue;case'3':var W=S['length'];continue;case'4':var X,Y;continue;}break;}};}();continue;case'4':var Z={'ujKSr':function(a0,a1){return d[b('0x1d','lAxJ')](a0,a1);},'loSrN':function(a2,a3){return d[b('0x1e','qTau')](a2,a3);},'FaCOD':function(a4,a5){return d[b('0x1f','akwJ')](a4,a5);},'hNGpK':function(a6,a7){return d[b('0x20','b96q')](a6,a7);},'fOurL':function(a8,a9){return d['bghGK'](a8,a9);},'tiAFg':function(aa,ab){return d[b('0x21','cL!c')](aa,ab);},'zWgoq':function(ac,ad){return d[b('0x22','hN[)')](ac,ad);},'rMuaN':function(ae,af){return d[b('0x23','4B61')](ae,af);},'vcRTN':function(ag,ah){return d['TCUKD'](ag,ah);},'yCveU':function(ai,aj){return ai<<aj;},'tGwrg':function(ak,al){return ak<<al;},'VVcvt':function(am,an){return d[b('0x24','%M(G')](am,an);}};continue;case'5':var ao=new Uint8Array(d[b('0x25','6JJi')](d[b('0x26','6JJi')](ap,0x5)/0x8,0x0));continue;case'6':var ap=c[b('0x27','l!5r')];continue;case'7':c=c[b('0x28','Cze^')]()['replace'](/O/g,'0')['replace'](/[IL]/g,'1');continue;case'8':var aq=0x0;continue;case'9':var ar=0x0;continue;case'10':var as=b('0x29','8OJU');continue;}break;}};
      })();
      const atob2 = window.atob2;

      return rp(options)
        .then((body) => {
          var matches = /atob\((\"[^)]+)/gm.exec(body);
          var code = atob(eval(matches[1]));
          matches = /return ([^;]+)/g.exec(code);
          var url = eval(matches[1]);

          return url;
        });
    });
}