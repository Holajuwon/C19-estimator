import estimate from './estimate';

export default (data) => {
  const currentlyInfected = data.reportedCases * 50;

  return {
    currentlyInfected,
    ...estimate(data, currentlyInfected)
  };
};
