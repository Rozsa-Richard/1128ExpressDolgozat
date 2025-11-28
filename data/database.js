import Database from "better-sqlite3";

const db = new Database("./data/database.sqlite");

db.prepare(
    "CREATE TABLE IF NOT EXISTS cars (id INTEGER PRIMARY KEY AUTOINCREMENT, brand TEXT, color TEXT, lplate TEXT)"
).run();

export const getAllCar = () => {
    return db.prepare("SELECT * FROM cars").all();
};

export const getCarById = (id) => {
    return db.prepare("SELECT * FROM cars WHERE id = ?").get(id);
};

export const createCar = (brand, color, lplate) => {
    db.prepare("INSERT INTO cars (brand, color, lplate) VALUES (?,?,?)").run(brand, color, lplate);
};

export const updateCar = (id, brand, color, lplate) => {
    db.prepare("UPDATE cars SET brand = ?, color = ?, lplate = ? WHERE id = ?").run(brand, color, lplate, id);
};

export default db;