export default (data, factor) => {
  const currentlyInfected = data.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * 2 ** factor;

  return {
    currentlyInfected,
    infectionsByRequestedTime
  };
};
