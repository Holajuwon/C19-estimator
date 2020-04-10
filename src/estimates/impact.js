import estimate from './estimate';

export default (data) => {
  const currentlyInfected = data.reportedCases * 10;

  return {
    currentlyInfected,
    ...estimate(data, currentlyInfected)
  };
};
