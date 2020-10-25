class Solution {
    public String reverseOnlyLetters(String S) {
        int i=0;
        int j=S.length()-1;
        char[] charr = S.toCharArray();
        while(i<j){
            while(i<S.length() && !Character.isLetter(charr[i]))i++;
            while(j>=0 && !Character.isLetter(charr[j]))j--;
            if(i<j && i<S.length() && j>=0){
                char temp = charr[i];
                charr[i] = charr[j];
                charr[j] = temp;
                i++;
                j--;
            }
        }
        return String.valueOf(charr);
    }
}
