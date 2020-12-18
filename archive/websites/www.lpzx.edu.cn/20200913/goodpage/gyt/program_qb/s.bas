CLS
FOR I = 1 TO 9
READ A$, A, B, C
PRINT A$, "总成绩:"; A + B + C,
P = (A + B + C) / 3
PRINT "平均分:"; P
IF P > 59 AND P < 70 THEN Q = Q + 1
IF P > 69 AND P < 80 THEN E = E + 1
IF P > 79 THEN S = S + 1
IF P < 60 THEN D = D + 1
NEXT I
DATA 刘,87,98,99,王,97,96,95,严,94,93,92,郭,91,100,99,张,88,97,96,李,95,90,98,郝,97,96,96,龚,96,99,100,杨,98,89,87
PRINT "及格:"; Q, "良好:"; E, "优秀:"; S, "不及格:"; D
PRINT "及格率:"; (Q + E + S) / 9 * 100; "%"
END

