
const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let currentDate = new Date();
let selectedDate = new Date();

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const dates = document.getElementById("dates");
    dates.innerHTML = "";

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    monthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        dates.appendChild(emptyCell);
    }

    const today = new Date();
    for (let day = 1; day <= lastDate; day++) {
        const dateCell = document.createElement("div");
        dateCell.textContent = day;
        const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

        if (cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
            dateCell.classList.add("past");
        } else if (day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
            dateCell.classList.add("today");
        }

        dateCell.addEventListener("click", () => selectDate(cellDate, dateCell));
        dates.appendChild(dateCell);

        if (selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear()) {
            dateCell.classList.add("selected");
        }
    }
}

function selectDate(date, cell) {
    selectedDate = date;
    document.querySelectorAll(".dates div").forEach(div => div.classList.remove("selected"));
    cell.classList.add("selected");
}

document.getElementById("prev").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("next").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();


  // Função para verificar e esconder eventos passados
  function atualizarEventos() {
    const hoje = new Date();
    const eventos = document.querySelectorAll("#events-list li");

    eventos.forEach(evento => {
        const dataEvento = new Date(evento.getAttribute("data-date"));
        if (dataEvento < hoje) {
            evento.classList.add("past-event"); // Adiciona a classe que oculta o evento passado
        }
    });
}

// Atualiza os eventos ao carregar a página
atualizarEventos();


