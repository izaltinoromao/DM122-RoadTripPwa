import getRoadTripDatabase from './database.js';

const initDB = async () => {
  const db = await getRoadTripDatabase();
  return db;
};

export const addTrip = async (trip) => {
  try {
    const db = await initDB();
    await db.trips.add(trip);
    console.log('Trip added successfully!');
  } catch (error) {
    console.error('Error adding trip:', error);
  }
};

export const getAllTrips = async () => {
  try {
    const db = await initDB();
    const trips = await db.trips.toArray();
    console.log(trips);
    return trips;
  } catch (error) {
    console.error('Error fetching trips:', error);
    return [];
  }
};

export const deleteTrip = async (id) => {
  try {
    const db = await initDB();
    await db.trips.delete(parseInt(id));
    console.log('Trip deleted successfully!');
  } catch (error) {
    console.error('Error deleting trip:', error);
  }
};
