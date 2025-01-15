import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css';

function newFundForm2() {

    const [inputs, setInputs] = useState({
      officeNumber: '',
      registeredAddress: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      description: ''
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
            Other Information
            </p>
            </div>
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <div className="input-group">
                            <label>Office Number</label>
                            <input
                            type="text"
                            name="officeNumber"
                            value={inputs.officeNumber}
                            onChange={handleInputChange}
                            placeholder="Input office number"
                            />
                        </div>
                        <div className="input-group">
                            <label>Registered Address</label>
                            <input
                            type="text"
                            name="registeredAddress"
                            value={inputs.registeredAddress}
                            onChange={handleInputChange}
                            placeholder="Input registered address"
                            />
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-group">
                            <label>City</label>
                            <input
                            type="text"
                            name="city"
                            value={inputs.city}
                            onChange={handleInputChange}
                            placeholder="Input city"
                            />
                        </div>
                        <div className="input-group">
                            <label>State</label>
                            <input
                            type="text"
                            name="state"
                            value={inputs.state}
                            onChange={handleInputChange}
                            placeholder="Input state"
                            />
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-group">
                            <label>Country</label>
                            <input
                            type="text"
                            name="country"
                            value={inputs.country}
                            onChange={handleInputChange}
                            placeholder="Input country"
                            />
                        </div>
                        <div className="input-group">
                            <label>ZIP Code</label>
                            <input
                            type="text"
                            name="zipCode"
                            value={inputs.zipCode}
                            onChange={handleInputChange}
                            placeholder="Input ZIP code"
                            />
                        </div>
                    </div>
                    <div className="input-container">
                            <div className="large-input-group">
                                <label>Description</label>
                                <textarea
                                id="multiLineInput"
                                name="carriedInterestDescription"
                                value={inputs.description}
                                onChange={handleInputChange}
                                placeholder="Description"
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