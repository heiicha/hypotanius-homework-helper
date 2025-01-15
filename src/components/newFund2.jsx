import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css';

function newFundForm2() {

    const [inputs, setInputs] = useState({
      managementFee: '',
      fundInformation: '',
      feeOutsideCommitment: '',
      feeCallFrequency: '',
      feePolicy: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({
          ...inputs,
          [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div>
                <p
                className="header"
                style={{
                animation: "slideInFromLeft 0.5s ease-out",
                }}
                >
            Management Fee
            </p>
            </div>
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <div className="input-group">
                            <label>Management Fee</label>
                            <div>
                                <span className='prefix'>$</span>
                                <input
                                type="number"
                                name="managementFee"
                                value={inputs.managementFee}
                                onChange={handleInputChange}
                                placeholder="Input amount"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-group">
                            <label>Fee Call Frequency</label>
                            <select
                                name="feeCallFrequency"
                                value={inputs.feeCallFrequency}
                                onChange={handleInputChange}
                            >
                                <option value="USD">USD</option>
                                <option value="SGD">SGD</option>
                                <option value="Yen">Yen</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="radio-group">
                            <label>
                                <input
                                type="radio"
                                name="fundInformation"
                                value="Family"
                                checked={inputs.fundInformation === 'Family'}
                                onChange={handleInputChange}
                                />
                                Family
                            </label>
                        </div>
                        <div className="radio-group">
                            <label>
                                <input
                                type="radio"
                                name="fundInformation"
                                value="Commitment"
                                checked={inputs.fundInformation === 'Commitment'}
                                onChange={handleInputChange}
                                />
                                Commitment
                            </label>
                        </div>
                        <div className="radio-group">
                            <label>
                                <input
                                type="radio"
                                name="fundInformation"
                                value="Remaining cost of investment"
                                checked={inputs.fundInformation === 'Remaining cost of investment'}
                                onChange={handleInputChange}
                                />
                                Remaining cost of investment
                            </label>
                        </div>
                        <div className="radio-group">
                            <label>
                                <input
                                type="radio"
                                name="fundInformation"
                                value="Other"
                                checked={inputs.fundInformation === "Other"}
                                onChange={handleInputChange}
                                />
                                Other
                            </label>
                            {inputs.fundInformation !== "Family" && inputs.fundInformation !== "Commitment" && inputs.fundInformation !== "Remaining cost of investment" && (
                                <input
                                type="text"
                                placeholder="Other"
                                name="fundInformation"
                                value={inputs.fundInformation}
                                onChange={handleInputChange}
                                />
                            )}
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="radio-group">
                            <label>
                                <input
                                type="radio"
                                name="feeOutsideCommitment"
                                value="Yes"
                                checked={inputs.feeOutsideCommitment === 'Yes'}
                                onChange={handleInputChange}
                                />
                                Yes
                            </label>
                        </div>
                        <div className="radio-group">
                            <label>
                                <input
                                type="radio"
                                name="feeOutsideCommitment"
                                value="No"
                                checked={inputs.feeOutsideCommitment === 'No'}
                                onChange={handleInputChange}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="input-container">
                            <div className="large-input-group">
                                <label>Fee Policy</label>
                                <textarea
                                id="multiLineInput"
                                name="feePolicy"
                                value={inputs.feePolicy}
                                onChange={handleInputChange}
                                placeholder="Fee policy description"
                                rows="4"
                            />
                            </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default newFundForm2;