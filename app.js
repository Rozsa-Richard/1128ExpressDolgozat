import express from "express";
import * as db from "./data/database.js"

const app = express();

app.use(express.json());

app.get("/api/cars", (req, res) => {
    const allcar = db.getAllCar();
    return res.status(200).json(allcar);
});

app.post("/api/cars", (req, res) => {
    const {brand, color, lplate} = req.body;
    if (!brand, !color, !lplate)
        return res.status(400).json("A kocsi adatai nem találhatóak");
    db.createCar(brand, color, lplate);
    return res.status(201).json({message: "Kocsi létrehozva"});
});

app.put("/api/cars/:id", (req, res) => {
    const id = +req.params.id;
    const car = db.getCarById(id);
    if (!car)
        return res.status(404).json("Autó nem található");
    const {brand, color, lplate} = req.body;
    if (!brand, !color, !lplate)
        return res.status(400).json("A kocsi adatai nem találhatóak");
    db.updateCar(id ,brand, color, lplate);
    return res.status(200).json({message: "Sikeresen módosítottad"})
});

app.listen(3211, ()=> {
    console.log("run on 2000");
});

export default app;