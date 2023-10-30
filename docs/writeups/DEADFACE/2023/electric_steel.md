# Electric Steel

## Description

:::note[Category]
steganography
:::

Check out this image DEADFACE left on one of their victims' machines. We tried a couple tools and they didn’t reveal anything. Take a look and see what you can find.

Submit the flag as flag\{flag_text}.

[Attached image](resources/electric-steel.png)

## Solution

```sh
$ binwalk -e electric-steel.png 

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             PNG image, 1232 x 928, 8-bit/color RGB, non-interlaced
2767          0xACF           Zlib compressed data, default compression
1435378       0x15E6F2        TIFF image data, big-endian, offset of first image directory: 8
1435914       0x15E90A        Copyright string: "Copyright (c) 1998 Hewlett-Packard Company"
1467642       0x1664FA        gzip compressed data, from Unix, last modified: 2023-06-04 01:14:27
```

```sh
$ cd _electric-steel.png.extracted && ls
1664FA  ACF  ACF.zlib

$ cat 1664FA
flag.txt0000664000175000017500000000003614436762547012573 0ustar  syyntaxsyyntaxflag{3L3ctr1c_5t33L_b1G_H41R}
```

## Flag

:::tip[Flag]
flag\{3L3ctr1c_5t33L_b1G_H41R}
:::
