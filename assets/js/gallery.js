   async function loadImages() {
      try {
        const response = await fetch('assets/img');
        const images = await response.json();

        const gallery = document.getElementById('gallery');
        images.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = `assets/img/${image}`;
          gallery.appendChild(imgElement);
        });
      } catch (error) {
        console.error('Erro ao carregar as imagens:', error);
      }
    }

    
    // Carrega as imagens ao carregar a página
    window.onload = loadImages;


        // Seleciona todos os elementos de imagem na galeria
        const galleryImages = document.querySelectorAll('.gallery img');
        const overlay = document.getElementById('overlay');
        const overlayImg = document.getElementById('overlay-img');
        const imageName = document.getElementById('image-name');

        let currentIndex = 0;

        // Abre a imagem em overlay
        function openOverlay(index) {
            const img = galleryImages[index];
            overlayImg.src = img.src;
            imageName.textContent = img.getAttribute('data-name');  // Define o nome da imagem
            overlay.classList.add('active');
            currentIndex = index;
        }

        // Fecha a sobreposição
        function closeOverlay() {
            overlay.classList.remove('active');
        }

        // Exibe a próxima imagem
        function nextImage() {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            openOverlay(currentIndex);
        }

        // Exibe a imagem anterior
        function prevImage() {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            openOverlay(currentIndex);
        }

        // Adiciona um evento de clique para cada imagem da galeria
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => openOverlay(index));
        });

        // Fecha a sobreposição ao clicar fora da imagem
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeOverlay();
            }
        });