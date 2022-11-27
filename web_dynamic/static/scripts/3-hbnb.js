$(document).ready(function(){
    let selected = []
    $('input[type=checkbox]').change(function () {
      if ($(this).prop('checked')) {
        selected.push($(this).attr('data-name'))
      } else {
        let unchecked = $(this).attr('data-name')
        let idx = selected.indexOf(unchecked)
        selected.splice(idx, 1)
      }
    
    if (selected.length !== 0) {
      let seleced_in_txt = selected.join(", ")
      $("#selected").text(seleced_in_txt)
    }
  })
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
   if (textStatus === 'success') {
     if (data.status === 'OK') {
       $('#api_status').addClass('available');
     } else {
       $('#api_status').removeClass('available');
     }
   }
 });
 $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let place = data[i];
        $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
      }
    }
  });
 