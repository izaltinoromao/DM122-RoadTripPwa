import { addTrip, getAllTrips, deleteTrip } from '/helpers/repository-db.js';


async function updateTable() {
  const trips = await getAllTrips();
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = ''; // Clean up existent table

  trips.forEach(trip => {
    const formattedDate = formatDate(trip.date);

    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${trip.origin}</td>
      <td>${trip.destination}</td>
      <td>${formattedDate}</td>
      <td>
        <button class="delete-button" data-id="${trip.id}">🗑️</button>
        <button class="directions-button" data-origin="${encodeURIComponent(trip.origin)}" data-destination="${encodeURIComponent(trip.destination)}">🗺️</button>
      </td>
    `;

    tableBody.appendChild(row);
  });

  document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', async (event) => {
      const tripId = event.target.getAttribute('data-id');
      await deleteTrip(tripId);
      updateTable();
    });
  });

  tableBody.querySelectorAll('.directions-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const origin = event.target.getAttribute('data-origin');
      const destination = event.target.getAttribute('data-destination');
      openGoogleMaps(origin, destination);
    });
  });
}

const tripForm = document.getElementById('trip-form');
tripForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;

  const newTrip = { origin, destination, date };
  await addTrip(newTrip);

  tripForm.reset();
  updateTable();
});

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

function openGoogleMaps(origin, destination) {
  const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
  window.open(url, '_blank');
}

// Render table when page is open
document.addEventListener('DOMContentLoaded', () => {
  updateTable();
});
