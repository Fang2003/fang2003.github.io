FOR a = 1 TO 5
FOR b = 1 TO 5: IF b = a THEN 40
FOR c = 1 TO 5: IF c = a OR c = b THEN 30
FOR d = 1 TO 5: IF d = a OR d = b OR d = c THEN 20
FOR e = 1 TO 5: IF e = a OR e = b OR e = c OR e = d THEN 10
IF (b = 2) + (a = 3) = -1 THEN
   IF (b = 2) + (e = 4) = -1 THEN
      IF (c = 1) + (d = 2) = -1 THEN
         IF (c = 5) + (d = 3) = -1 THEN
            IF (e = 4) + (a = 1) = -1 THEN
               PRINT "A是:第"; a; "名"
               PRINT "B是:第"; b; "名"
               PRINT "C是:第"; c; "名"
               PRINT "D是:第"; d; "名"
               PRINT "E是:第"; e; "名"
            END IF
         END IF
      END IF
   END IF
END IF
10 NEXT e
20 NEXT d
30 NEXT c
40 NEXT b, a

