CLS
0 INPUT "x,y......z=", x$, y, z
IF y = 0 THEN GOTO 0
x = LEN(x$): DIM a(x)
FOR i = 1 TO x: a(i) = VAL(MID$(x$, i, 1)): NEXT i
PRINT x$; "/"; y; "=";
FOR i = 1 TO x
c = a(i) + b * 10
IF INT(c / y) <> 0 AND m = 0 THEN m = 1
IF INT(c / y) = 0 AND m = 0 AND i <> x THEN 1
PRINT RIGHT$(STR$(INT(c / y)), 1);
1 b = c MOD y
NEXT i
IF z <> 0 THEN PRINT ".";
n = b
FOR i = 1 TO z
l = n * 10
IF INT(l / y) > 5 AND i = z THEN PRINT RIGHT$(STR$(INT(l / y) + 1), 1): GOTO 10
PRINT RIGHT$(STR$(INT(l / y)), 1);
n = l MOD y
10 NEXT i

