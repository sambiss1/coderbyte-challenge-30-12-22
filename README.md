# coderbyte-challenge-30-12-22


1. Word Split : 


2. Arithm Geo


3. String Reduction : 

<p>
Have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. 
<br>The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. 
<br>For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything.
<br>This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted.  
</p>

<p>
  For example: if str is "cab", then "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). 
  <br>The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
</p>

4. Wild Card Characters : 
<p>
  Have the function WildcardCharacters(str) read str which will contain two strings separated by a space. 
  <br>The first string will consist of the following sets of characters: +, *, and {N} which is optional. 
  <br>The plus (+) character represents a single alphabetic character, the asterisk (*) represents a sequence of the same character of length 3 unless it is followed by {N} which represents how many characters should appear in the sequence where N will be at least 1. 
  <br>Your goal is to determine if the second string exactly matches the pattern of the first string in the input.

 </p>
<p>
For example: if str is "++*{5} gheeeee" then the second string in this case does match the pattern, so your program should return the string true.
  <br>If the second string does not match the pattern your program should return the string false. 
</p>
