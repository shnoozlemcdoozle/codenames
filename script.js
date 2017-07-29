window.onload = function () {
  var wordBank = ['africa', 'Michael', 'Eitan', 'Kareen', 'Gabby', 'Game of Thrones', 'agent', 'air', 'alien', 'amazon', 'angel', 'antarctica', 'apple', 'arm', 'back', 'band', 'bank', 'bark', 'beach', 'belt', 'berlin', 'berry', 'board', 'bond', 'boom', 'bow', 'box', 'bug', 'canada', 'capital', 'cell', 'center', 'china', 'chocolate', 'circle', 'club', 'compound', 'copper', 'crash', 'cricket', 'cross', 'death', 'dice', 'dinosaur', 'doctor', 'dog', 'dress', 'dwarf', 'eagle', 'egypt', 'engine', 'england', 'europe', 'eye', 'fair', 'fall', 'fan', 'field', 'file', 'film', 'fish', 'flute', 'fly', 'forest', 'fork', 'france', 'gas', 'ghost', 'giant', 'glass', 'glove', 'gold', 'grass', 'greece', 'green', 'ham', 'head', 'himalaya', 'hole', 'hood', 'hook', 'human', 'horseshoe', 'hospital', 'hotel', 'ice', 'ice', 'cream', 'india', 'iron', 'ivory', 'jam', 'jet', 'jupiter', 'kangaroo', 'ketchup', 'kid', 'king', 'kiwi', 'knife', 'knight', 'lab', 'lap', 'laser', 'lawyer', 'lead', 'lemon', 'limousine', 'leadlock', 'log', 'mammoth', 'maple', 'march', 'mass', 'mercury', 'millionaire', 'model', 'mole', 'moscow', 'mouth', 'mug', 'needle', 'net', 'new', 'york', 'night', 'note', 'novel', 'nurse', 'nut', 'oil', 'olive', 'olympus', 'opera', 'orange', 'paper', 'park', 'part', 'paste', 'phoenix', 'piano', 'telescope', 'teacher', 'switch', 'swing', 'sub', 'stick', 'staff', 'stadium', 'sprint', 'spike', 'snowman', 'slip', 'shot', 'shadow', 'server', 'ruler', 'row', 'rose', 'root', 'rome', 'rock', 'robot', 'robin', 'revolution', 'rat', 'racket', 'queen', 'press', 'port', 'pilot', 'time', 'tooth', 'tower', 'truck', 'triangle', 'trip', 'turkey', 'undertaker', 'unicorn', 'vacuum', 'van', 'wake', 'wall', 'war', 'washer', 'washington', 'water', 'wave', 'well', 'whale', 'whip', 'worm', 'yard']

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
        'background-color': '#e5e2ac'
      })
    }


  $('.row').click(function (event) {
    colorToggle += 1;
    if (colorToggle > 3) {
      colorToggle = 0;
    }
    if (colorToggle === 0) {
      $(this).css({
        'background-color': '#e5e2ac'
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
