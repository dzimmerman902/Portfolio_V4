const portfolioTheme = {
  // Box Shadow Primary
  boxShadow() {
    return `0 0.8rem 1rem -0.5rem rgba(${this.colorPrimaryDarkerRGB}, 0.6)`
  },

  // Background Image
  backgroundImage(alpha = 0) {
    return `linear-gradient(to left bottom, rgba(${
      this.colorGreyDarkRGB
    }, 0.6), rgba(${this.colorGreyDarkRGB}, ${alpha}))`
  },

  // Color Primary
  colorPrimary: '#639',
  colorPrimaryDarker: '#2F1846',
  colorPrimaryDarkerRGB: '47, 24, 70',

  // Color Grey
  colorGreyLightest: '#E6E6E6',
  colorGreyLighter: '#C1C2C2',
  colorGrey: '#78797A',
  colorGreyRGB: '120, 121, 122',
  colorGreyDark: '#585959',
  colorGreyDarkRGB: '88, 89, 89',

  // Color Row
  colorSection: '#F3F3F3',

  // Color Misc
  colorWhite: '#ffffff',
  colorBlack: '#000000',

  // Font Family
  fontFamilyPrimary: '"Raleway", sans-serif'
}

export default portfolioTheme
