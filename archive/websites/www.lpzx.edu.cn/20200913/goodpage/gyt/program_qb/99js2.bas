CLS
INPUT "n="; n
INPUT "m="; m$
d$ = m$
10 l$ = d$
l = LEN(l$)
d$ = "": e$ = ""
FOR i = 1 TO l
a$ = MID$(l$, i, 1)
B$ = MID$(l$, l + 1 - i, 1)
a = VAL(a$)
B = VAL(B$)
IF a$ = "A" OR a$ = "a" THEN a = 10
IF a$ = "B" OR a$ = "b" THEN a = 11
IF a$ = "C" OR a$ = "c" THEN a = 12
IF a$ = "D" OR a$ = "d" THEN a = 13
IF a$ = "F" OR a$ = "f" THEN a = 15
IF a$ = "E" OR a$ = "e" THEN a = 14
IF B$ = "A" OR B$ = "a" THEN B = 10
IF B$ = "B" OR a$ = "b" THEN B = 11
IF B$ = "C" OR a$ = "c" THEN B = 12
IF B$ = "D" OR a$ = "d" THEN B = 13
IF B$ = "F" OR a$ = "f" THEN B = 15
IF B$ = "E" OR a$ = "e" THEN B = 14
d = a + B + c
IF d >= n THEN
d = d - n
c = 1
ELSE
c = 0
END IF
IF d >= 10 THEN x$ = CHR$(65 + (d MOD 10)) ELSE x$ = RIGHT$(STR$(d), 1)
d$ = x$ + d$
e$ = e$ + x$
NEXT i
IF c = 1 THEN d$ = "1" + d$: e$ = e$ + "1": c = 0
x = x + 1
PRINT d$
IF e$ = d$ THEN PRINT "step="; x: END
IF x = 30 THEN PRINT "i..c!": END
GOTO 10

