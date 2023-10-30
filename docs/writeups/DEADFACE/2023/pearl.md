# The Pearl of Wisdom of Eliphaz

## Description

:::note[Category]
steganography, programming
:::

The [Pearl](resources/eliphaz.jpg) of [Wisdom of Eliphaz](resources/wisdom-of-eliphaz.jpg)
> A word was secretly brought to me,my ears caught a whisper of it.Amid disquieting dreams in the night,when deep sleep falls on men,fear and trembling seized meand made all my bones shake.A spirit glided past my face,and the hair on my body stood on end.It stopped,but I could not tell what it was.A form stood before my eyes,and I heard a hushed voice:

> ‘Can a mortal be more righteous than God?Can even a strong man be more pure than his Maker?If God places no trust in his servants,if he charges his angels with error,how much more those who live in houses of clay,whose foundations are in the dust,who are crushed more readily than a moth!Between dawn and dusk they are broken to pieces;unnoticed, they perish forever.Are not the cords of their tent pulled up,so that they die without wisdom?'

## Solution

The first step of stego is always `strings`. So running strings on the Pearl image reveals us something interesting

```sh
$ strings -n 10 eliphaz.jpg
...
https://tinyurl.com/y8av84zr
:Sequere viam superius ad inveniendum margaritam sapientiae
...
```

Url and latin text that translates as `Follow the path above to find the pearl of wisdom`. So let's follow the url

```perl title="https://cyberhacktics.sfo2.digitaloceanspaces.com/DEADFACECTF2023/Challenges/steg/steg03/pearl.pl"
$pw = '???'; # Arcanum ex verbis poematis creatum
# Fons veritatis
$pw =~ /^([A-Z][a-z]{8})\W([A-Z][a-z]{4})\((\d{4})\)$/ ? print("Veritas\n") : print("Mendacium\n");
# Paulo plus auxilium
$a = $2; $b = $3;
$a =~ /^[A-P]\w{3}r$/ ? print("Veritas\n") : print("Mendacium\n");
# Circumscribere dolor aliquantum
$b =~ /^20\d\d$/ ? print("Veritas\n") : print("Mendacium\n");
```

Latin again, let's translate and highlight interesting strings

```perl {3,6,8} title="pearl.pl" showLineNumbers
$pw = '???'; # a mystery created from the words of the poem
# The source of truth
$pw =~ /^([A-Z][a-z]{8})\W([A-Z][a-z]{4})\((\d{4})\)$/ ? print("True\n") : print("False\n");
# A little more help
$a = $2; $b = $3;
$a =~ /^[A-P]\w{3}r$/ ? print("True\n") : print("False\n");
# Limit the pain somewhat
$b =~ /^20\d\d$/ ? print("True\n") : print("False\n");
```

Parsing uppermentioned regexes shows us:

`([A-Z][a-z]{8})` - the word starts with a capital letter and consists of 9 characters

`\W` - `*↵+:~'[%;){]!>\"@?#$(&\}|<,=^.`

`([A-Z][a-z]{4})` - the word starts with a capital letter and consists of 5 characters

`((\d{4})\)` - 4 digits in brackets

There are too many variations, so most likely the words we need lie in the bible quotes in the task description. Simple JS script might be helpfull there. I used regular expressions from the prompts in the perl script and ran the script on them.

```js
const a =
  "A word was secretly brought to me my ears caught a whisper of it Amid disquieting dreams in the night when deep sleep falls on men fear and trembling seized meand made all my bones shake A spirit glided past my face and the hair on my body stood on end It stopped but I could not tell what it was A form stood before my eyes and I heard a hushed voice Can a mortal be more righteous than God Can even a strong man be more pure than his Maker If God places no trust in his servants if he charges his angels with error how much more those who live in houses of clay whose foundations are in the dust who are crushed more readily than a moth!Between dawn and dusk they are broken to pieces unnoticed they perish forever Are not the cords of their tent pulled up so that they die without wisdom".split(' ');

a.forEach((e) => {
  const match = e.match(/([A-Z][a-z]{4})/);
  if (match) {
    console.log(match[1]);
  }
})
```

For the first word I found the following options: `Disquieti, Trembling, Righteous, Foundatio, Unnoticed` and for the second: `Maker, Betwe`, the number is in range `2000-2099`. Running the perl script we can see that we pass the conditions. But what it gives us???

Let's analyze second image. Using all the standard utilities we found nothing. The stegseek on the rockyou also yielded nothing, but there is another options on stegseek.

```sh
$ stegseek --seed wisdom-of-eliphaz.jpg
StegSeek 0.6 - https://github.com/RickdeJager/StegSeek

[i] Found (possible) seed: "cda0a9b4"             
    Plain size: 88.0 Byte(s) (compressed)
    Encryption Algorithm: rijndael-128
    Encryption Mode:      cbc
```

Hmm... sounds interesting, what if the password can be one of the variation from perl script? Let's make a wordlist and try running stegseek using generated wordlist. (I intentionally omitted Betwe from the list because Maker sounds more believable.)

```js
const symbols = "*↵+:~'[%;){`]!>\"@?#$(&\}|<,=^.".split("");
const firstWords = ['Disquieti', 'Trembling', 'Righteous', 'Foundatio', 'Unnoticed'];
const lastWord = 'Maker';
const numbers = Array.from({length: 100}, (_, i) => i + 2000);

const res = [];

firstWords.forEach((firstWord) => {
  symbols.map((symbol) => {
    numbers.map((number) => {
      res.push(`${firstWord}${symbol}${lastWord}(${number})`)
    });
  });
});

const fs = require('node:fs')
fs.writeFileSync('./wordlist.txt', res.join('\n'));
```

I got 14500 passwords, so I have to see if it works.

```sh
$ stegseek wisdom-of-eliphaz.jpg ./wordlist.txt 
StegSeek 0.6 - https://github.com/RickdeJager/StegSeek

    [i] Found passphrase: "Righteous%Maker(2023)"
    [i] Original filename: "wisdom-of-knox.txt".
    [i] Extracting to "wisdom-of-eliphaz.jpg.out".

$ cat wisdom-of-eliphaz.jpg.out
flag{Oh_Y_Sh0uld_The_Sp1rit_of_M0rtal_B3_Pr0ud?}
```

## Flag

:::tip[Flag]
flag\{Oh_Y_Sh0uld_The_Sp1rit_of_M0rtal_B3_Pr0ud?}
:::
