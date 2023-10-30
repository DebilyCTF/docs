"use strict";(self.webpackChunkweb_ctf=self.webpackChunkweb_ctf||[]).push([[681],{7859:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(5893),s=i(1151);const o={},a="Git REKT",r={id:"writeups/DEADFACE/2023/git_rekt",title:"Git REKT",description:"Description",source:"@site/docs/writeups/DEADFACE/2023/git_rekt.md",sourceDirName:"writeups/DEADFACE/2023",slug:"/writeups/DEADFACE/2023/git_rekt",permalink:"/docs/docs/writeups/DEADFACE/2023/git_rekt",draft:!1,unlisted:!1,editUrl:"https://github.com/boyney123/eventcatalog/edit/master/website/docs/writeups/DEADFACE/2023/git_rekt.md",tags:[],version:"current",lastUpdatedBy:"kostezy",frontMatter:{},sidebar:"writeups",previous:{title:"Electric Steel",permalink:"/docs/docs/writeups/DEADFACE/2023/electric_steel"},next:{title:"The Pearl of Wisdom of Eliphaz",permalink:"/docs/docs/writeups/DEADFACE/2023/pearl"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"Flag",id:"flag",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",admonition:"admonition",p:"p",code:"code",a:"a",img:"img"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"git-rekt",children:"Git REKT"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.admonition,{title:"Category",type:"note",children:(0,n.jsx)(t.p,{children:"traffic analysis"})}),"\n",(0,n.jsx)(t.p,{children:"One of our teammates at Turbo Tactical ran a phishing campaign on spookyboi and thinks spookyboi may have submitted credentials. We need you to take a look at the PCAP and see if you can find the credentials."}),"\n",(0,n.jsxs)(t.p,{children:["Submit the password as the flag: ",(0,n.jsx)(t.code,{children:"flag{password}"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{target:"_blank",href:i(4239).Z+"",children:"Attached file"})}),"\n",(0,n.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsxs)(t.p,{children:["By using filter ",(0,n.jsx)(t.code,{children:'http contains "spookyboi"'})," we see the only one HTTP packet.\nOpen and see:\n",(0,n.jsx)(t.img,{alt:"screenshot",src:i(8696).Z+"",width:"1204",height:"409"})]}),"\n",(0,n.jsx)(t.h2,{id:"flag",children:"Flag"}),"\n",(0,n.jsx)(t.admonition,{title:"Flag",type:"tip",children:(0,n.jsx)(t.p,{children:"flag{SpectralSecrets#2023}"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},4239:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/pcap-20231010-9af6c13ee05768cb0f43a363290dc477.pcap"},8696:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/photo_2023-10-30_22-22-16-77f39da5f4f908fd7e8a63320b2f87b7.jpg"},1151:(e,t,i)=>{i.d(t,{Zo:()=>r,ah:()=>o});var n=i(7294);const s=n.createContext({});function o(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:i}){let r;return r=i?"function"==typeof e?e({}):e||a:o(e),n.createElement(s.Provider,{value:r},t)}}}]);