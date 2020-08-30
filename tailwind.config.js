module.exports = {
  purge: [],
  theme: {
    extend: {
    	fontFamily: {
      		body: ['Spartan', "sans-serfi"],
      },
      colors: {
        desaturated: "#5BA4A4",
        background: "#EFFAFA",
        filter: "#EEF6F6",
        darkgray:"#7B8E8E",
        veryDarkGray: "#2C3A3A",
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
