CLS
FOR a = 1 TO 9
FOR b = 1 TO 9: IF b = a THEN 80
FOR c = 1 TO 9: IF c = a OR c = b THEN 70
FOR d = 1 TO 9: IF d = a OR d = b OR d = c THEN 60
FOR e = 1 TO 9: IF e = a OR e = b OR e = c OR e = d THEN 50
FOR f = 1 TO 9: IF f = a OR f = b OR f = c OR f = d OR f = e THEN 40
FOR g = 1 TO 9: IF g = a OR g = b OR g = c OR g = d OR g = e OR g = f THEN 30
FOR h = 1 TO 9: IF h = a OR h = b OR h = c OR h = d OR h = e OR h = f OR h = g THEN 20
FOR i = 1 TO 9: IF i = a OR i = b OR i = c OR i = d OR i = e OR i = f OR i = g OR i = h THEN 10
x = a * 100 + b * 10 + c
y = d * 100 + e * 10 + f
z = g * 100 + h * 10 + i
IF x MOD 69 <> 0 THEN 70
IF y MOD 69 <> 0 THEN 40
IF z MOD 69 <> 0 THEN 10
IF x > y OR x > z OR y > z THEN 30
PRINT x, y, z
10 NEXT i
20 NEXT h
30 NEXT g
40 NEXT f
50 NEXT e
60 NEXT d
70 NEXT c
80 NEXT b
90 NEXT a
END

