
let map;
const numbIndex="123456789";
let numerationNumb=0;
let markers=[];
 function initMap(){
   const Lviv = {lat:49.842957,lng:24.031111};
   
   map = new google.maps.Map(document.getElementById("map"),{
    zoom:12,
    center:Lviv,
    mapTypeId: "terrain",
   });
   
    map.addListener("click",(event)=>{
       addMarker(event.latLng); 
    });
     
    document
    .getElementById("hideMarkerBTN")
    .addEventListener("click",hideAllMarkers);

    document
    .getElementById("showMarkerBTN")
    .addEventListener("click",showAllMarkers);
    
    document
    .getElementById("deleteMarkerBTN")
    .addEventListener("click",deleteAllMarkers);


    addMarker(Lviv,map)
}




 function addMarker(position)
  {
     const marker=new google.maps.Marker({
        position,
        label:numbIndex[numerationNumb++ % numbIndex.length],
        map,
     });
     markers.push(marker);
    
}

function allMarkers(map){
    for(let i=0;i<markers.length;i++){
        markers[i].setMap(map);
    }
}

function hideAllMarkers(){
    allMarkers(null);
}



function showAllMarkers(){
    allMarkers(map);
}



function deleteAllMarkers(){
    hideAllMarkers();
    markers=[];
    numerationNumb=0;
}


   


window.initMap=initMap;