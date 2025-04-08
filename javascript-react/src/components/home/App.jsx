import { useState } from "react";
import styles from "./App.module.css";
import { useEffect } from "react";
import { getPreviousDays } from "../../utils/date";

const previousDays = getPreviousDays(10, 2);

const App = () => {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("eur");
  const [initialValue, setInitialValue] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [ratesList, setRatesList] = useState([]);

  const convertedValue = initialValue * exchangeRate;

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setRatesList([]);
      return;
    }

    if (
      ratesList.length > 0 &&
      ratesList[0].from === fromCurrency &&
      ratesList[0].to === toCurrency
    ) {
      return;
    }

    // if currencies are different and are not swapped by button, then:
    try {
      fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json `
      )
        .then((response) => response.json())
        .then((data) => {
          setExchangeRate(data[fromCurrency][toCurrency]);
          setRatesList([
            {
              date: data.date,
              rate: data[fromCurrency][toCurrency],
              from: fromCurrency,
              to: toCurrency,
            },
          ]);
        });
    } catch (e) {
      console.error(e);
    }

    previousDays.forEach((prevDay) => {
      try {
        fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${prevDay}/v1/currencies/${fromCurrency}.json `
        )
          .then((response) => response.json())
          .then((data) => {
            setRatesList((ratesList) => [
              ...ratesList,
              {
                date: data.date,
                rate: data[fromCurrency][toCurrency],
                from: fromCurrency,
                to: toCurrency,
              },
            ]);
          });
      } catch (e) {
        console.error(e);
      }
    });
  }, [fromCurrency, toCurrency]);

  function handleSwapCurrencies() {
    setExchangeRate((exchangeRate) => 1 / exchangeRate);
    setRatesList((ratesList) =>
      ratesList.map((item) => ({
        date: item.date,
        rate: 1 / item.rate,
        from: toCurrency,
        to: fromCurrency,
      }))
    );

    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.exchange__wrapper}>
        <div className={styles.form}>
          <h1 className={styles.heading}>Currency converter</h1>
          <label className={styles.label} htmlFor="fromCurrency">
            <select
              value={fromCurrency}
              id="fromCurrency"
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="mdl">MDL</option>
            </select>
            <input
              className={styles.input}
              value={initialValue}
              onChange={(e) => {
                setInitialValue(e.target.value);
              }}
              type="number"
            />
          </label>
          <button
            className={styles.swap}
            onClick={() => handleSwapCurrencies()}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M17 4L12 9L7 4"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17 20L12 15L7 20"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <label className={styles.label} htmlFor="toCurrency">
            <select
              value={toCurrency}
              id="toCurrency"
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="mdl">MDL</option>
            </select>

            <input
              className={styles.input}
              value={convertedValue ? convertedValue.toFixed(2) : ""}
              disabled
              type="number"
            />
          </label>
        </div>

        {ratesList.length > 0 && (
          <div>
            <h1 className={styles.heading}>
              Last 10 days exchanges rate from {fromCurrency.toUpperCase()} to{" "}
              {toCurrency.toUpperCase()}
            </h1>
            <table className={styles.exchangeHistory}>
              <thead>
                <tr>
                  <th>Date:</th>
                  <th>Exchange Rate:</th>
                </tr>
              </thead>
              <tbody>
                {ratesList.map((rate) => (
                  <tr key={rate.date}>
                    <td> {rate.date}</td>
                    <td> {rate.rate.toFixed(5)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
