function haversineDistance(coords1, coords2) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  var lat1 = coords1.lat;
  var lon1 = coords1.long;

  var lat2 = coords2.lat;
  var lon2 = coords2.long;

  var R = 6371; // in km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2)
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  return (d / 1.60934).toFixed(2);
}

module.exports = haversineDistance;

// var coords1 = [37.788840, -122.398129];
// var coords2 = [37.802378, -122.405823 ];

// haversineDistance(coords1, coords2);

