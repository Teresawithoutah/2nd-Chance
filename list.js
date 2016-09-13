


var set2 = ['have hope'];
var set1 = []; 
   

 function myFunction() 
   {

    var x;
    var person = prompt("Please enter your name", "Harry Potter");
    
      if (person != null) {
         x = person; 
         set1.push(x);
        document.getElementById('food').appendChild(makeUL(set1));
    }
      }
  

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul')
    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}
document.getElementById('food').appendChild(makeUL(set2));
