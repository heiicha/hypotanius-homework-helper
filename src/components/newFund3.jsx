import { useState } from 'react';
import 'react-dropdown/style.css';
import './App.css';

function newFundForm2() {

    const [inputs, setInputs] = useState({
      hurdleRate: '',
      secondHurdleRate: '',
      hurdleDescription: '',
      carriedInterest: '',
      secondCarriedInterest: '',
      carriedInterestDescription: '',
      clawback: ''
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
            Waterfall
            </p>
            </div>
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <div className="input-group">
                            <label>Hurdle Rate</label>
                            <div>
                                <span className='prefix'>$</span>
                                <input
                                type="number"
                                name="hurdleRate"
                                value={inputs.secondHurdleRate}
                                onChange={handleInputChange}
                                placeholder="Input hurdle rate"
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Second Hurdle Rate</label>
                            <div>
                                <span className='prefix'>$</span>
                                <input
                                type="number"
                                name="secondHurdleRate"
                                value={inputs.secondHurdleRate}
                                onChange={handleInputChange}
                                placeholder="Input amount"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-container">
                            <div className="large-input-group">
                                <label>Hurdle Description</label>
                                <textarea
                                id="multiLineInput"
                                name="hurdleDescription"
                                value={inputs.hurdleDescription}
                                onChange={handleInputChange}
                                placeholder="Hurdle description"
                                rows="4"
                            />
                            </div>
                    </div>
                    <div className="input-container">
                        <div className="input-group">
                            <label>Carried Interest</label>
                            <div>
                                <span className='prefix'>$</span>
                                <input
                                type="number"
                                name="carriedInterest"
                                value={inputs.carriedInterest}
                                onChange={handleInputChange}
                                placeholder="Input carried interest"
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Second Carried Interest</label>
                            <div>
                                <span className='prefix'>$</span>
                                <input
                                type="number"
                                name="secondCarriedInterest"
                                value={inputs.secondCarriedInterest}
                                onChange={handleInputChange}
                                placeholder="Input second carried interest"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-container">
                            <div className="large-input-group">
                                <label>Carried Interest Description</label>
                                <textarea
                                id="multiLineInput"
                                name="carriedInterestDescription"
                                value={inputs.carriedInterestDescription}
                                onChange={handleInputChange}
                                placeholder="Carried interest description"
                                rows="4"
                            />
                            </div>
                    </div>
                    <div className="input-container">
                        <div className="radio-group">
                            <label>
                                <input
                                type="radio"
                                name="clawback"
                                value="Yes"
                                checked={inputs.clawback === 'Yes'}
                                onChange={handleInputChange}
                                />
                                Yes
                            </label>
                        </div>
                        <div className="radio-group">
                            <label>
                                <input
                                type="radio"
                                name="clawback"
                                value="No"
                                checked={inputs.clawback === 'No'}
                                onChange={handleInputChange}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default newFundForm2;