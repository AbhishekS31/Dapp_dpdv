const Upload = artifacts.require("Upload"); // Ensure this matches your contract name

module.exports = function (deployer) {
    deployer.deploy(Uploadit, { gas: 6721975 });
};
