export default (data, factor) => {
  const currentlyInfected = data.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * 2 ** factor;
  const severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
  const hospitalBedsByRequestedTime = Math.floor(data.totalHospitalBeds * 0.35)
  - severeCasesByRequestedTime;

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime
  };
};
