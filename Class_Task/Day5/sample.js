const para = "Hello Mridula";
const textmatch = para.match(/\bM\w+a\b/g);   // matches word starting with j and ending with n

if (textmatch) {
    console.log(textmatch);           // matched words as array
    console.log(textmatch.length);    // number of matched words
} else {
    console.log("No match found");
}

const mobileno= 6381915738;
const nummatch = /^[0-9]\d{9}/g;
if(nummatch.test(mobileno.toString())){
    console.log("matched");
}
else{
    console.log("mismatched pattern");
}