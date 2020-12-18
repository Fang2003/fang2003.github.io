CLS
INPUT "n=", n
DIM a$(n)
m = 0
FOR i = 1 TO n
INPUT a$(i)
NEXT i
FOR i = 1 TO n
FOR j = 1 TO n
IF i = j THEN 10
PRINT a$(i); "---"; a$(j),
m = m + 1
10 NEXT j
NEXT i
PRINT "车票种类是:"; m
END

