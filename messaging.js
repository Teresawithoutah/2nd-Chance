var ref = new Firebase('https://glowing-inferno-9286.firebaseio.com'); 
	function login(){
    //ref.once('value', function(snapshot) {
      
      var user3 = $('#inputuser').val();
      var password1=$('#inputpassword').val();
      checkPass(user3,password1);
     
      
  
  }
var userid;
function signup(){

  userid = $('#inputusersu').val();
  var passwordsu=$('#inputpasswordsu').val();
  

  check(userid,passwordsu);
  //console.log(answer);
  
    //if no add it
     

     //if it does alert(pick diff name) 
}




function check(userid,passwordsu){
    var flag=0;
    ref.once("value", function(allusersSnapshot) {
      allusersSnapshot.forEach(function(userSnapshot) {
    // Will be called with a messageSnapshot for each child under the /messages/ node
      //var key = userSnapshot.key();  // e.g. "-JqpIO567aKezufthrn8"
      var username = userSnapshot.child("user").val();  // e.g. "barney"
      //var password = userSnapshot.child("pass").val();
      
      //console.log("checking  "+username);
      
      if (username===userid){
        flag=1;
        alert("That username is taken!");
        
        //console.log("true!");
      }

    });
    if (flag==0){
      var userRef= ref.child(userid);
      userRef.set({ 
      user:userid,
      pass: passwordsu,
      messagesReceived:0

      
      });

      var messagesReceivedRef= userRef.child('messagesReceived');
      messagesReceivedRef.set({
        mess1: "Hi David! How are you? You're last postcard was super helpful and I followed your advice. Hope to hear from you soon!",
        mess2: 0,
        mess3: 0,
        mess4:0,
        mess5:0

      });

      
      messagesReceivedRef.push({
        mess:'it works!'
      });
      alert("You're signed up, please login!");
    } 
      
      
      //console.log("didnt find!");
  });
  }




      /*//var userid = $('#inputusersu').val();
      //child(userid)
      ref.once("value", function(snapshot){
        var exist=(snapshot.val()!==null);
    
        if (exist){
          console.log('t');
        }
        else{
          console.log('f');
        }*/



function checkPass(user3,password1){
    var flag1=0;
    ref.once("value", function(allusersSnapshot) {
      allusersSnapshot.forEach(function(userSnapshot) {
    // Will be called with a messageSnapshot for each child under the /messages/ node
      //var key = userSnapshot.key();  // e.g. "-JqpIO567aKezufthrn8"
      var username1 = userSnapshot.child("user").val();  // e.g. "barney"
      var password5 = userSnapshot.child("pass").val();
      
      //console.log("checking "+username1+password1);
      
      if (username1===user3){
        flag1=1;
        //alert("You're logedin!");
        //return true;
        //console.log("true!");
        if(password5===password1){
          var realuser= username1;
       ref.once("value", function(snapshot) {
  		theuser=userUpdate();

	  

	  	
    
	  });
          
          window.location.href=("index.html");
        }
        else{
          alert("Try diffrent pass!");
        }
      }
          
    });
    if (flag1==0){
      alert("no username");
    }
      
      //console.log("didnt find!");
  });
  }

$(document).ready(function() {
    $( "#submit" ).click(function() {
      var user3 = $('#inputuser').val().toString();
        ref.child(user3).once('value', function(snapshot) {
          
          
          login();

        });
    });
  });
$(document).ready(function() {
    $( "#submit2" ).click(function() {
      var user2 = $('#inputusersu').val().toString();
        ref.child(user2).once('value', function(snapshot) {
          signup();
          //check();
        });
    });
  });

  
 //JAVASCRIPT OF THE ACCORDION MAP ETC
    $(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Get current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});
function home(){
  window.location.href=("index.html");
}
function login1(){
  window.location.href=("index.html");
}

var realuser;
function userUpdate(){
  realuser=$('#inputuser').val();
  
  return(realuser);
}



function getMessage(){
	userid= 'second';
	

var fredRef = new Firebase("https://glowing-inferno-9286.firebaseio.com/second");
fredRef.once("value", function(snapshot) {
  var name = snapshot.child("messagesReceived").child("mess1").val();

document.getElementById("message").innerHTML = name;
});

    
    



  // name === { first: "Fred", last: "Flintstone"}
  


}



function sendMessage(){

  var messss = $('#typeIt').val().toString();
      var user5 = $('#sender').val().toString();
alert(messss);
alert(user5);
  check2(messss,user5);
  //console.log(answer);
  
    //if no add it
     

     //if it does alert(pick diff name) 
}




function check2(messss,user5){
    var flag=0;
    ref.once("value", function(allusersSnapshot) {
      allusersSnapshot.forEach(function(userSnapshot) {
    // Will be called with a messageSnapshot for each child under the /messages/ node
      //var key = userSnapshot.key();  // e.g. "-JqpIO567aKezufthrn8"
      var username = userSnapshot.child("user").val();  // e.g. "barney"
      //var password = userSnapshot.child("pass").val();
      
      //console.log("checking  "+username);
      
      
      var userRef= ref.child(user5);
     
alert(messss);
      var messagesReceivedRef= userRef.child('messagesReceived');
      messagesReceivedRef.update({
        mess1: messss
        

      });

      
     
      
      //console.log("didnt find!");
  });
  });
}

$(document).ready(function() {
    $( "#sendMessage" ).click(function() {
      var messss = $('#typeIt').val().toString();
      var user5 = $('#sender').val().toString();
        ref.child(user5).once('value', function(snapshot) {
          
          
          sendMessage();

        });
    });
  });


