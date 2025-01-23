import { useState } from 'react';
import 'react-dropdown/style.css';
import './App.css';

function newFundForm1() {

    const [inputs, setInputs] = useState({
      fundName: '',
      fundStatus: '',
      currency: '',
      legalForm: '',
      dateIncorporation: '',
      vintageYears: '',
      fundType: '',
      region: '',
      geographyFocus: '',
      sectorFocus: '',
      strategy: '',
      number: ''
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
            Fund Creation
            </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <div className="input-group">
                        <label>Fund Name</label>
                        <input
                        type="text"
                        name="fundName"
                        value={inputs.formName}
                        onChange={handleInputChange}
                        placeholder="Fund Name"
                        />
                    </div>
                    <div className="input-group">
                        <label>Fund Status</label>
                        <select
                            name="fundStatus"
                            value={inputs.fundStatus}
                            onChange={handleInputChange}
                        >
                            <option value="Status1">Status1</option>
                            <option value="Status2">Status2</option>
                            <option value="Status3">Status3</option>
                        </select>
                    </div>
                </div>
                <div className="input-container">
                    <div className="input-group">
                        <label>Currency</label>
                        <select
                            name="currency"
                            value={inputs.currency}
                            onChange={handleInputChange}
                        >
                            <option value="USD">USD</option>
                            <option value="SGD">SGD</option>
                            <option value="Yen">Yen</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Legal Form</label>
                        <select
                            name="legalForm"
                            value={inputs.legalForm}
                            onChange={handleInputChange}
                        >
                            <option value="Form1">Form1</option>
                            <option value="Form2">Form2</option>
                            <option value="Form3">Form3</option>
                        </select>
                    </div>
                </div>
                <div className="input-container">
                    <div className="input-group">
                            <label>Date of Incorporation</label>
                            <input
                            type="date"
                            name="dateIncorporation"
                            value={inputs.dateIncorporation}
                            onChange={handleInputChange}
                            placeholder="DD/MM/YYYY"
                            />
                        </div>
                    <div className="input-group">
                        <label>Vintage Years</label>
                        <input
                        type="text"
                        name="vintageYears"
                        value={inputs.vintageYears}
                        onChange={handleInputChange}
                        placeholder="ex. 2004"
                    />
                    </div>
                </div>
                <div className="input-container">
                    <div className="input-group">
                        <label>Fund Type</label>
                        <select
                            name="fundType"
                            value={inputs.fundType}
                            onChange={handleInputChange}
                        >
                            <option value="Type1">Type1</option>
                            <option value="Type2">Type2</option>
                            <option value="Type3">Type3</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Region</label>
                        <select
                            name="region"
                            value={inputs.region}
                            onChange={handleInputChange}
                        >
                            <option value="APAC">APAC</option>
                            <option value="EMEA">EMEA</option>
                            <option value="AMER">AMER</option>
                        </select>
                    </div>
                </div>
                <div className="input-container">
                    <div className="input-group">
                        <label>
                            <input
                            type="radio"
                            name="strategy"
                            value="Real Estate"
                            checked={inputs.strategy === 'Real Estate'}
                            onChange={handleInputChange}
                            />
                            Real Estate
                        </label>
                    </div>
                    <div className="input-group">
                        <label>
                            <input
                            type="radio"
                            name="strategy"
                            value="Real Estate Core"
                            checked={inputs.strategy === 'Real Estate Core'}
                            onChange={handleInputChange}
                            />
                            Real Estate Core
                        </label>
                    </div>
                    <div className="input-group">
                        <label>
                            <input
                            type="radio"
                            name="strategy"
                            value="Other"
                            checked={inputs.strategy === "Other"}
                            onChange={handleInputChange}
                            />
                            Other
                        </label>
                        {inputs.strategy !== "Real Estate" && inputs.strategy !== "Real Estate Core" &&(
                            <input
                            type="text"
                            placeholder="Startup"
                            name="strategy"
                            value={inputs.strategy}
                            onChange={handleInputChange}
                            />
                        )}
                    </div>
                </div>
                <div className="input-container">
                    <div className="input-group">
                        <label>Geography Focus</label>
                        <select
                            name="geographyFocus"
                            value={inputs.geographyFocus}
                            onChange={handleInputChange}
                        >
                            <option value="Region1">Region1</option>
                            <option value="Region2">Region2</option>
                            <option value="Region3">Region3</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Sector Focus</label>
                        <select
                            name="sectorFocus"
                            value={inputs.sectorFocus}
                            onChange={handleInputChange}
                        >
                            <option value="Sector1">Sector1</option>
                            <option value="Sector2">Sector2</option>
                            <option value="Sector3">Sector3</option>
                        </select>
                    </div>
                </div>
                <div className="input-container">
                        <div className="input-group">
                            <label>Number</label>
                            <input
                            type="number"
                            name="number"
                            value={inputs.number}
                            onChange={handleInputChange}
                            placeholder="Input unique code number"
                        />
                        </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default newFundForm1;