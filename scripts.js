document.addEventListener('DOMContentLoaded', function() {
  const areas = [
    {
      name: "DLF Maps",
      description: "The bustling heart of the city with skyscrapers, vibrant nightlife, and cultural attractions.",
      maps: [
        { name: "DLF Phase 2", image: "./src/Dlf/DLF PH-2.webp" },
        { name: "DLF Phase 3", image: "./src/Dlf/DLF-PH-3.webp" },
        { name: "DLF Phase 4", image: "./src/Dlf/DLF PHASE- 4.webp" },
        { name: "DLF Phase 5", image: "./src/Dlf/DLF PHASE-5.webp" },
        { name: "DLF ALMEDA", image: "./src/Dlf/DLF ALMEDA.webp" },
        { name: "DLF GARDEN CITY", image: "./src/Dlf/DLF GARDEN CITY.webp" },
        { name: "DLF OLD COLONY", image: "./src/Dlf/DLF OLD COLONY.webp" },
      ]
    },
    {
      name: "South City Maps",
      description: "A scenic area along the river with parks, walking trails, and recreational facilities.",
      maps: [
        { name: "South City - I", image: "./src/South_City/SOUTH CITY_1.webp" },
        { name: "South City - II", image: "./src/South_City/SOUTH CITY _2.webp" },
      ]
    },
    // {
    //   name: "Community Center Maps",
    //   description: "A scenic area along the river with parks, walking trails, and recreational facilities.",
    //   maps: [
    //     { name: "COMM. JAIL ROAD", image: "/placeholder.svg?height=400&width=600" },
    //     { name: "COMM. OLD JUDICIAL COMPLEX", image: "/placeholder.svg?height=400&width=600" },
    //     { name: "COMM. SEC-4", image: "/placeholder.svg?height=400&width=600" },
    //   ]
    // },
    {
      name: "Other Township Maps",
      description: "A scenic area along the river with parks, walking trails, and recreational facilities.",
      maps: [
        { name: "PATAUDI", image: "./src/Other_Township/MP-PATAUDI_2031.webp" },
        { name: "REWARI", image: "./src/Other_Township/MP- REWARI.webp" },
        { name: "DHARUHERA", image: "./src/Other_Township/MP-DHARUHERA.webp" },
        { name: "MANESAR", image: "./src/Other_Township/MPMANESAR.webp" },
        { name: "SOHNA", image: "./src/Other_Township/MP-SOHNA_2031.webp" },
      ]
    },
  ];

  const areasListElement = document.querySelector('.areas-list');

  areas.forEach(area => {
    const areaCard = document.createElement('div');
    areaCard.classList.add('area-card');

    areaCard.innerHTML = `
      <div class="card-header">
        <div class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3l9 9-9 9-9-9z"/></svg>
          ${area.name}
        </div>
     
      </div>
      <div class="card-content">
        <div class="map-thumbnail-container">
          <img src="${area.maps[0].image}" alt="${area.name} Map" class="map-thumbnail" id="main-image-${area.name}">
        </div>
        <div class="map-button-container">
          ${area.maps.map(map => `
            <button class="map-button" data-image="${map.image}" data-area="${area.name}">${map.name}</button>
          `).join('')}
        </div>
      </div>
    `;

    areasListElement.appendChild(areaCard);
  });

  // Update image and open popup when a map button is clicked
  document.querySelectorAll('.map-button').forEach(button => {
    button.addEventListener('click', function() {
      const areaName = this.getAttribute('data-area');
      const imageSrc = this.getAttribute('data-image');
      const mainImage = document.getElementById(`main-image-${areaName}`);
      mainImage.src = imageSrc;

      // Show the popup and update image
      const popup = document.getElementById('image-popup');
      const popupImage = document.getElementById('popup-image');
      const downloadBtn = document.getElementById('download-btn');

      popup.style.display = 'flex';
      popupImage.src = imageSrc;

      // Setup download button
      downloadBtn.onclick = function() {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = `map-${Date.now()}.png`;  // Customize filename
        link.click();
      };
    });
  });

  // Open image popup when the main image is clicked
  document.querySelectorAll('.map-thumbnail').forEach(image => {
    image.addEventListener('click', function() {
      const imageSrc = this.src;
      const popup = document.getElementById('image-popup');
      const popupImage = document.getElementById('popup-image');
      const downloadBtn = document.getElementById('download-btn');

      popup.style.display = 'flex';
      popupImage.src = imageSrc;

      // Setup download button
      downloadBtn.onclick = function() {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = `map-${Date.now()}.png`;  // Customize filename
        link.click();
      };
    });
  });

  // Close the image popup
  document.getElementById('popup-close').addEventListener('click', function() {
    document.getElementById('image-popup').style.display = 'none';
  });
});
