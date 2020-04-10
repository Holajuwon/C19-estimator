export default (data, currentlyInfected) => {
  let factor;
  let days;
  if (data.periodType === 'days') {
    days = data.timeToElapse;
    factor = Math.floor(data.timeToElapse / 3);
  } else if (data.periodType === 'weeks') {
    days = data.timeToElapse * 7;
    factor = Math.floor((data.timeToElapse * 7) / 3);
  } else if (data.periodType === 'months') {
    days = data.timeToElapse * 30;
    factor = Math.floor((data.timeToElapse * 30) / 3);
  }

  const infectionsByRequestedTime = currentlyInfected * 2 ** factor;
  const severeCasesByRequestedTime = Math.floor(infectionsByRequestedTime * 0.15);
  const hospitalBedsByRequestedTime = Math.ceil(data.totalHospitalBeds * 0.35
  - severeCasesByRequestedTime);
  const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 0.05);
  const casesForVentilatorsByRequestedTime = Math.floor(infectionsByRequestedTime * 0.02);
  const dollarsInFlight = Math.round(infectionsByRequestedTime
  * data.region.avgDailyIncomePopulation
   * data.region.avgDailyIncomeInUSD * days).toFixed(2);

  return {
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};
