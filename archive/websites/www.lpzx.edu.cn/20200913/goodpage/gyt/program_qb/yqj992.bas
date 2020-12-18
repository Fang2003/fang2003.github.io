' 阳泉市九九计算机奥林匹克小学组二题
CLS
FOR i = 123 TO 987
a = INT(i / 100)
b = INT((i - a * 100) / 10)
c = i MOD 10
IF a = b OR b = c OR c = a OR a = 0 OR b = 0 OR c = 0 THEN 10
IF b <= a + c THEN 10
FOR j = 2 TO (a + b) - 1
IF (b + a) MOD j = 0 THEN 10
NEXT j
PRINT i,
10 NEXT i

