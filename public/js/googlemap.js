// Function to initialize the map
function initMap() {
    // Create a map centered at a default location
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  
    // Create a marker for the user's location
    const marker = new google.maps.Marker({ map, title: "Your Location" });
  
    // Function to get the user's location
    function getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
  
            // Set map center and marker position to user's location
            map.setCenter(userLocation);
            marker.setPosition(userLocation);
          },
          (error) => {
            console.error("Error getting user location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  
    // Attach the function to the button click event
    document.getElementById("getLocationBtn").addEventListener("click", getUserLocation);
  }