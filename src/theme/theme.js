import { rem } from 'polished';
import colors from './colors';

export const theme = {
    palette: {
        main: colors.garden,
    },
    font: {
        primary: `'Segoe UI',Tahoma,Geneva,Verdana,sans-serif`,
    },
    weights: {
        thin: 100,
        light: 300,
        normal: 400,
        semiBold: 500,
        bold: 700,
    },
    sizes: {
        extraSmall: rem(12),
        small: rem(14),
        medium: rem(16),
        large: rem(18),
        extraLarge: rem(50),
        h1: rem(40),
        h2: rem(36),
        h3: rem(32),
        h4: rem(28),
        h5: rem(24),
        h6: rem(20),
    },
};
