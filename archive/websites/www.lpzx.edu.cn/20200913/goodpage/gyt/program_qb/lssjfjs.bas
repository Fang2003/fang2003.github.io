1 INPUT "x,y="; x$, y$: u = VAL(x$) + VAL(y$): w$ = RIGHT$(STR$(u), LEN(STR$(u)) - 1)
IF LEN(w$) > 8 THEN PRINT "错误,请重新输入.": GOTO 1
x = LEN(x$): y = LEN(y$)
DIM a$(x), B$(y), c$(x + y)
FOR i = 1 TO x: a$(i) = MID$(x$, i, 1): NEXT
FOR j = 1 TO y: B$(j) = MID$(y$, j, 1): NEXT
FOR i = 1 TO x: IF a$(i) = "." THEN z = 1
IF z = 1 AND a$(i) <> "." THEN x1 = x1 + 1
NEXT i
FOR j = 1 TO y: IF B$(j) = "." THEN zy = 1
IF zy = 1 AND B$(j) <> "." THEN y1 = y1 + 1
NEXT j
IF x1 > y1 THEN
   FOR i = 1 TO x1 - y1
   y = y + 1
   NEXT i
END IF
IF y1 > x1 THEN
   FOR j = 1 TO y1 - x1
   x = x + 1: x1 = x1 + 1
   NEXT j
END IF
PRINT TAB(11 - x); x$
PRINT TAB(1); "＋"; TAB(11 - y); y$
FOR i = 1 TO 5
PRINT "━"; : NEXT i: PRINT
PRINT TAB(11 - LEN(STR$(INT(u))) - x1); w$

