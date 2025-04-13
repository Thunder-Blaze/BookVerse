const books = [
  { id: 1, name: 'Book1', issuedTo: 'A', returnBy: '2025-04-20',Fine:'Rs.200' },
  { id: 2, name: 'Book2', issuedTo: 'B', returnBy: '2025-04-22' ,Fine:'Rs.200'},
  { id: 3, name: 'Book3', issuedTo: 'C', returnBy: '2025-04-25',Fine:'Rs.200' },
];

function renderTable(filter = '') {
  const tbody = document.querySelector('#bookTable tbody');
  tbody.innerHTML = '';
  const filtered = books.filter(book =>
    book.name.toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach(book => {
    const row = `<tr>
      <td>${book.id}</td>
      <td>${book.name}</td>
      <td>${book.issuedTo}</td>
      <td>${book.returnBy}</td>
        <td>${book.Fine}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}



function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('themeIcon');

    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

document.getElementById('mainSearch').addEventListener('input', (e) => {
  renderTable(e.target.value);
});

renderTable();
