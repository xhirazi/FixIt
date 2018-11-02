const MAIN_INFO_COLOR = '#2B73B6';
const MAIN_WARN_COLOR = '#cd853f';
const MAIN_ERROR_COLOR = '#cc3232';
const MAIN_SUCCESS_COLOR = '#32A54A';
const MAIN_CUSTOM_COLOR = '#6441A4';
const MAIN_DISMISS_COLOR = '#748182';

const colors = {
  GREEN: 'rgb(0, 208, 0)',
  PURPLE: 'rgb(158, 119, 184)',
  YELLOW: 'rgb(251, 242, 75)',
  ORANGE: 'rgb(245, 168, 96)',
  GRAY: 'rgb(92,92,92)',
  BLUE: 'rgb(25,129,224)',
  GMAIL_BLUE: 'rgb(31,141,241)',
  PINK: 'rgb(255,196,218)',
  SKY_BLUE: 'rgb(165,253,254)',
  LIGHT_RED: 'rgb(255,128,127)',
  OFF_WHITE: 'rgb(247,247,247)'
};

const devicesWithNotch = [
  {
    brand: 'Apple',
    model: 'iPhone X',
  },
  {
    brand: 'Apple',
    model: 'iPhone XS',
  },
  {
    brand: 'Apple',
    model: 'iPhone XS Max',
  },
  {
    brand: 'Apple',
    model: 'iPhone XR',
  },
  {
    brand: 'Asus',
    model: 'ZenFone 5',
  },
  {
    brand: 'Asus',
    model: 'ZenFone 5z',
  },
  {
    brand: 'Huawei',
    model: 'P20',
  },
  {
    brand: 'Huawei',
    model: 'P20 Plus',
  },
  {
    brand: 'Huawei',
    model: 'P20 Lite',
  },
  {
    brand: 'Huawei',
    model: 'Honor 10',
  },
  {
    brand: 'Huawei',
    model: 'Nova 3',
  },
  {
    brand: 'Huawei',
    model: 'Nova 3i',
  },
  {
    brand: 'Oppo',
    model: 'R15',
  },
  {
    brand: 'Oppo',
    model: 'R15 Pro',
  },
  {
    brand: 'Oppo',
    model: 'F7',
  },
  {
    brand: 'Vivo',
    model: 'V9',
  },
  {
    brand: 'Vivo',
    model: 'X21',
  },
  {
    brand: 'Vivo',
    model: 'X21 UD',
  },
  {
    brand: 'Vivo',
    model: 'Y81',
  },
  {
    brand: 'Vivo',
    model: 'Vivo 1808',
  },
  {
    brand: 'OnePlus',
    model: '6',
  },
  {
    brand: 'OnePlus',
    model: 'A6003',
  },
  {
    brand: 'OnePlus',
    model: 'OnePlus A6003',
  },
  {
    brand: 'LG',
    model: 'G7',
  },
  {
    brand: 'LG',
    model: 'G7 ThinQ',
  },
  {
    brand: 'LG',
    model: 'G7+ ThinQ',
  },
  {
    brand: 'Leagoo',
    model: 'S9',
  },
  {
    brand: 'Oukitel',
    model: 'U18',
  },
  {
    brand: 'Sharp',
    model: 'Aquos S3',
  },
  {
    brand: 'Nokia',
    model: '6.1 Plus',
  },
];

const APICalls = {
  url: 'http://18.208.254.185/halohaApi/public/index.php/api/v1/'
};

const regex = {
  email: /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  name: /^[a-zA-Z0-9_.\s]*$/,
  url: new RegExp('([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?')
};

module.exports = {
  colors,
  APICalls,
  regex,
};
