function searchTable(tableBodyId) {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const tableBody = document.getElementById(tableBodyId);
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;

        if (cells.length > 0) {
            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                const textValue = cell.textContent || cell.innerText;

                if (textValue.toLowerCase().indexOf(filter) > -1) {
                    match = true;
                }

                // Reset highlighting
                cell.innerHTML = cell.textContent || cell.innerText;

                // Highlight if there's a match
                if (filter && textValue.toLowerCase().indexOf(filter) > -1) {
                    const highlightedText = textValue.replace(new RegExp(`(${filter})`, 'gi'), '<span class="highlight">$1</span>');
                    cell.innerHTML = highlightedText;
                }
            }
        }

        // Toggle row visibility
        rows[i].style.display = match ? '' : 'none';
    }
}
