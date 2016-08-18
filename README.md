Rule 1:
Numerals next to same numeral are added, numeral following

Rule 2:
A numeral preceding a larger numeral is subtracted from the antecedent larger numeral.

A numeral proceeded by something larger or equal to itself and followed by something less or equal to itself is a unit.

A numeral proceeded by something larger or equal to itself and followed by nothing is a unit.

all 4's are IV

all 9's are IX

all 40's are XL

all 90's are XC

all 400's are CD

all 900's are CM

-SPECS-
1) if entry is greater than 3,999 or less than 1, do nothing.
2) create variable for last digit in entry (1's place).
3) create variable for second to last digit in entry (10's place).
4) create variable for third to last digit in entry (100's place).
5) create variable for fourth to last digit in entry (1000's place).
6) create array of 'I's where number of elements = value of lastDig. Save result as variable numeral1.
7) if number of 'I's >8, replace last 8 elements with 'X'.
8) if number of 'I's >= 5, replace first 5 elements with 'V'.
9) if number of 'I's > 3, replace last 3 elements with 'V'.
10) create array of 'X's where number of elements = value of secondLastDig. Save result as variable numeral10.
11) if number of 'X's >8, replace last 8 elements with 'C'.
12) if number of 'X's >= 5, replace first 5 elements with 'L'.
13) if number of 'X's > 3, replace last 3 elements with 'L'.
14) create array of 'C's where number of elements = value of thirdLastDig. Save result as variable numeral100.
15) if number of 'X's >8, replace last 8 elements with 'M'.
16) if number of 'X's >= 5, replace first 5 elements with 'D'.
17) if number of 'X's > 3, replace last 3 elements with 'D'.
18) create array of 'M's where number of elements = value of fourthLastDig. Save result as variable numeral1000.
19) concat numeral1000 + numeral100 + numeral10 + numeral1.
