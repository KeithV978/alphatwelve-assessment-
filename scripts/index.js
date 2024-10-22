(function () {
  // Table data
  const data = [
    {
      eventName: "Cloud Innovation Summit",
      date: "2024-10-25",
      speaker: "Jane Doe",
      status: "Completed",
    },
    {
      eventName: "Blockchain Revolution Conference",
      date: "2024-10-25",
      speaker: "Dr. Peter Smith",
      status: "In Progress",
    },
    {
      eventName: "AI Healthcare Symposium",
      date: "2024-10-25",
      speaker: "Dr Aisha Malik",
      status: "Completed",
    },
    {
      eventName: "Future of Fintech Forum",
      date: "2024-10-12",
      speaker: "Jone Lee",
      status: "Completed",
    },
    {
      eventName: "Data Analytics in Business",
      date: "2024-10-09",
      speaker: "Rachel Moore",
      status: "Completed",
    },
    {
      eventName: "Sustainable Energy Expo",
      date: "2024-10-07",
      speaker: "Prof. Alan Green",
      status: "Completed",
    },
    {
      eventName: "Web3 Interfaces Workshop",
      date: "2024-10-03",
      speaker: "Kevin Adams",
      status: "In Progress",
    },
    {
      eventName: "Cybersecurity for Startups",
      date: "2024-10-14",
      speaker: "Emily Zhang",
      status: "Completed",
    },
    {
      eventName: "Smart Cities Forum",
      date: "2024-09-05",
      speaker: "Dr Maria Hernandez",
      status: "In Progress",
    },
    {
      eventName: "Tech Safari Mixer",
      date: "2024-08-02",
      speaker: "Guest Panel",
      status: "In Progress",
    },
  ];

  // Select the table body element
  const tableBody = document.querySelector("#myTable tbody");

  // Function to populate the table
  function populateTable(filteredData) {
    tableBody.innerHTML = ""; // Clear current rows

    filteredData.forEach((item) => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const ageCell = document.createElement("td");
      const status = document.createElement("td");
      const statusWrapper = document.createElement("li");

      // statusWrapper.classList.add("completed-bg", "status");
      // statusWrapper.textContent = item.status;
      if (item.status === "Completed") {
        // console.log(statusWrapper);
        statusWrapper.classList.add("completed-bg", "status");
        statusWrapper.textContent = item.status;
      } else {
        // console.log(statusWrapper);
        statusWrapper.classList.add("progress-bg", "status");
        statusWrapper.textContent = item.status;
      }

      idCell.textContent = item.eventName;
      nameCell.textContent = item.date;
      ageCell.textContent = item.speaker;

      status.appendChild(statusWrapper);

      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      row.appendChild(status);

      tableBody.appendChild(row);
    });
  }

  // Initially populate the table with all data
  populateTable(data);

  // Add event listener to filter input
  const filterInput = document.querySelector("#filterInput");

  filterInput.addEventListener("input", function () {
    const filterValue = this.value.toLowerCase(); // Get input value in lowercase

    // Filter the data based on the input value (by any column)
    const filteredData = data.filter((item) => {
      return (
        item.date.toLowerCase().includes(filterValue) ||
        item.speaker.toString().includes(filterValue) ||
        item.eventName.toString().includes(filterValue)
      );
    });

    // Repopulate the table with the filtered data
    populateTable(filteredData);
  });
})();
