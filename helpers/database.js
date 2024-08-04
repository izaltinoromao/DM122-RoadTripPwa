export default async function getRoadTripDatabase() {
    const { default: Dexie } = await import(
      'https://cdn.jsdelivr.net/npm/dexie@4.0.8/+esm'
    );
    const db = new Dexie('roadTripDatabase');
    db.version(2).stores({
      trips: '++id, origin, destination, date'
    });
    return db;
  }