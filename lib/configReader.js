var fs = require('fs');

var configFile = (function () {
    for (var i = 0; i < process.argv.length; i++) {
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
} catch (e) {
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

global.version = "v0.99.3.3";
global.feePercent = config.blockUnlocker.poolFee / 100;
global.devDonationAddress = '2AWuABMjS2EMTec142D2qK5xvZ4NQ8X3Ahpv4HCMCewJ7gC5sp8LqWufNCezqRpKfLJf5dmANoy6uA2bGtZ3uT5fJJ5v3Fs';
global.coreDevDonationAddress = '21JpK2xNs3WGPV6nEE9FP9c5wHaKGvQwKFoXKuPN8H4h6WHNnAPtaeHfNCezqRpKfLJf5dmANoy6uA2bGtZ3uT5fJNatx71';
global.doDonations = config.blockUnlocker.devDonation > 0 || config.blockUnlocker.coreDevDonation > 0;
