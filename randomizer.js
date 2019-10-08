var randomizer = function(){
   
		    var links=[
		    'links/uroclub.html',
		    'links/hawaiichair.html', 
		    'links/slapchop.html', 
		    'links/shamwow.html',
		    'links/pottyputter.html',
		    'links/thighmaster.html',
		    'links/bedazzler.html',
		    'links/aspray.html',
		    'links/soloflex.html',
		    'links/glh.html',
		    'links/catchit.html',
		    'links/theflo.html',
		    'links/stop.html',
		    'links/blublockers.html',
		    'links/punkcd.html',
		    'links/britannica.html',
		    'links/understand1.html',
		    'links/nwwf.html',
		    'links/understand2.html',
		    'links/microphone.html',
		    'links/tiddybear.html',
		    'links/listenup.html',
		    'links/pootrap.html',
		    'links/katana.html',
		    'links/roseknife.html'
		    ];
		 
		    var max = (links.length)

 var randomNumber = Math.floor(Math.random()*max);
 window.open(links[randomNumber], '_self');


};