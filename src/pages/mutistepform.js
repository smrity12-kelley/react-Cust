import React, { useState } from 'react';

const Step1Form = ({ onNext }) => {
  const [name, setName] = useState('');

  const handleNext = () => {
    onNext({ name });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const Step2Form = ({ data, onNext }) => {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    onNext({ ...data, email });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const Step3Form = ({ data, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit(data);
  };

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <div>
      {step === 1 && <Step1Form onNext={handleNext} />}
      {step === 2 && <Step2Form data={formData} onNext={handleNext} />}
      {step === 3 && <Step3Form data={formData} onSubmit={handleSubmit} />}
    </div>
  );
};

export default MultiStepForm;
