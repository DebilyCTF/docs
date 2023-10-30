# Dead Drop

## Description

:::note[Category]
programming
:::

The Incident Response Team at Aurora Pharmaceuticals recently recovered this file from a user’s computer. The artifacts indicate it was accessed by what they believe to be multiple DEADFACE members. The program appears to have set up the user’s workstation as a dead drop for DEADFACE members to convert a secret numerical code into a password string for further target access. Our decoding attempts have been unsuccessful, but the script appears to contain a recovery code that may be a good starting point.

Submit the flag as `flag{the password}` exactly how `print_password()` returns it.

```py
# Password recovery:
# buA9kvZ=T_A}b[J8l:@ob_tviPZtb_<olOpxkvZ=T_=xju]olOpxkvZ=T_bxlu]olOpxkvZ=QIEE
arr = ['empty', 'interest', 'current', 'valuable', 'influence', 'from', 'scolded', 'would', 'got', 'key', 'facility', 'run', 'great', 'tack', 'scent', 'close', 'are', 'a', 'plan', 'counter', 'earth', 'self', 'we', 'sick', 'return', 'admit', 'bear', 'cache', 'to', 'grab', 'domination', 'feedback', 'especially', 'motivate', 'tool', 'world', 'phase', 'semblance', 'tone', 'is', 'will', 'the', 'can', 'global', 'tell', 'box', 'alarm', 'life', 'necessary']
def print_password(nums):
    if len(nums) < 1:
        print("Must provide a list of at least one number i.e. [1]")
    print("flag{{{}}}".format(" ".join([arr[num] for num in nums])))

def left_shift(s, n):
    return ''.join(chr(ord(char) - n) for char in s)
```

## Solution

Trying to find something interesting

```py
passRec = 'buA9kvZ=T_A}b[J8l:@ob_tviPZtb_<olOpxkvZ=T_=xju]olOpxkvZ=T_bxlu]olOpxkvZ=QIEE'
for x in range(-20, 30):
    test = left_shift(passRec, x)
    print(test)
```

```text {4}
...
\o;3epT7NY;w\UD2f4:i\YnpcJTn\Y6ifIjrepT7NY7rdoWifIjrepT7NY\rfoWifIjrepT7KC??
[n:2doS6MX:v[TC1e39h[XmobISm[X5heHiqdoS6MX6qcnVheHiqdoS6MX[qenVheHiqdoS6JB>>
Zm91cnR5LW9uZSB0d28gZWlnaHRlZW4gdGhpcnR5LW5pbmUgdGhpcnR5LWZpdmUgdGhpcnR5IA==
Yl80bmQ4KV8tYRA/c17fYVkm`GQkYV3fcFgobmQ4KV4oalTfcFgobmQ4KVYoclTfcFgobmQ4H@<<
Xk7/alP3JU7sXQ@.b06eXUjl_FPjXU2ebEfnalP3JU3n`kSebEfnalP3JUXnbkSebEfnalP3G?;;
...
```

Looks like base64

```text
fourty-one two eighteen thirty-nine thirty-five thirty
```

```py
print(print_password([41, 2, 18, 39, 35, 30]))
```

## Flag

:::tip[Flag]
flag\{the current plan is world domination}
:::
