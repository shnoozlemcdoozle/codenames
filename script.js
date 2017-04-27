window.onload = function(){
  var wordBank = ['Airplane', 'Ankle', 'Apples', 'Arm', 'Baby', 'Bag', 'Bagel', 'Backpack', 'Balloons', 'Balls', 'Bananas', 'Bandaid', 'Barn', 'Bat', 'Bathtub', 'Battery', 'Bead', 'Bean', 'Bear', 'Bed', 'Bumblebee', 'Bell', 'Belt', 'Bike', 'Bird', 'Blanket', 'Blocks', 'Boat', 'Books', 'Boots', 'Bottle', 'Bow', ' Bowl', ' Box', ' Bracelet', ' Bread', ' Bridge', ' Broom', ' Brush', ' Bubbles', ' Bucket', ' Bug', ' Bus/School', ' bus', ' Butter', ' Butterfly', ' Button', ' Cake', ' Camera', ' Candle', ' Candy', ' Car', ' Carrots', ' Cat', ' CD', ' Cereal', ' Chair', ' Chalk', ' Cheese', ' Cherry', ' Chicken', ' Chips', ' Circle', ' Clock', ' Cloud', ' Clown', ' Coloring', ' Book', ' Comb', ' Computer', 'Cookies', ' Corn', ' Cow', ' Crackers', ' Crayons', ' Crown', ' Cup', ' Cupcake', ' Curtain', ' Diaper', ' Dinosaur', ' Dog', ' Dolls', ' Door', ' Dolphin', ' Doughnut', ' Dress', ' Dresser', ' Drum', ' Duck', ' Ear', ' Earring', ' Eggs', ' Elbow', ' Elephant', ' Envelope', ' Eyes', ' Feather', ' Feet', ' Fence', ' Fingernail', ' Fingers', ' Fire', ' Fire', ' truck', ' Fish', ' Flashlight', ' Flower', ' Fly', ' Fork', ' Fries', ' Frog', ' Garbage', ' Can', ' Ghost', ' Giraffe', 'Glasses', ' Glove', ' Glue', ' Goal', ' Grapes', ' Grass', ' Hair', ' Hamburger', ' Hammer', ' Hands', ' Hanger', ' Hat', ' Head', ' Heart', ' Helicopter', ' Hips', ' Hoop', ' Horse', ' Hose', ' Hot', ' Dog', ' House', ' Ice', ' Cream', ' Iron', ' Jacket-Coat', ' Juice', ' Jump', ' rope', ' Kangaroo', ' Keys', ' Knee', ' Knife', ' Ladder', ' Lamp', ' Leaf', ' Leg', ' Lion', ' Lizard', ' Lunch', ' Magazine', ' Mailbox', ' Marker', ' Meat-', ' Steak-Beef', ' Microphone', ' Milk', ' Mirror', ' Money', ' Monkey', ' Moon', ' Motorcycle', ' Mountain', ' Mouse', ' Mouth', ' Movie', ' Napkin', ' Necklace', ' Nest', ' Net', ' Newspaper', ' Nose', ' Octopus', ' Oranges', ' Owl', ' Paints', ' Pajamas', ' Pan', ' Pot', ' Pants', ' Paper', ' Paper', ' Towels', ' Pear', ' Peas', ' Pen', ' Pencil', ' Phone', ' Pie', ' Pig', ' Pillow', ' Pirate', ' Pizza', ' Plate-Dish', ' Play', ' Dough', ' Pool', ' Popcorn', ' Popsicle', ' Pot-Pan', ' Potatoes', ' Pretzel', ' Princess', ' Pudding', ' Pumpkin', ' Puppets', ' Purse', ' Puzzles', ' Rabbit', ' Radio-Music', ' Rain', ' Rainbow', ' Raisins', ' Refrigerator', ' Rice', ' Ring', ' Rock', ' Rope', ' Sand', ' Sandwich', ' Scissors', ' Scooter', ' Shampoo', ' Sheep', ' Shirt', ' Shoes', ' Shorts', ' Shoulders', ' Shovel', ' Sink', ' Skateboard', ' Slide', ' Slinky', ' Snake', ' Snow', ' Soap', ' Socks', ' Soda', ' Sofa-Couch', ' Soup', ' Spaghetti', ' Spider', ' Spiderweb', ' Spoon', ' Square', ' Squirrel', ' Stairs', ' Stars', ' Stick', ' Sticker', ' Stove', ' Strawberries', ' Stamps', ' Stool', ' Straw', ' String', ' Suitcase', ' Sun', ' Sunglasses', ' Sweater', ' Swimsuit', ' Swing', ' Table', ' Taco', ' Tape', ' Teapot', ' Teddy', ' Bear', ' Teeth', ' Tie', ' Tiger', ' Toes', ' Toilet', ' Paper', ' Toilet/Potty', ' Tomatoes', ' Tongue', ' Toothbrush', ' Toy', ' Towels', ' Tractor', ' Train', ' Tree', ' Triangle', ' Tricycle', ' Truck', ' Tummy', ' Turtle', ' TV', ' Umbrella', ' Underwear', ' Vacuum', ' Video', ' Tape', ' Waffle', ' Wagon', ' Washcloth', ' Watch', ' Water', ' Wheel', ' Whistle', ' Window', ' Wing', ' Yogurt', ' Yo-yo', ' Zebra', ' Zipper']

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



document.getElementById('start').onclick = function() {
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

$('.row').click(function(event) {
    if (event.ctrlKey == false) {
      $(this).css({
        'background-color': 'red'
      });
    }
  else {
    $(this).css({
      'background-color': 'grey'
    });
  }});

$('.row').dblclick(function() {
  $(this).css({
    'background-color': '#296ddb'
  });
})

document.getElementById('help').onclick = function() {
alert('Click a card once to make it red, twice to make it blue -- or hold control and click on a card to make it grey');
}
function clearSelection() {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}
clearSelection();

}
