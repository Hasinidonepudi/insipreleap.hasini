const cases = [
  { name: "Lorem ipsum case", manager: "Drew Perkins", initials: "DP", color: "brown" },
  { name: "Dolor sit amet case", manager: "Jane Doe", initials: "JD", color: "pink" },
  { name: "Ipsum case lorem", manager: "Gintaras", initials: "GA", color: "blue" },
  { name: "Case sit amet lore", manager: "Emily Hayton", initials: "EH", color: "yellow" },
  { name: "Acit dolor ipsum case", manager: "Mark Spencer", initials: "MS", color: "gray" },
];

const caseList = document.getElementById("case-list");

cases.forEach(c => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${c.name}</td>
    <td>
      <div class="row">
        <div class="avatar ${c.color}">${c.initials}</div>
        <span>${c.manager}</span>
      </div>
    </td>
  `;

  caseList.appendChild(row);
});




