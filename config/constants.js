const Constants = {
  headerText: 'Regional Rail Fares',
  logoSrc: '/static/septa-logo.png',
  whereText: 'Where are you going?',
  whenText: 'When are you riding?',
  wherePurchase: 'Where will you purchase the fare?',
  wherePurchaseOptions: [
    {
      option: 'advance_purchase',
      label: 'Station Kiosk',
    },
    {
      option: 'onboard_purchase',
      label: 'Onboard',
    },
  ],
  whenOptions: [
    {
      option: 'anytime',
      label: 'Anytime',
    },
    {
      option: 'evening_weekend',
      label: 'Evening/Weekend',
    },
    {
      option: 'weekday',
      label: 'Weekday',
    },
  ],
  numberRides: 'How many rides will you need?',
  numberRidesLimit: 10,
  totalText: 'Your fare will cost',
};

export default Constants;