import xml from 'xml2js';

const builder = new xml.Builder({
  renderOpts: { pretty: true }
});

export default builder;
