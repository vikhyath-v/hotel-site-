function onHover(element) {
    element.style.backgroundColor = "#eee";
  }


  function onBlur(element) {
    element.style.backgroundColor = "#cffff9";
  }

  
  document.getElementById("name").addEventListener("mouseover", function() {
    onHover(this);
  });
  document.getElementById("name").addEventListener("mouseout", function() {
    onBlur(this);
  });

  document.getElementById("party-size").addEventListener("mouseover", function() {
    onHover(this);
  });
  document.getElementById("party-size").addEventListener("mouseout", function() {
    onBlur(this);
  });

  document.getElementById("date").addEventListener("mouseover", function() {
    onHover(this);
  });
  document.getElementById("date").addEventListener("mouseout", function() {
    onBlur(this);
  });

  document.getElementById("phone").addEventListener("mouseover", function() {
    onHover(this);
  });
  document.getElementById("phone").addEventListener("mouseout", function() {
    onBlur(this);
  });

  document.getElementById("email").addEventListener("mouseover", function() {
    onHover(this);
  });
  document.getElementById("email").addEventListener("mouseout", function() {
    onBlur(this);
  });

  // Add blur event listener for form submission
  document.getElementById("reservation-form").addEventListener("submit", function(event) {
 

  });