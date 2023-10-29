"use strict";(self.webpackChunkweb_ctf=self.webpackChunkweb_ctf||[]).push([[56],{2358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(5893),s=t(1151);const o={},i="Biggest Lowest (50 points)",a={id:"writeups/X-MAS/2020/biggest_lowest",title:"Biggest Lowest (50 points)",description:"Description",source:"@site/docs/writeups/X-MAS/2020/biggest_lowest.md",sourceDirName:"writeups/X-MAS/2020",slug:"/writeups/X-MAS/2020/biggest_lowest",permalink:"/<projectName>/docs/writeups/X-MAS/2020/biggest_lowest",draft:!1,unlisted:!1,editUrl:"https://github.com/boyney123/eventcatalog/edit/master/website/docs/writeups/X-MAS/2020/biggest_lowest.md",tags:[],version:"current",lastUpdatedBy:"kostezy",frontMatter:{},sidebar:"writeups",previous:{title:"Stolen licenses (300 points)",permalink:"/<projectName>/docs/writeups/Syskron/2020/stolen_licenses"},next:{title:"Conversation (50 points)",permalink:"/<projectName>/docs/writeups/X-MAS/2020/conversation"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"biggest-lowest-50-points",children:"Biggest Lowest (50 points)"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"I see you're eager to prove yourself, why not try your luck with this problem?"}),"\n",(0,r.jsx)(n.p,{children:"Target: nc challs.xmas.htsp.ro 6051"}),"\n",(0,r.jsx)(n.p,{children:"Authors: Gabies, Nutu"}),"\n",(0,r.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ nc challs.xmas.htsp.ro 6051\nSo you think you have what it takes to be a good programmer?\nThen solve this super hardcore task:\nGiven an array print the first k1 smallest elements of the array in increasing order and then the first k2 elements of the array in decreasing order.\nYou have 50 tests that you'll gave to answer in maximum 30 seconds, GO!\nHere's an example of the format in which a response should be provided:\n1, 2, 3; 10, 9, 8\n\nTest number: 1/50\narray = [3, 6, 2, 6, 6]\nk1 = 3\nk2 = 1\n"})}),"\n",(0,r.jsx)(n.p,{children:"A very simple task. It is necessary to write a script, I used python and the pwntools library for connection. (I'm not good at python, so the code is garbage)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from pwn import *\n\nconn = remote(\'challs.xmas.htsp.ro\', 6051)\n\nfor x in range (50):\n    conn.recvuntil("array = ")\n    arr = conn.recvline().decode("utf-8") \n    conn.recvuntil("k1 = ")\n    k1 = conn.recvline().decode("utf-8") \n    conn.recvuntil("k2 = ")\n    k2 = conn.recvline().decode("utf-8") \n\n    newArr = [int(i) for i in arr[1:-2].split(\', \')]\n    sortedArr = sorted(newArr)\n    newArr.sort(reverse = True)\n    str1 = \', \'.join(str(e) for e in sortedArr[:int(k1)])\n    str2 = \', \'.join(str(e) for e in newArr[:int(k2)])\n    payload = str1 + "; " + str2\n    conn.sendline(payload)\n\nconn.interactive()\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[*] Switching to interactive mode\nGood, that's right!\nThose are some was lightning quick reflexes you've got there!\n Here's your flag: X-MAS{th15_i5_4_h34p_pr0bl3m_bu7_17'5_n0t_4_pwn_ch41l}\n[*] Got EOF while reading in interactive\n"})}),"\n",(0,r.jsx)(n.p,{children:"Flag: X-MAS{th15_i5_4_h34p_pr0bl3m_bu7_17'5_n0t_4_pwn_ch41l}"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},1151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>o});var r=t(7294);const s=r.createContext({});function o(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:o(e),r.createElement(s.Provider,{value:a},n)}}}]);