export default (data, currentlyInfected) => {
  let factor;
  if (data.periodType === 'days') {
    factor = Math.floor(data.timeToElapse / 3);
  } else if (data.periodType === 'weeks') {
    factor = Math.floor((data.timeToElapse * 7) / 3);
  } else if (data.periodType === 'months') {
    factor = Math.floor((data.timeToElapse * 30) / 3);
  }

  const infectionsByRequestedTime = currentlyInfected * 2 ** factor;
  const severeCasesByRequestedTime = Math.floor(infectionsByRequestedTime * 0.15);
  const hospitalBedsByRequestedTime = Math.ceil(data.totalHospitalBeds * 0.35
  - severeCasesByRequestedTime);

  return {
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime
  };
};
