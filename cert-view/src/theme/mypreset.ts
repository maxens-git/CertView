import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const SakaiPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{zinc.900}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.800}',
          activeColor: '{zinc.700}'
        }
      },
      dark: {
        primary: {
          color: '{zinc.200}',
          inverseColor: '#000000',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.50}'
        }
      }
    }
  },
  theme: {
    borderRadius: '6px',
    fontFamily: 'Inter, system-ui, sans-serif'
  }
});

export default SakaiPreset;
