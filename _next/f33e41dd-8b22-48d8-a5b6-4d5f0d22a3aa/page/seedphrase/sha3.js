
          window.__NEXT_REGISTER_PAGE('/seedphrase/sha3', function() {
            var comp = module.exports=webpackJsonp([43],{412:function(t,r,e){t.exports=e(413)},413:function(t,r,e){"use strict";(function(r){!function(e){function i(t,r,e){this.blocks=[],this.s=[],this.padding=r,this.outputBits=e,this.reset=!0,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=e>>5,this.extraBytes=(31&e)>>3;for(var i=0;i<50;++i)this.s[i]=0}var o=void 0!==t;o&&(e=r);for(var n="0123456789abcdef".split(""),s=[31,7936,2031616,520093696],a=[1,256,65536,16777216],u=[6,1536,393216,100663296],h=[0,8,16,24],f=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],c=[224,256,384,512],p=[128,256],l=["hex","buffer","array"],d=function(t,r,e){return function(o){return new i(t,r,t).update(o)[e]()}},y=function(t,r,e){return function(o,n){return new i(t,r,n).update(o)[e]()}},b=function(t,r){var e=d(t,r,"hex");e.create=function(){return new i(t,r,t)},e.update=function(t){return e.create().update(t)};for(var o=0;o<l.length;++o){var n=l[o];e[n]=d(t,r,n)}return e},v=function(t,r){var e=y(t,r,"hex");e.create=function(e){return new i(t,r,e)},e.update=function(t,r){return e.create(r).update(t)};for(var o=0;o<l.length;++o){var n=l[o];e[n]=y(t,r,n)}return e},k=[{name:"keccak",padding:a,bits:c,createMethod:b},{name:"sha3",padding:u,bits:c,createMethod:b},{name:"shake",padding:s,bits:p,createMethod:v}],B={},g=0;g<k.length;++g)for(var x=k[g],C=x.bits,b=x.createMethod,w=0;w<C.length;++w){var A=x.createMethod(C[w],x.padding);B[x.name+"_"+C[w]]=A}i.prototype.update=function(t){var r="string"!=typeof t;r&&t.constructor==e.ArrayBuffer&&(t=new Uint8Array(t));for(var i,o,n=t.length,s=this.blocks,a=this.byteCount,u=this.blockCount,f=0,c=this.s;f<n;){if(this.reset)for(this.reset=!1,s[0]=this.block,i=1;i<u+1;++i)s[i]=0;if(r)for(i=this.start;f<n&&i<a;++f)s[i>>2]|=t[f]<<h[3&i++];else for(i=this.start;f<n&&i<a;++f)o=t.charCodeAt(f),o<128?s[i>>2]|=o<<h[3&i++]:o<2048?(s[i>>2]|=(192|o>>6)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):o<55296||o>=57344?(s[i>>2]|=(224|o>>12)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++f)),s[i>>2]|=(240|o>>18)<<h[3&i++],s[i>>2]|=(128|o>>12&63)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]);if(this.lastByteIndex=i,i>=a){for(this.start=i-a,this.block=s[u],i=0;i<u;++i)c[i]^=s[i];m(c),this.reset=!0}else this.start=i}return this},i.prototype.finalize=function(){var t=this.blocks,r=this.lastByteIndex,e=this.blockCount,i=this.s;if(t[r>>2]|=this.padding[3&r],this.lastByteIndex==this.byteCount)for(t[0]=t[e],r=1;r<e+1;++r)t[r]=0;for(t[e-1]|=2147483648,r=0;r<e;++r)i[r]^=t[r];m(i)},i.prototype.toString=i.prototype.hex=function(){this.finalize();for(var t,r=this.blockCount,e=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,u="";a<i;){for(s=0;s<r&&a<i;++s,++a)t=e[s],u+=n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15];a%r==0&&(m(e),s=0)}return o&&(t=e[s],o>0&&(u+=n[t>>4&15]+n[15&t]),o>1&&(u+=n[t>>12&15]+n[t>>8&15]),o>2&&(u+=n[t>>20&15]+n[t>>16&15])),u},i.prototype.buffer=function(){this.finalize();var t,r=this.blockCount,e=this.s,i=this.outputBlocks,o=this.extraBytes,n=0,s=0,a=this.outputBits>>3;t=o?new ArrayBuffer(i+1<<2):new ArrayBuffer(a);for(var u=new Uint32Array(t);s<i;){for(n=0;n<r&&s<i;++n,++s)u[s]=e[n];s%r==0&&m(e)}return o&&(u[n]=e[n],t=t.slice(0,a)),t},i.prototype.digest=i.prototype.array=function(){this.finalize();for(var t,r,e=this.blockCount,i=this.s,o=this.outputBlocks,n=this.extraBytes,s=0,a=0,u=[];a<o;){for(s=0;s<e&&a<o;++s,++a)t=a<<2,r=i[s],u[t]=255&r,u[t+1]=r>>8&255,u[t+2]=r>>16&255,u[t+3]=r>>24&255;a%e==0&&m(i)}return n&&(t=a<<2,r=i[s],n>0&&(u[t]=255&r),n>1&&(u[t+1]=r>>8&255),n>2&&(u[t+2]=r>>16&255)),u};var m=function(t){var r,e,i,o,n,s,a,u,h,c,p,l,d,y,b,v,k,B,g,x,C,w,A,m,M,z,S,I,_,J,T,U,E,H,j,q,D,F,G,K,L,N,O,P,Q,R,V,W,X,Y,Z,$,tt,rt,et,it,ot,nt,st,at,ut,ht,ft;for(i=0;i<48;i+=2)o=t[0]^t[10]^t[20]^t[30]^t[40],n=t[1]^t[11]^t[21]^t[31]^t[41],s=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],u=t[4]^t[14]^t[24]^t[34]^t[44],h=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],p=t[7]^t[17]^t[27]^t[37]^t[47],l=t[8]^t[18]^t[28]^t[38]^t[48],d=t[9]^t[19]^t[29]^t[39]^t[49],r=l^(s<<1|a>>>31),e=d^(a<<1|s>>>31),t[0]^=r,t[1]^=e,t[10]^=r,t[11]^=e,t[20]^=r,t[21]^=e,t[30]^=r,t[31]^=e,t[40]^=r,t[41]^=e,r=o^(u<<1|h>>>31),e=n^(h<<1|u>>>31),t[2]^=r,t[3]^=e,t[12]^=r,t[13]^=e,t[22]^=r,t[23]^=e,t[32]^=r,t[33]^=e,t[42]^=r,t[43]^=e,r=s^(c<<1|p>>>31),e=a^(p<<1|c>>>31),t[4]^=r,t[5]^=e,t[14]^=r,t[15]^=e,t[24]^=r,t[25]^=e,t[34]^=r,t[35]^=e,t[44]^=r,t[45]^=e,r=u^(l<<1|d>>>31),e=h^(d<<1|l>>>31),t[6]^=r,t[7]^=e,t[16]^=r,t[17]^=e,t[26]^=r,t[27]^=e,t[36]^=r,t[37]^=e,t[46]^=r,t[47]^=e,r=c^(o<<1|n>>>31),e=p^(n<<1|o>>>31),t[8]^=r,t[9]^=e,t[18]^=r,t[19]^=e,t[28]^=r,t[29]^=e,t[38]^=r,t[39]^=e,t[48]^=r,t[49]^=e,y=t[0],b=t[1],R=t[11]<<4|t[10]>>>28,V=t[10]<<4|t[11]>>>28,I=t[20]<<3|t[21]>>>29,_=t[21]<<3|t[20]>>>29,at=t[31]<<9|t[30]>>>23,ut=t[30]<<9|t[31]>>>23,N=t[40]<<18|t[41]>>>14,O=t[41]<<18|t[40]>>>14,H=t[2]<<1|t[3]>>>31,j=t[3]<<1|t[2]>>>31,v=t[13]<<12|t[12]>>>20,k=t[12]<<12|t[13]>>>20,W=t[22]<<10|t[23]>>>22,X=t[23]<<10|t[22]>>>22,J=t[33]<<13|t[32]>>>19,T=t[32]<<13|t[33]>>>19,ht=t[42]<<2|t[43]>>>30,ft=t[43]<<2|t[42]>>>30,rt=t[5]<<30|t[4]>>>2,et=t[4]<<30|t[5]>>>2,q=t[14]<<6|t[15]>>>26,D=t[15]<<6|t[14]>>>26,B=t[25]<<11|t[24]>>>21,g=t[24]<<11|t[25]>>>21,Y=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,U=t[45]<<29|t[44]>>>3,E=t[44]<<29|t[45]>>>3,m=t[6]<<28|t[7]>>>4,M=t[7]<<28|t[6]>>>4,it=t[17]<<23|t[16]>>>9,ot=t[16]<<23|t[17]>>>9,F=t[26]<<25|t[27]>>>7,G=t[27]<<25|t[26]>>>7,x=t[36]<<21|t[37]>>>11,C=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,P=t[8]<<27|t[9]>>>5,Q=t[9]<<27|t[8]>>>5,z=t[18]<<20|t[19]>>>12,S=t[19]<<20|t[18]>>>12,nt=t[29]<<7|t[28]>>>25,st=t[28]<<7|t[29]>>>25,K=t[38]<<8|t[39]>>>24,L=t[39]<<8|t[38]>>>24,w=t[48]<<14|t[49]>>>18,A=t[49]<<14|t[48]>>>18,t[0]=y^~v&B,t[1]=b^~k&g,t[10]=m^~z&I,t[11]=M^~S&_,t[20]=H^~q&F,t[21]=j^~D&G,t[30]=P^~R&W,t[31]=Q^~V&X,t[40]=rt^~it&nt,t[41]=et^~ot&st,t[2]=v^~B&x,t[3]=k^~g&C,t[12]=z^~I&J,t[13]=S^~_&T,t[22]=q^~F&K,t[23]=D^~G&L,t[32]=R^~W&Y,t[33]=V^~X&Z,t[42]=it^~nt&at,t[43]=ot^~st&ut,t[4]=B^~x&w,t[5]=g^~C&A,t[14]=I^~J&U,t[15]=_^~T&E,t[24]=F^~K&N,t[25]=G^~L&O,t[34]=W^~Y&$,t[35]=X^~Z&tt,t[44]=nt^~at&ht,t[45]=st^~ut&ft,t[6]=x^~w&y,t[7]=C^~A&b,t[16]=J^~U&m,t[17]=T^~E&M,t[26]=K^~N&H,t[27]=L^~O&j,t[36]=Y^~$&P,t[37]=Z^~tt&Q,t[46]=at^~ht&rt,t[47]=ut^~ft&et,t[8]=w^~y&v,t[9]=A^~b&k,t[18]=U^~m&z,t[19]=E^~M&S,t[28]=N^~H&q,t[29]=O^~j&D,t[38]=$^~P&R,t[39]=tt^~Q&V,t[48]=ht^~rt&it,t[49]=ft^~et&ot,t[0]^=f[i],t[1]^=f[i+1]};if(!e.JS_SHA3_TEST&&o)t.exports=B;else if(e)for(var M in B)e[M]=B[M]}(void 0)}).call(r,e(54))}},[412]);
            return { page: comp.default }
          })
        