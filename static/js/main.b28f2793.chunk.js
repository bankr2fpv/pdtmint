(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(64),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,b,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>3&&void 0!==f[3]?f[3]:"recent",o=f.length>4&&void 0!==f[4]&&f[4],s=!1,u={slot:0,confirmations:0,err:null},b=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(f,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);try{b=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),l(u)):(console.log("Resolved via websocket",e),f(u))}),i)}catch(d){s=!0,console.error("WS error in setup",t,d)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,l(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[b]&&r.removeSignatureListener(b),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,b,f,l,d,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),b={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return f=e.sent,l=f.data.itemsAvailable.toNumber(),d=f.itemsRedeemed.toNumber(),p=l-d,m=f.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:b,itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,f,d,O,g,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,f=t.connection,d=t.program,e.next=7,m(s.publicKey);case 7:return O=e.sent,e.next=10,p(s.publicKey);case 10:return g=e.sent,e.next=13,f.getMinimumBalanceForRentExemption(o.a.span);case 13:return x=e.sent,e.next=16,d.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:O,masterEdition:g,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:x,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),l(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(29),b=n.n(u),f=(n(353),n(354),n(12)),l=n(1),d=n.n(l),p=n(4),m=n(13),j=n(132),O=n(134),g=n(313),x=n(596),y=n(601),h=n(605),v=n(604),S=n(15),w=n(52),k=n(175),P=n(133),_=n(27),K=Object(O.a)(k.a)(r||(r=Object(j.a)([""]))),R=O.a.span(c||(c=Object(j.a)([""]))),T=O.a.div(a||(a=Object(j.a)([""]))),M=Object(O.a)(x.a)(i||(i=Object(j.a)([""]))),A=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(_.jsxs)(R,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},L=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=n[0],c=n[1],a=Object(o.useState)(!1),i=Object(m.a)(a,2),s=i[0],u=i[1],b=Object(o.useState)(!1),l=Object(m.a)(b,2),j=l[0],O=l[1],x=Object(o.useState)(!1),k=Object(m.a)(x,2),R=k[0],L=k[1],B=Object(o.useState)(0),D=Object(m.a)(B,2),C=D[0],E=D[1],I=Object(o.useState)(0),W=Object(m.a)(I,2),N=W[0],F=W[1],U=Object(o.useState)(0),Y=Object(m.a)(U,2),V=Y[0],J=Y[1],q=Object(o.useState)({open:!1,message:"",severity:void 0}),H=Object(m.a)(q,2),G=H[0],z=H[1],Z=Object(o.useState)(new Date(e.startDate)),Q=Object(m.a)(Z,2),X=Q[0],$=Q[1],ee=Object(w.c)(),te=Object(o.useState)(),ne=Object(m.a)(te,2),re=ne[0],ce=ne[1],ae=function(){Object(p.a)(d.a.mark((function t(){var n,r,c,a,i,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ee){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(ee,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,E(a),J(i),F(o),O(0===i),$(c),ce(r);case 16:case"end":return t.stop()}}),t)})))()},ie=function(){var t=Object(p.a)(d.a.mark((function t(){var n,r,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,L(!0),!ee||!(null===re||void 0===re?void 0:re.program)){t.next=10;break}return t.next=5,Object(P.c)(re,e.config,ee.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?z({open:!0,message:"Mint failed! Please try again!",severity:"error"}):z({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",O(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),z({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!ee){t.next=23;break}return t.next=21,e.connection.getBalance(ee.publicKey);case 21:i=t.sent,c(i/S.LAMPORTS_PER_SOL);case 23:return L(!1),ae(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ee){t.next=5;break}return t.next=3,e.connection.getBalance(ee.publicKey);case 3:n=t.sent,c(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ee,e.connection]),Object(o.useEffect)(ae,[ee,e.candyMachineId,e.connection]),Object(_.jsxs)("main",{style:{display:"flex",flexDirection:"column",padding:30,height:"100vh"},children:[Object(_.jsxs)("div",{className:"mint-container",style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Please Don't Tell"}),Object(_.jsx)("p",{children:"Mint price : 0.3 sol"}),Object(_.jsx)("p",{children:"1 NFT per transaction"}),Object(_.jsx)("p",{children:"_____________________"}),ee&&Object(_.jsxs)("p",{children:["Wallet: ",Object(P.d)(ee.publicKey.toBase58()||"")]}),ee&&Object(_.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),ee&&Object(_.jsxs)("p",{children:["Supply: ",C," / ",N]}),ee&&Object(_.jsxs)("p",{children:["Remaining: ",V]})]}),Object(_.jsx)(T,{children:ee?Object(_.jsx)(M,{disabled:j||R||!s,onClick:ie,variant:"contained",children:j?"SOLD OUT":s?R?Object(_.jsx)(y.a,{}):"MINT":Object(_.jsx)(g.a,{date:X,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:A})}):Object(_.jsx)(K,{children:"Connect Wallet"})})]}),Object(_.jsx)(h.a,{open:G.open,autoHideDuration:6e3,onClose:function(){return z(Object(f.a)(Object(f.a)({},G),{},{open:!1}))},children:Object(_.jsx)(v.a,{onClose:function(){return z(Object(f.a)(Object(f.a)({},G),{},{open:!1}))},severity:G.severity,children:G.message})})]})},B=n(32),D=n(116),C=n(340),E=n(602),I=new B.d.PublicKey("8qfjjAdeyF8nDZ4LjAzs5yMXr6AcTybDnbnFHcJ8G6DV"),W=new B.d.PublicKey("BfLCHmCott7a5hg32PFETnUekG4AHDYctN9JC4VWqKJK"),N=new B.d.PublicKey("EgLF4dVQwahYSD82CBuoYbitcVfuVCEJvjKeyvg1KsJU"),F="mainnet-beta",U=new B.d.Connection("https://explorer-api.mainnet-beta.solana.com"),Y=parseInt("1639573200",10),V=Object(C.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),J=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(F)}),[]),t=Object(o.useMemo)((function(){return[Object(D.a)(),Object(D.b)(),Object(D.c)(),Object(D.e)({network:F}),Object(D.d)({network:F})]}),[]);return Object(_.jsx)(E.a,{theme:V,children:Object(_.jsx)(w.a,{endpoint:e,children:Object(_.jsx)(w.b,{wallets:t,autoConnect:!0,children:Object(_.jsx)(k.b,{children:Object(_.jsx)(L,{candyMachineId:N,config:W,connection:U,startDate:Y,treasury:I,txTimeout:3e4})})})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(J,{})}),document.getElementById("root")),q()}},[[569,1,2]]]);
//# sourceMappingURL=main.b28f2793.chunk.js.map