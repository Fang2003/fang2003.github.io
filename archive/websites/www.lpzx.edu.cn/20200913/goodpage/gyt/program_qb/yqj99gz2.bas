CLS
DIM a(1000)
FOR n = 1 TO 1000
j = 0: s = 0
FOR i = 1 TO n - 1
IF n / i = INT(n / i) THEN j = j + 1: a(j) = i
NEXT i
FOR i = 1 TO j
s = s + a(i)
NEXT i
IF n = s THEN PRINT n,
NEXT n

