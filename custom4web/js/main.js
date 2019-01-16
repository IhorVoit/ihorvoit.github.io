var cart = {};
var goodsTable = document.createElement('table');

var request = new XMLHttpRequest();
request.open('GET', 'db.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
  } 
  var out = '';
    out += '<tr>';
    out += '<th id="id">Id</th>';
    out += '<th id="title">Title</th>';
    out += '<th id="price">Price</th>';
    out += '<th id="color">Color</th>';
    out += '<th id="department">Department</th>';
    out += '</tr>';
  for (var key in data) {
  	out += '<tr>';
  	out += '<td>' +data[key].id+ '</td>';
    out += '<td>' +data[key].title+ '</td>';
    out += '<td>' +data[key].price+ '</td>';
    out += '<td>' +data[key].color+ '</td>';
    out += '<td>' +data[key].department+ '</td>';
  	out += '</tr>';
  }

  goodsTable.innerHTML = out;
  document.body.appendChild(goodsTable);


id.onclick = function() {
   data.sort(function(a, b) {
    return a.id > b.id;
  });
};


title.onclick = function() {
   data.sort(function(a, b) {
    return a.title.localeCompare(b.title);
    goodsTable.innerHTML = out;
    document.body.appendChild(goodsTable);
});
console.log(data);
};

price.onclick = function() {
   data.sort(function(a, b) {
    return parseInt(a.price) > parseInt(b.price);
});
console.log(data);
};

color.onclick = function() {
   data.sort(function(a, b) {
    return a.color.localeCompare(b.color);
});
console.log(data);
};
department.onclick = function() {
   data.sort(function(a, b) {
    return a.department.localeCompare(b.department);
});
console.log(data);
};

};
request.send();
