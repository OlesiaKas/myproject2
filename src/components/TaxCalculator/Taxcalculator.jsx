import React, { useState } from "react";
import Button from "../Buttons/Buttons";
import "./taxcalculator.scss";

const TaxCalculator = () => {
  const [grossWage, setGrossWage] = useState("");
  const [socialTaxRate, setSocialTaxRate] = useState(8.72);
  const [healthTaxRate, setHealthTaxRate] = useState(10.78);
  const [incomeTaxRate, setIncomeTaxRate] = useState(20);
  const [pensionTaxRate, setPensionTaxRate] = useState(3);
  const [employerContributionRate, setEmployerContributionRate] =
    useState(1.77);

  const [nonTaxableRate, setNonTaxableRate] = useState(747);
  const [netWage, setNetWage] = useState(0);
  const [employerContribution, setEmployerContribution] = useState(0);

  const calculateNetWage = () => {
    const socialTax = (grossWage * socialTaxRate) / 100;
    const healthTax = (grossWage * healthTaxRate) / 100;
    const pensionTax = (grossWage * pensionTaxRate) / 100;
    const employerContribution = (grossWage * employerContributionRate) / 100;
    let nonTaxableSum;

    if (grossWage <= 2167) {
      nonTaxableSum = Math.max(nonTaxableRate - 0.5 * (grossWage - 924), 0);
    } else {
      nonTaxableSum = Math.max(nonTaxableRate - 0.18 * (grossWage - 642), 0);
    }

    const taxableIncome = Math.max(grossWage - nonTaxableSum, 0);
    const incomeTax = (taxableIncome * incomeTaxRate) / 100;
    const totalTaxes = socialTax + healthTax + incomeTax + pensionTax;
    const netWage = grossWage - totalTaxes;
    setNetWage(netWage);
    setEmployerContribution(employerContribution);

    setNonTaxableRate(nonTaxableRate);
  };

  const handleInputChange = (e, setter) => {
    setter(parseFloat(e.target.value));
  };

  return (
    <>
      <div className="taxcalculator">
        <h2>Darbo užmokestis į rankas</h2>

        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                <h4>Darbo užmokestis ant popieriaus:</h4>
              </td>
              <td>
                <input
                  type="number"
                  value={grossWage}
                  onChange={(e) => setGrossWage(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Pensijų socialinis draudimas:</h4>
              </td>
              <td>
                <input
                  disabled={true}
                  type="number"
                  value={socialTaxRate}
                  onChange={(e) => handleInputChange(e, setSocialTaxRate)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Sveikatos, Ligos, Motinystės draudimas:</h4>
              </td>
              <td>
                <input
                  disabled={true}
                  type="number"
                  value={healthTaxRate}
                  onChange={(e) => handleInputChange(e, setHealthTaxRate)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <h4>Papildomas pensijų draudimas (0 arba 3 proc.):</h4>
              </td>
              <td>
                <input
                  type="number"
                  value={pensionTaxRate}
                  onChange={(e) => handleInputChange(e, setPensionTaxRate)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Gyventojų pajamų mokestis:</h4>
              </td>
              <td>
                <input
                  disabled={true}
                  type="number"
                  value={incomeTaxRate}
                  onChange={(e) => handleInputChange(e, setIncomeTaxRate)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h4>
                  Neapmokestinamasis pajamų dydis (0 EUR, 400 EUR, 747 EUR):
                </h4>
              </td>
              <td>
                <input
                  type="number"
                  value={nonTaxableRate}
                  onChange={(e) => handleInputChange(e, setNonTaxableRate)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Darbdavio įmoka (1,77 arba 2,49 proc.):</h4>
              </td>
              <td>
                <input
                  type="number"
                  value={employerContributionRate}
                  onChange={(e) =>
                    handleInputChange(e, setEmployerContributionRate)
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Button onClick={calculateNetWage}>Skaičiuoti</Button>
        {netWage > 0 && (
          <>
            <h3>Darbo užmokestis į rankas: {netWage.toFixed(2)} EUR</h3>
            <h3>
              Darbdavio įmoka:
              {employerContribution.toFixed(2)} EUR
            </h3>
          </>
        )}
      </div>
    </>
  );
};

export default TaxCalculator;
