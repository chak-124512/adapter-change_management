// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev88062.service-now.com/',
  username: 'admin',
  password: 'aNewHope30!',
  serviceNowTable: 'change_request'
};

// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
   // Test the object's get and post methods.
  // You must write the arguments for get and post.
  const cb = (data, error, type) => {
    if (error) {
      console.error(`\nError returned from ${type} request:\n${JSON.stringify(error)}`);
    }
    console.log(`\nResponse returned from ${type} request:\n${JSON.stringify(data)}`)
  };
  const cbp = (data, error)=> cb(data, error, 'POST');
  const cbg = (data, error)=> cb(data, error, 'GET');
  connector.get(cbg);
  connector.post(cbp);

}

// Call mainOnObject to run it.
mainOnObject();