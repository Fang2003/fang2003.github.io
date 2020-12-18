CLS
FOR g = 10 TO 999999
FOR i = 2 TO LEN(STR$(g))
j$ = MID$(STR$(g), i, 1) + j$
NEXT i
h = VAL(j$)
j$ = ""
IF g = h AND SQR(g) = INT(SQR(g)) THEN PRINT g,
NEXT g

