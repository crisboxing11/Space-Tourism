import { useState } from "react";
import data from "../Style/assets/data.json";

const Destination = () => {
const [planets] = useState(data.destinations);
const [value, setValue] = useState(0);
const { name, images, description, distance, travel } = planets [value];
};

export default Destination;
