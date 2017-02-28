# FB-AutoPoker
A very, very simple autopoker for facebook.

Paste the contents of AutoPoker.js into console on your poke page, then sit back, and enjoy.
Alternatively, drag the following bookmarklet into your bookmarks bar, and press it when you're on the FB poke page.
[Autopoker](javascript:(function f(){k=document.getElementsByTagName("a");for(var i=0;i<k.length;i++){if(k[i].innerHTML.contains("Poke B")){k[i].click();}}setTimeout(f,500);})();)

Facebook warns you about pasting things into console, but honestly, just look at autoPoke(). There is literally nothing there that could do anything malicious. Feel free to double check yourself, of course.

This is a very simplistic approach in auto-poking, as it requires one to keep the facebook poke page open for as long as one wants to operate the autopoker. I'm sure there are many better ways to go about implementing it, but this works so I'm not complaining.
