import React, { useState } from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import Button from "@mui/material/Button";
import StyledTableCell from "./index";
import { Div, Input, Smalldiv } from "../../../style";

export const InputForm = ({ addInfo }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbo] = useState(0);
  const [protein, setProtein] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const infos = {
      name: name,
      calories: calories,
      fat: fat,
      carbs: carbs,
      protein: protein,
    };

    addInfo(infos);

    setName("");
    setCalories(0);
    setFat(0);
    setCarbo(0);
    setProtein(0);
  };

  return (
    <div style={{ width: "100%" }}>
      <Div>
        <Smalldiv>
          <label htmlFor="Foodname">Foodname</label>
          <Input
            type="text"
            name="Foodname"
            placeholder="Foodname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Smalldiv>
        <Smalldiv>
          <label htmlFor="calories">Calories</label>
          <Input
            type="text"
            name="calories"
            placeholder="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </Smalldiv>

        <Smalldiv>
          <label htmlFor="fat">Fat</label>
          <Input
            type="text"
            placeholder="fat"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
        </Smalldiv>

        <Smalldiv>
          <label htmlFor="carbs">Carbs</label>
          <Input
            name="carbs"
            type="text"
            placeholder="carbo"
            value={carbs}
            onChange={(e) => setCarbo(e.target.value)}
          />
        </Smalldiv>

        <Smalldiv>
          <label htmlFor="protein">Protein</label>
          <Input
            type="text"
            name="protein"
            placeholder="protein"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
        </Smalldiv>

        <Button
          style={{ width: "100px", height: "50px", marginTop: "20px" }}
          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          ADD
        </Button>
      </Div>
    </div>
  );
};
