import impact from './impact';
import severeImpact from './severeImpact';
import dayNormalizer from './dayNormalizer';

const covid19ImpactEstimator = (data) => {
  const factor = dayNormalizer(data);

  return {
    data,
    impact: impact(data, factor),
    severeImpact: severeImpact(data, factor)
  };
};

export default covid19ImpactEstimator;
