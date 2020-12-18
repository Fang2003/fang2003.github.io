1 INPUT "n="; n: IF n > 9 THEN 1
FOR i = 1 TO n * 2 - 1 STEP 2
j = j + 1
j$ = MID$(STR$(j), 2, 1)
PRINT TAB(n - j + 1); j$;
FOR k = 2 TO i
PRINT j$;
NEXT k
PRINT
NEXT i
FOR i = n - 1 TO 1 STEP -1
i$ = MID$(STR$(i), 2, 1)
PRINT TAB(n - i + 1); i$;
FOR j = 2 TO i * 2 - 1
PRINT i$;
NEXT
PRINT
NEXT



