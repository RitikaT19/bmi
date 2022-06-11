import React, { useState } from "react";

export const BmiCal = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiCategory, setBmiCategory] = useState();
  const calculateBmi = () => {
    const heightInMeter = 0.001 * height;
    const bmiValue = weight / (heightInMeter * heightInMeter) / 100;
    const roundedOffValue = Number(bmiValue.toFixed(1));
    setBmi(roundedOffValue);

    if (bmi < 18.5) {
      setBmiCategory("Under weight");
    } else if (bmi > 18.5 && bmi < 25) {
      setBmiCategory("Normal");
    } else if (bmi > 25 && bmi < 30.5) {
      setBmiCategory("Over weight");
    } else {
      setBmiCategory("Obese");
    }
  };

  const clearValues = () => {
    setHeight(0);
    setWeight(0);
    setBmi(0);
    setBmiCategory("");
  };
  return (
    <>
      <h1>hello</h1>
      <label>Calculate your bmi</label>
      <br />
      <label>height </label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <label>in cm </label>
      <br />
      <label>weight </label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label>in kg </label>
      <button onClick={(e) => calculateBmi()}>Calculate</button>
      <br />
      <div>
        Your bmi is : {bmi} {bmiCategory}
      </div>
      <button onClick={(e) => clearValues()}>clear</button>
    </>
  );
};
