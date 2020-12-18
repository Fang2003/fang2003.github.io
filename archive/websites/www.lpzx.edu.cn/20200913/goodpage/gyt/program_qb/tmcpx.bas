   DATA 111,12.5,122,13.4,133,12.1,211,10.5,222,11.3,233,14.5,311,12.5,322,12.5,333,12.1,411,13.0,422,12.5,433,10.5
   DIM A(12), B(12)
   FOR I = 1 TO 12
   READ A(I), B(I)
   NEXT I
   FOR I = 1 TO 11
   FOR j = I + 1 TO 12
   IF B(I) > B(j) THEN SWAP A(I), A(j): SWAP B(j), B(I)
   NEXT j, I
   L = 1: PRINT "名次", "学号", " 成绩"
   FOR I = 1 TO 12
10 IF B(I) = B(I - 1) THEN M = 1: L = L + 1: GOTO 30
20 M = 0: K = K + L
30 PRINT K, A(I), B(I)
40 IF M = 0 THEN L = 1
   NEXT I


