    // paginação
  
    const itemsPerPage = 8; // Número de links por página
    let currentPage = 1; // Página inicial
    
    function paginateLinks() {
      const links = Array.from(document.querySelectorAll("#uteisList a"));
      const totalPages = Math.ceil(links.length / itemsPerPage);
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
    
      links.forEach((link, index) => {
        link.style.display = index >= start && index < end ? "block" : "none";
      });
    
      document.getElementById("pageInfo").textContent = `Página ${currentPage} de ${totalPages}`;
      document.getElementById("prev").disabled = currentPage === 1;
      document.getElementById("next").disabled = currentPage === totalPages;
    }
    
    function prevPage() {
      if (currentPage > 1) {
        currentPage--;
        paginateLinks();
      }
    }
    
    function nextPage() {
      const links = document.querySelectorAll("#uteisList a");
      const totalPages = Math.ceil(links.length / itemsPerPage);
    
      if (currentPage < totalPages) {
        currentPage++;
        paginateLinks();
      }
    }
    
    // Inicializa a paginação
    paginateLinks();