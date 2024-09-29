int strStr(char * haystack, char * needle){
  char * c = strstr(haystack, needle);
  if(c){
    return c - haystack;
  }else return -1;
}