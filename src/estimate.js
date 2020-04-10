export default (data, currentlyInfected) => {
  let factor;
  let days;
  if (data.periodType === 'days') {
    days = data.timeToElapse;
    factor = Math.trunc(data.timeToElapse / 3);
  } else if (data.periodType === 'weeks') {
    days = data.timeToElapse * 7;
    factor = Math.trunc((data.timeToElapse * 7) / 3);
  } else if (data.periodType === 'months') {
    days = data.timeToElapse * 30;
    factor = Math.trunc((data.timeToElapse * 30) / 3);
  }

  const infectionsByRequestedTime = currentlyInfected * 2 ** factor;
  const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);
  const hospitalBedsByRequestedTime = Math.trunc(data.totalHospitalBeds * 0.35
  - severeCasesByRequestedTime);
  const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
  const casesForVentilatorsByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
  const dollarsInFlight = Math.trunc(infectionsByRequestedTime
  * data.region.avgDailyIncomePopulation
   * data.region.avgDailyIncomeInUSD * days);

  return {
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};
