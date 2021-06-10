import {Store} from './store';

export const DigitecCH: Store = {
  currency: 'CHF',
  labels: {
    inStock: {
      container: '#addToCartButton:enabled',
      text: ['In den Warenkorb'],
    },
    maxPrice: {
      container: '.productDetail [class^="productPricing"]',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.availabilityText',
        text: ['aktuell nicht lieferbar und kein liefertermin vorhanden'],
      },
      {
        container: '.availabilityText',
        text: [
          'der liefertermin ist beim lieferanten in abklärung und wird aktualisiert.',
        ],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.digitec.ch/de/product/13987918',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.digitec.ch/de/product/13987918',
    },
  ],
  name: 'digitec-ch',
};
