import { useState } from "react";

const DEFAULT_INVESTMENT = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
}


export default function UserInput() {
    const [userInput, setUserInput] = useState(DEFAULT_INVESTMENT);

    function handleChange(inputID, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputID]: newValue
            }
        });
    }

    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) =>
                            handleChange('initialInvestment', event.target.value)}>
                    </input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) =>
                            handleChange('annualInvestment', event.target.value)}>
                    </input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) =>
                            handleChange('expectedReturn', event.target.value)}>
                    </input>
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) =>
                            handleChange('duration', event.target.value)}>
                    </input>
                </p>
            </div>
        </section>
    );
}