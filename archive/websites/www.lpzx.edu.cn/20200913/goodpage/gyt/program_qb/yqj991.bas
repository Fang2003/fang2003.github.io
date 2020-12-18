REM 阳泉市计算机奥林匹克竞赛第一题
CLS
FOR i = 100 TO 999
a = INT(i / 100)
b = INT((i - a * 100) / 10)
c = i MOD 10
IF a * a * a + b * b * b + c * c * c = i THEN PRINT i,
NEXT i
END
    

