async function q(a,p){
 const e=new TextEncoder(),b=Uint8Array.from(atob(a),c=>c.charCodeAt(0)),n=b.slice(0,12),x=b.slice(12),S=crypto.subtle;
 const z=a=>String.fromCharCode(...a),A=z([65,69,83,45,71,67,77]),H=z([83,72,65,45,50,53,54]);
 const D=z([100,105,103,101,115,116]),I=z([105,109,112,111,114,116,75,101,121]),R=z([100,101,99,114,121,112,116]);
 const h=await S[D](H,e.encode(p)),k=await S[I]('raw',h,{name:A},false,[R]);
 try{return await new Response(await S[R]({name:A,iv:n},k,x)).text()}catch{return null}
}
Object.defineProperty(window,'_v',{value:q,enumerable:false});