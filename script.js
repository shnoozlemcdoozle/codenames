window.onload = function () {
  var wordBank = ['africa', 'Michael', 'Eitan', 'Kareen', 'Gabby', 'Game of Thrones', 'agent', 'air', 'alien', 'amazon', 'angel', 'antarctica', 'arm', 'back', 'band', 'bank', 'bark', 'beach', 'belt', 'berlin', 'berry', 'board', 'bond', 'boom', 'bow', 'box', 'bug', 'canada', 'capital', 'cell', 'center', 'china', 'chocolate', 'circle', 'club', 'compound', 'copper', 'crash', 'cricket', 'cross', 'death', 'dice', 'dinosaur', 'doctor', 'dwarf', 'eagle', 'egypt', 'engine', 'england', 'europe', 'eye', 'fair', 'fall', 'file', 'film', 'fish', 'flute', 'fly', 'forest', 'fork', 'france', 'gas', 'ghost', 'giant', 'glass', 'gold', 'greece', 'green', 'ham', 'head', 'himalaya', 'hole', 'hood', 'human', 'horseshoe', 'hospital', 'hotel', 'ice', 'india', 'iron', 'ivory', 'jet', 'jupiter', 'kangaroo', 'ketchup', 'kid', 'king', 'kiwi', 'knife', 'knight', 'lab', 'lap', 'laser', 'lawyer', 'lead', 'lemon', 'limousine', 'lock', 'log', 'mammoth', 'maple', 'march', 'mass', 'mercury', 'millionaire', 'model', 'mole', 'moscow', 'mouth', 'mug', 'needle', 'net', 'new', 'york', 'night', 'note', 'novel', 'nurse', 'nut', 'oil', 'olive', 'olympus', 'opera', 'orange', 'paper', 'park', 'part', 'paste', 'phoenix', 'piano', 'telescope', 'teacher', 'switch', 'swing', 'sub', 'stick', 'staff', 'stadium', 'sprint', 'spike', 'snowman', 'slip', 'shot', 'shadow', 'server', 'ruler', 'row', 'rose', 'root', 'rome', 'robot', 'robin', 'revolution', 'rat', 'racket', 'queen', 'press', 'port', 'pilot', 'time', 'tooth', 'tower', 'truck', 'triangle', 'trip', 'turkey', 'unicorn', 'vacuum', 'wake', 'wall', 'war', 'washer', 'washington', 'wave', 'well', 'whale', 'whip', 'worm', 'yard','all','bat','bed','book','bun','can','cake','cap','car','cat','cow','cub','cup','dad','day','dog','doll','fan','feet','girl','gun','hall','hat','hen','jar','man','map','men','mom','pan','pet','pie','pig','pot','son','sun','toe','tub','van','banana','bike','bird','chin','clam','class','clover','corn','crayon','crow','crown','crowd','crib','desk','dime','dirt','dress','fang','','field','flag','flower','fog','heat','hill','home','horn','hose','joke','juice','kite','lake','maid','mask','mice','milk','mint','meal','meat','moon','mother','morning','name','nest','nose','pear','pen','pencil','plant','rain','river','road','rock','room','seed','shape','shoe','shop','show','sink','snail','snake','snow','soda','sofa','star','step','stew','stove','straw','string','swing','table','tank','team','tent','test','toes','tree','vest','wing','woman','women','alarm','animal','aunt','bait','balloon','bath','bead','beam','bean','bedroom','boot','bread','brick','brother','camp','chicken','children','crook','deer','dock','downtown','drum','dust','family','father','fight','flesh','food','frog','grade','grandfather','grandmother','grape','grass','hook','horse','jail','jam','kiss','light','loaf','lunch','lunchroom','notebook','owl','parent','plot','rabbit','rake','sack','sail','sea','sister','soap','song','spark','space','spoon','spot','spy','summer','tiger','toad','town','trail','tramp','tray','trick','uncle','vase','winter','water','week','wheel','wish','wool','zebra','actor','airplane','airport','army','baseball','beef','birthday','boy','brush','bushes','butter','','cast','cave','cent','cherries','cherry','cobweb','coil','cracker','dinner','eggnog','elbow','face','fireman','flavor','gate','glove','glue','goldfish','goose','grain','hair','haircut','hobbies','holiday','hot','jellyfish','ladybug','mailbox','number','oatmeal','pail','pancake','pest','popcorn','quicksand','quiet','quilt','rainstorm','scarecrow','scarf','stream','street','sugar','toothpaste','twig','volleyball','wood','wrench','advice','anger','answer','apple','arithmetic','badge','basket','basketball','battle','beast','beetle','beggar','brain','branch','bubble','bucket','cactus','cannon','cattle','celery','cellar','cloth','coach','coast','crate','cream','daughter','donkey','drug','earthquake','feast','fifth','finger','flock','frame','furniture','geese','giraffe','governor','honey','hope','hydrant','icicle','income','island','jeans','judge','lace','lamp','lettuce','marble','month','north','ocean','patch','plane','playground','poison','riddle','rifle','scale','seashore','sheet','sidewalk','skate','slave','sleet','smoke','stage','station','thrill','throat','throne','title','toothbrush','underwear','vacation','vegetable','visitor','voyage','year','able','achieve','acoustics','action','activity','aftermath','afternoon','afterthought','apparel','appliance','beginner','believe','bomb','border','boundary','breakfast','cabbage','cable','calculator','calendar','caption','carpenter','cemetery','channel','creator','creature','education','faucet','feather','friction','fruit','fuel','galley','guide','guitar','health','heart','idea','kitten','laborer','language','linen','locket','lumber','magic','minister','mitten','money','mountain','music','partner','passenger','pickle','picture','plantation','plastic','pleasure','pocket','police','pollution','railway','recess','reward','route','scene','scent','squirrel','stranger','suit','sweater','temper','territory','texture','thread','treatment','veil','vein','volcano','wealth','weather','wilderness','wren','wrist','writer']

  function shuffleWords(wordBank) {
    for (var i = wordBank.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = wordBank[i];
      wordBank[i] = wordBank[j];
      wordBank[j] = temp;
    }
    return wordBank;
  }

  shuffleWords(wordBank);

  var box0word = wordBank.shift();
  var box1word = wordBank.shift();
  var box2word = wordBank.shift();
  var box3word = wordBank.shift();
  var box4word = wordBank.shift();
  var box5word = wordBank.shift();
  var box6word = wordBank.shift();
  var box7word = wordBank.shift();
  var box8word = wordBank.shift();
  var box9word = wordBank.shift();
  var box10word = wordBank.shift();
  var box11word = wordBank.shift();
  var box12word = wordBank.shift();
  var box13word = wordBank.shift();
  var box14word = wordBank.shift();
  var box15word = wordBank.shift();
  var box16word = wordBank.shift();
  var box17word = wordBank.shift();
  var box18word = wordBank.shift();
  var box19word = wordBank.shift();
  var box20word = wordBank.shift();
  var box21word = wordBank.shift();
  var box22word = wordBank.shift();
  var box23word = wordBank.shift();
  var box24word = wordBank.shift();
  var box25word = wordBank.shift();



  document.getElementById('start').onclick = function () {
    document.getElementById("box0").append(box0word);
    document.getElementById("box1").append(box1word);
    document.getElementById("box2").append(box2word);
    document.getElementById("box3").append(box3word);
    document.getElementById("box4").append(box4word);
    document.getElementById("box5").append(box5word);
    document.getElementById("box6").append(box6word);
    document.getElementById("box7").append(box7word);
    document.getElementById("box8").append(box8word);
    document.getElementById("box9").append(box9word);
    document.getElementById("box10").append(box10word);
    document.getElementById("box11").append(box11word);
    document.getElementById("box12").append(box12word);
    document.getElementById("box13").append(box13word);
    document.getElementById("box14").append(box14word);
    document.getElementById("box15").append(box15word);
    document.getElementById("box16").append(box16word);
    document.getElementById("box17").append(box17word);
    document.getElementById("box18").append(box18word);
    document.getElementById("box19").append(box19word);
    document.getElementById("box20").append(box20word);
    document.getElementById("box21").append(box21word);
    document.getElementById("box22").append(box22word);
    document.getElementById("box23").append(box23word);
    document.getElementById("box24").append(box24word);
    document.getElementById("box25").append(box25word);


  }

  var colorToggle = 0;
    if (colorToggle === 0) {
      $(this).css({
        'background-color': 'beige'
      })
    }


  $('.row').click(function (event) {
    colorToggle += 1;
    if (colorToggle > 3) {
      colorToggle = 0;
    }
    if (colorToggle === 0) {
      $(this).css({
        'background-color': 'beige'
      })
    }
    if (colorToggle === 1) {
      $(this).css({
        'background-color': 'red'
      });
    }
    else if (colorToggle === 2) {
      $(this).css({
        'background-color': '#296ddb'
      });
    }
    else if (colorToggle === 3) {
        $(this).css({
          'background-color': 'grey'
        });
      };
    }
  );

  document.getElementById('help').onclick = function () {
    alert('Click a card once to make it red, twice to make it blue -- or hold control and click on a card to make it grey');
  }
  function clearSelection() {
    if (document.selection && document.selection.empty) {
      document.selection.empty();
    } else if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
    }
  }
  clearSelection();

  $('#reset').click(function () {
    location.reload();
  })

}
