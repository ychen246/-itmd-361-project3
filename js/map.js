function initMap(){
  var chicago = {lat:41.878114 , lng:-87.629798};
  var map = new google.maps.Map(document.getElementById('map'), {zoom:10.5, center:chicago});

  var elementaryschool = {lat:41.843505, lng:-87.635281};
  var marker1 = new google.maps.Marker({position:elementaryschool, map:map, title:"James Ward Elementary"});

  var highschool = {lat:41.981306, lng:-87.7079};
  var marker2 = new google.maps.Marker({position:highschool, map:map, title:"Northside College Prep"});

  var college = {lat:41.834873, lng:-87.627006};
  var marker3 = new google.maps.Marker({position:college, map:map, title:"Illinois Institute of Technology"});

  var infowindow1 = new google.maps.InfoWindow ({content: "James Ward Elementary is the school I attended when I moved to America at the age of 6"});
  marker1.addListener('click', function() {infowindow1.open(map, marker1); });
  
  var infowindow2 = new google.maps.InfoWindow ({content: "Northside College Prep is the high school I attended. It is the number one public high school in Chicago."});
  marker2.addListener('click', function() {infowindow2.open(map, marker2); });

  var infowindow3 = new google.maps.InfoWindow ({content: "Illinois Institute of Technology, IIT, is the university I am currently attending."});
  marker3.addListener('click', function() {infowindow3.open(map, marker3); });
}