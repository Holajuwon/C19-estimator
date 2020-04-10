import impact from './impact';
import severeImpact from './severeImpact';

const covid19ImpactEstimator = (data) => {

  return {
    data,
    impact: impact(data),
    severeImpact: severeImpact(data)
  };
};

export default covid19ImpactEstimator;
