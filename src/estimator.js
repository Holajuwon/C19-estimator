import impact from './estimates/impact';
import severeImpact from './estimates/severeImpact';

const covid19ImpactEstimator = (data) => ({
  data,
  impact: impact(data),
  severeImpact: severeImpact(data)
});

export default covid19ImpactEstimator;
