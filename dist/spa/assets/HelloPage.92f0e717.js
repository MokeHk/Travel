import{u as U,a as X,Q as Y,b as Z}from"./QBtn.26cdec4c.js";import{k as L,c as o,h as r,r as v,v as ee,o as te,E as ae,w as ne,g as D,G as F,z as p,A as R,B as k,f as u,H as b,I as z,J as re,K as oe,y as q,L as H,F as I,M as ie}from"./index.32f83b36.js";import{h as T}from"./render.23090be3.js";import{u as le,a as se,b as M,_ as j,Q as ce,H as ue,F as de,M as ge}from"./MapComponent.27dea0f2.js";import{v as $}from"./vm.3b972a3a.js";import"./QResizeObserver.5856ae18.js";import"./dom.4e6871b9.js";var me=L({name:"QCardActions",props:{...U,vertical:Boolean},setup(e,{slots:a}){const n=X(e),i=o(()=>`q-card__actions ${n.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>r("div",{class:i.value},T(a.default))}});const ve=1.7778;var fe=L({name:"QImg",props:{...le,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ve},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:n}){const i=v(e.initialRatio),d=se(e,i),g=D(),{registerTimeout:_,removeTimeout:f}=M(),{registerTimeout:w,removeTimeout:h}=M(),m=o(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),x=o(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),l=[v(null),v(m.value)],s=v(0),y=v(!1),S=v(!1),A=o(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),N=o(()=>({width:e.width,height:e.height})),E=o(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),O=o(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function V(){if(h(),e.loadingShowDelay===0){y.value=!0;return}w(()=>{y.value=!0},e.loadingShowDelay)}function B(){h(),y.value=!1}function G({target:t}){$(g)===!1&&(f(),i.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,P(t,1))}function P(t,c){c===1e3||$(g)===!0||(t.complete===!0?J(t):_(()=>{P(t,c+1)},50))}function J(t){$(g)!==!0&&(s.value=s.value^1,l[s.value].value=null,B(),t.getAttribute("__qerror")!=="true"&&(S.value=!1),n("load",t.currentSrc||t.src))}function K(t){f(),B(),S.value=!0,l[s.value].value=x.value,l[s.value^1].value=m.value,n("error",t)}function Q(t){const c=l[t].value,C={key:"img_"+t,class:E.value,style:O.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...c};return s.value===t?Object.assign(C,{class:C.class+"current",onLoad:G,onError:K}):C.class+="loaded",r("div",{class:"q-img__container absolute-full",key:"img"+t},r("img",C))}function W(){return y.value===!1?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},T(a[S.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[r(Y,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){ne(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,c=>{f(),S.value=!1,c===null?(B(),l[s.value^1].value=m.value):V(),l[s.value].value=c},{immediate:!0})};ee.value===!0?te(t):t()}return()=>{const t=[];return d.value!==null&&t.push(r("div",{key:"filler",style:d.value})),l[0].value!==null&&t.push(Q(0)),l[1].value!==null&&t.push(Q(1)),t.push(r(ae,{name:"q-transition--fade"},W)),r("div",{key:"main",class:A.value,style:N.value,role:"img","aria-label":e.alt},t)}}});const _e={dark:{type:Boolean,default:null}};function he(e,a){return o(()=>e.dark===null?a.dark.isActive:e.dark)}var ye=L({name:"QCard",props:{..._e,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:n}}=D(),i=he(e,n),d=o(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>r(e.tag,{class:d.value},T(a.default))}});const Se={computed:{...F("places",["places"])},props:{place:{type:Object,required:!0}},methods:{toggleLike(){this.$store.dispatch("places/togglePlaceLike",this.place.id)}}},Ce={class:"absolute-bottom title-container"};function ke(e,a,n,i,d,g){return p(),R(ye,{class:"my-card",onClick:a[0]||(a[0]=_=>e.$router.push(`/${n.place.id}`))},{default:k(()=>[u(fe,{src:n.place.image,basic:""},{default:k(()=>[b("div",Ce,[b("span",null,z(n.place.title),1),u(me,{align:"right"},{default:k(()=>[u(Z,{flat:"",round:"",icon:"favorite",color:n.place.isLiked?"red":"grey",onClick:re(g.toggleLike,["stop"])},null,8,["color","onClick"])]),_:1})])]),_:1},8,["src"]),u(ce,null,{default:k(()=>[oe(z(n.place.description),1)]),_:1})]),_:1})}var qe=j(Se,[["render",ke],["__scopeId","data-v-3e398758"]]);const pe={components:{PlaceCard:qe,HeaderComponent:ue,FooterComponent:de,MapComponent:ge},computed:{...F("places",["places"])}},be={class:"q-pa-xl justify-center"},we={class:"q-pa-md row items-start q-gutter-md justify-center"};function Be(e,a,n,i,d,g){const _=q("HeaderComponent"),f=q("MapComponent"),w=q("PlaceCard"),h=q("FooterComponent");return p(),H(I,null,[u(_),b("div",be,[u(f)]),b("div",we,[(p(!0),H(I,null,ie(e.places,m=>(p(),R(w,{key:m.id,place:m},null,8,["place"]))),128))]),u(h)],64)}var Ie=j(pe,[["render",Be],["__scopeId","data-v-9c929fce"]]);export{Ie as default};
