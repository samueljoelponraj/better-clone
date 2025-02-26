import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CalculatorContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 2.5rem;
  background: #ffffff;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background: #f9f9f9;
  transition: 0.3s;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const Slider = styled.input`
  width: 100%;
  margin-top: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;

const ResultBox = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: #eef2f3;
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
  background: #3498db;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #2980b9;
  }
`;

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(265);
  const [zipCode, setZipCode] = useState(620102);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [chartData, setChartData] = useState(null);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const taxMonthly = propertyTax / 12;
    
    const payment =
      (principal * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

    setMonthlyPayment((payment + taxMonthly).toFixed(2));

    setChartData({
      labels: Array.from({ length: loanTerm }, (_, i) => i + 1),
      datasets: [
        {
          label: 'Yearly Payment Over Loan Term',
          data: Array.from({ length: loanTerm }, (_, i) => (payment * 12).toFixed(2)),
          borderColor: '#3498db',
          borderWidth: 2,
          fill: false,
        },
      ],
    });
  };

  return (
    <CalculatorContainer>
      <Title>Mortgage Calculator</Title>
      <FormGroup>
        <Label>Loan Amount ($): {loanAmount}</Label>
        <Slider
          type="range"
          min="50000"
          max="1000000"
          step="1000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Interest Rate (%): {interestRate}</Label>
        <Slider
          type="range"
          min="1"
          max="10"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Loan Term (Years)</Label>
        <InputField
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Property Tax ($ per year)</Label>
        <InputField
          type="number"
          value={propertyTax}
          onChange={(e) => setPropertyTax(Number(e.target.value))}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>ZIP Code</Label>
        <InputField
          type="number"
          value={zipCode}
          onChange={(e) => setZipCode(Number(e.target.value))}
        />
      </FormGroup>
      
      <Button onClick={calculateMonthlyPayment}>Calculate Payment</Button>

      {monthlyPayment && <ResultBox>Estimated Monthly Payment: ${monthlyPayment}</ResultBox>}
      
      {chartData && <Line data={chartData} />}
    </CalculatorContainer>
  );
};

export default MortgageCalculator;
