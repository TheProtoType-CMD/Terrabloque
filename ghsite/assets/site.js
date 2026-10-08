(function(){
  // Pixel landscape (decorative, generated in the browser: no image files to load)
  var c=document.getElementById('ground');
  if(c){
    var W=192,H=48,x=c.getContext('2d');c.width=W;c.height=H;
    var s=7;function r(){s=(s*16807)%2147483647;return s/2147483647}
    var top=[],h=26,i,y;
    for(i=0;i<W;i++){h+=(r()-.5)*2.2;h=Math.max(16,Math.min(32,h));top.push(Math.round(h))}
    for(i=0;i<W;i++){for(y=top[i];y<H;y++){
      var d=y-top[i],col;
      if(d===0)col=(i%3?'#5fa83f':'#7ed957');
      else if(d<4)col=((i+y)%5?'#7a5230':'#6b4526');
      else col=((i*7+y*3)%9<2?'#6e6e6e':'#8b8b8b');
      x.fillStyle=col;x.fillRect(i,y,1,1);
    }}
    [28,74,131,170].forEach(function(tx){
      var b=top[tx],k;
      x.fillStyle='#5b3d1e';for(k=1;k<=6;k++)x.fillRect(tx,b-k,1,1);
      x.fillStyle='#2f8f3a';x.fillRect(tx-2,b-9,5,3);x.fillRect(tx-1,b-11,3,2);
      x.fillStyle='#46b04f';x.fillRect(tx-2,b-8,2,1);
    });
  }
  // Splash texts (taken from the game's main menu)
  var sp=document.getElementById('splash');
  if(sp){
    var L=['Block party!','Dig deep!','Now with caves!','Torches included!','Pixel perfect!','Hello, world!','Made of cubes!','Bring a bucket!','Try /map!','65536 x 65536!','Flat world mode!','Now with mountains!','Also try Dice!'];
    sp.textContent=L[Math.floor(Math.random()*L.length)];
  }
  // Download button: only live when a real launcher file is configured
  var b=document.getElementById('dlBtn');
  if(b&&window.TERRA){
    var T=window.TERRA,st=document.getElementById('dlStatus');
    if(T.launcherUrl){
      b.href=T.launcherUrl;b.removeAttribute('aria-disabled');b.removeAttribute('tabindex');
      if(T.launcherFileName)b.setAttribute('download',T.launcherFileName);
      b.querySelector('small').textContent=[T.launcherFileName,T.launcherSize].filter(Boolean).join(' - ')||'Terrabloque '+T.version;
      if(st)st.textContent='';
      var p=document.getElementById('dlPlat');if(p&&T.launcherPlatforms)p.textContent=T.launcherPlatforms;
    }else{
      b.addEventListener('click',function(e){e.preventDefault()});
    }
  }
})();
