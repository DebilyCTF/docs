# Reflections

## Description

:::note[Category]
cryptography
:::

Apparently one of the DEADFACE members disclosed their public key in some fashion on GhostTown. We tried to decipher the contents but we can’t seem to figure it out. If you can figure out how to decode this public key, it might come in handy later!

```text
(D+V(D+V(D+V(D+V(D+V(D.+(D./(D.,(D.%(D.W(D+((D/((D//(D.+(D.R(D.%(D.*(D+((D.S(D./(D/%(D+V(D+V(D+V(D+V(D+V(D(V(D(Q(D.V(D.%(D.,(D--(D.V(D.)(D*((D.,(D.*(D/*(D,)(D.,(D/*(D.%(D-+(D**(D..(D/)(D./(D.+(D.)(D/)(D//(D.)(D.)(D*.(D.,(D.W(D.)(D..(D.*(D.+(D-%(D/)(D.S(D.+(D-,(D/)(D.*(D*-(D.+(D/*(D*%(D/$(D.,(D-Q(D/-(D/((D,Q(D-/(D-S(D-*(D-U(D-,(D*+(D,+(D.Q(D*.(D-S(D.*(D-V(D-Q(D.,(D,$(D(V(D(Q(D*/(D.-(D.+(D+U(D.$(D-U(D-/(D-U(D*)(D,((D-S(D.$(D*)(D**(D.%(D.%(D.-(D/Q(D-R(D-Q(D.$(D*%(D.U(D..(D.*(D,.(D,-(D.V(D,,(D/((D//(D**(D-V(D//(D.%(D*.(D.U(D.U(D-/(D*,(D/*(D,%(D-.(D*((D-V(D,%(D.S(D-/(D/$(D.R(D-*(D+S(D-V(D,)(D*+(D.%(D,.(D-/(D,)(D-.(D..(D-,(D-)(D/+(D(V(D(Q(D*)(D*.(D,/(D.$(D,*(D.,(D/%(D-R(D.W(D-+(D-)(D-U(D.)(D*,(D,+(D.-(D+S(D/((D--(D-*(D,,(D/-(D.+(D,((D,%(D-/(D*+(D/.(D+U(D.%(D-+(D.%(D/Q(D/,(D-W(D/Q(D*/(D*.(D/-(D/%(D-/(D.+(D.-(D.*(D*((D.U(D/%(D*/(D/$(D-.(D/+(D/,(D/.(D,Q(D+U(D,)(D*,(D.S(D-,(D.*(D.S(D,)(D,-(D*$(D(V(D(Q(D-R(D*.(D-U(D,/(D-)(D.W(D..(D/.(D..(D,%(D-.(D-$(D.S(D.V(D+U(D/)(D//(D/)(D.%(D..(D.)(D/)(D.)(D.+(D(V(D(Q(D+V(D+V(D+V(D+V(D+V(D./(D.W(D..(D+((D/((D//(D.+(D.R(D.%(D.*(D+((D.S(D./(D/%(D+V(D+V(D+V(D+V(D+V(D(Q(D(Q(D--(D-R(D-)(D-,(D,S(D*+(D--(D*)(D-*(D**(D-.(D*)(D-.(D-)(D-*(D**(D-*(D*.(D--(D*/(D-+(D*+(D-+(D**(D*$(D*/(D*-(D*,(D*.(D*/(D*%(D-.(D*-(D-*(D*.(D**(D*((D,V
```

## Solution

The task description mentions some forum discussion about a public key. I found a thread where they were talking about this cipher and there was the following text there:
> It uses some sequence from Bell Labs in the 1940s. I just learned about it in my comp sci class and thought I’d try it out. I think it’s called like reflected binary or something like that.

one google search `reflected binary` tells us that this is all about [Gray code](https://en.wikipedia.org/wiki/Gray_code). Since this is all about binary representation, let's translate this obscure string into binary form. I found a Python library literally called graycode and wrote a simple script.

```py
import graycode

s = "(D+V(D+V(D+V(D+V(D+V(D.+(D./(D.,(D.%(D.W(D+((D/((D//(D.+(D.R(D.%(D.*(D+((D.S(D./(D/%(D+V(D+V(D+V(D+V(D+V(D(V(D(Q(D.V(D.%(D.,(D--(D.V(D.)(D*((D.,(D.*(D/*(D,)(D.,(D/*(D.%(D-+(D**(D..(D/)(D./(D.+(D.)(D/)(D//(D.)(D.)(D*.(D.,(D.W(D.)(D..(D.*(D.+(D-%(D/)(D.S(D.+(D-,(D/)(D.*(D*-(D.+(D/*(D*%(D/$(D.,(D-Q(D/-(D/((D,Q(D-/(D-S(D-*(D-U(D-,(D*+(D,+(D.Q(D*.(D-S(D.*(D-V(D-Q(D.,(D,$(D(V(D(Q(D*/(D.-(D.+(D+U(D.$(D-U(D-/(D-U(D*)(D,((D-S(D.$(D*)(D**(D.%(D.%(D.-(D/Q(D-R(D-Q(D.$(D*%(D.U(D..(D.*(D,.(D,-(D.V(D,,(D/((D//(D**(D-V(D//(D.%(D*.(D.U(D.U(D-/(D*,(D/*(D,%(D-.(D*((D-V(D,%(D.S(D-/(D/$(D.R(D-*(D+S(D-V(D,)(D*+(D.%(D,.(D-/(D,)(D-.(D..(D-,(D-)(D/+(D(V(D(Q(D*)(D*.(D,/(D.$(D,*(D.,(D/%(D-R(D.W(D-+(D-)(D-U(D.)(D*,(D,+(D.-(D+S(D/((D--(D-*(D,,(D/-(D.+(D,((D,%(D-/(D*+(D/.(D+U(D.%(D-+(D.%(D/Q(D/,(D-W(D/Q(D*/(D*.(D/-(D/%(D-/(D.+(D.-(D.*(D*((D.U(D/%(D*/(D/$(D-.(D/+(D/,(D/.(D,Q(D+U(D,)(D*,(D.S(D-,(D.*(D.S(D,)(D,-(D*$(D(V(D(Q(D-R(D*.(D-U(D,/(D-)(D.W(D..(D/.(D..(D,%(D-.(D-$(D.S(D.V(D+U(D/)(D//(D/)(D.%(D..(D.)(D/)(D.)(D.+(D(V(D(Q(D+V(D+V(D+V(D+V(D+V(D./(D.W(D..(D+((D/((D//(D.+(D.R(D.%(D.*(D+((D.S(D./(D/%(D+V(D+V(D+V(D+V(D+V(D(Q(D(Q(D--(D-R(D-)(D-,(D,S(D*+(D--(D*)(D-*(D**(D-.(D*)(D-.(D-)(D-*(D**(D-*(D*.(D--(D*/(D-+(D*+(D-+(D**(D*$(D*/(D*-(D*,(D*.(D*/(D*%(D-.(D*-(D-*(D*.(D**(D*((D,V"

byte_arr = bytearray(s, 'utf-8')
res = []
for byte in byte_arr:
    decoded = graycode.gray_code_to_tc(byte)
    res.append(chr(decoded))

res_s = ''.join(res)
print(res_s)
```

It results into:

```text
0x2d0x2d0x2d0x2d0x2d0x420x450x470x490x4e0x200x500x550x420x4c0x490x430x200x4b0x450x590x2d0x2d0x2d0x2d0x2d0x0d0x0a0x4d0x490x470x660x4d0x410x300x470x430x530x710x470x530x490x620x330x440x510x450x420x410x510x550x410x410x340x470x4e0x410x440x430x420x690x510x4b0x420x670x510x430x360x420x530x390x580x470x6a0x560x500x7a0x650x6b0x630x6f0x670x320x720x4a0x340x6b0x430x6d0x6a0x470x780x0d0x0a0x350x460x420x2f0x480x6f0x650x6f0x310x700x6b0x480x310x330x490x490x460x5a0x6c0x6a0x480x390x4f0x440x430x740x760x4d0x770x500x550x330x6d0x550x490x340x4f0x4f0x650x370x530x790x640x300x6d0x790x4b0x650x580x4c0x630x2b0x6d0x710x320x490x740x650x710x640x440x670x610x520x0d0x0a0x310x340x750x480x730x470x590x6c0x4e0x620x610x6f0x410x370x720x460x2b0x500x660x630x770x560x420x700x790x650x320x540x2f0x490x620x490x5a0x570x6e0x5a0x350x340x560x590x650x420x460x430x300x4f0x590x350x580x640x520x570x540x7a0x2f0x710x370x4b0x670x430x4b0x710x760x380x0d0x0a0x6c0x340x6f0x750x610x4e0x440x540x440x790x640x680x4b0x4d0x2f0x510x550x510x490x440x410x510x410x420x0d0x0a0x2d0x2d0x2d0x2d0x2d0x450x4e0x440x200x500x550x420x4c0x490x430x200x4b0x450x590x2d0x2d0x2d0x2d0x2d0x0a0x0a0x660x6c0x610x670x7b0x320x660x310x630x330x640x310x640x610x630x330x630x340x660x350x620x320x620x330x380x350x360x370x340x350x390x640x360x630x340x330x300x7d
```

Let's use [CyberChef and its magic function](https://gchq.github.io/CyberChef/#recipe=Magic(3,true,false,'')) to convert it into something we desire.

Here we are, from hex('0x'):

```text
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6BS9XGjVPzekcog2rJ4kCmjGx
5FB/Hoeo1pkH13IIFZljH9ODCtvMwPU3mUI4OOe7Syd0myKeXLc+mq2IteqdDgaR
14uHsGYlNbaoA7rF+PfcwVBpye2T/IbIZWnZ54VYeBFC0OY5XdRWTz/q7KgCKqv8
l4ouaNDTDydhKM/QUQIDAQAB
-----END PUBLIC KEY-----

flag{2f1c3d1dac3c4f5b2b38567459d6c430}
```

## Flag

:::tip[Flag]
flag\{2f1c3d1dac3c4f5b2b38567459d6c430}
:::