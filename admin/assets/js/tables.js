/**
 * RITMAX - Data Table Sorting & Filtering
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-table]').forEach(initTable);
  });

  function initTable(wrapper) {
    const table = wrapper.querySelector('.data-table') || wrapper;
    const searchInput = wrapper.querySelector('[data-table-search]');
    const tbody = table.querySelector('tbody');
    if (!tbody) return;

    const rows = Array.from(tbody.querySelectorAll('tr'));
    let sortCol = -1;
    let sortAsc = true;

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const term = this.value.toLowerCase();
        rows.forEach(function (row) {
          row.style.display = row.textContent.toLowerCase().includes(term) ? '' : 'none';
        });
      });
    }

    table.querySelectorAll('thead th[data-sort]').forEach(function (th, index) {
      th.addEventListener('click', function () {
        if (sortCol === index) {
          sortAsc = !sortAsc;
        } else {
          sortCol = index;
          sortAsc = true;
        }

        table.querySelectorAll('thead th').forEach(function (h) {
          h.classList.remove('sorted');
        });
        th.classList.add('sorted');
        th.querySelector('.sort-icon').className = 'fas sort-icon ' + (sortAsc ? 'fa-sort-up' : 'fa-sort-down');

        const sorted = rows.slice().sort(function (a, b) {
          const aVal = (a.children[index]?.textContent || '').trim();
          const bVal = (b.children[index]?.textContent || '').trim();
          const aNum = parseFloat(aVal.replace(/[^0-9.-]/g, ''));
          const bNum = parseFloat(bVal.replace(/[^0-9.-]/g, ''));

          if (!isNaN(aNum) && !isNaN(bNum)) {
            return sortAsc ? aNum - bNum : bNum - aNum;
          }
          return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        });

        sorted.forEach(function (row) {
          tbody.appendChild(row);
        });
      });
    });
  }
})();
