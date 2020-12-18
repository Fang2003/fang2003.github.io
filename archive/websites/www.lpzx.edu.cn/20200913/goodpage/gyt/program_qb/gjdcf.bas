CLS
INPUT "x/y......z=", x$, y$, z
x = VAL(x$): y = VAL(y$)
m = INT(x / y)
n = x MOD y
PRINT x$; "/"; y$; "="; RIGHT$(STR$(m), LEN(STR$(m)) - 1);
IF z <> 0 THEN PRINT ".";
FOR i = 1 TO z
l = n * 10
PRINT RIGHT$(STR$(INT(l / y)), 1);
n = l MOD y
NEXT i

