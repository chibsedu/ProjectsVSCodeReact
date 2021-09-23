import React, { useState } from "react";



const Mform = () => {
    const [weightInLb, setWeightInLb] = useState(0);
    const [weightInKg, setWeightInKg] = useState(0);

    const calculate = (e) => {
        e.preventDefault();
        const formValid = +weightInLb >= 0;
        if (!formValid) {
          return;
        }
        setWeightInKg(+weightInLb * 0.453592);
      };

    return (
        <div className="Mform">
            <form onSubmit={calculate}>
                <div>
                    <label>weight in pounds</label>
                    { <input
                        value={weightInLb}
                        onChange={(e) => setWeightInLb(e.target.value)}
                    />}
                </div>
                <button type="submit">calculate</button>
      </form>
      <p>{weightInKg} kg</p>
        </div>
    )
}

export default Mform;
