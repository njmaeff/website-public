import styled, {createGlobalStyle, DefaultTheme,} from "styled-components";

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export interface BreakPoints {
    med: string;
    lg: string;
}

export type Media = BreakPoints
export type ViewPorts = BreakPoints

export const viewPorts: ViewPorts = {
    med: '35em',
    lg: '40em'
};

export const media: Media = {
    med: `(min-width: ${viewPorts.med})`,
    lg: `(min-width: ${viewPorts.lg})`,
};

export const base = {
    font: {
        xxl: '2rem',
        xl: '1.75rem',
        lg: '1.5rem',
        med: '1.25rem',
        sm: '1rem',
        text: '0.75rem'
    },
    spacing: {
        sm: '0.25rem',
        med: '0.5rem',
        lg: '1rem',
        xl: '2rem',
        xxl: '4rem'
    },
    border: {
        hairline: '1px'
    }
};

export interface Palette {
    secondary: string;
    valid: string;
    light: string;
    dark: string;
    invalid: string;
    neutral: string;
    primary: string;
}

export interface Spacing {
    xl: string;
    sm: string;
    lg: string;
    med: string;
    xxl: string;
}

export interface Border {
    hairline: string;
}

export interface Font {
    xl: string;
    sm: string;
    lg: string;
    text: string;
    xxl: string;
    med: string;
}

export type PartialTheme = Omit<DefaultTheme, "util" | "media">

export interface Themes {
    storyboard: PartialTheme
    latte: PartialTheme
    americano: PartialTheme
}

export const themes: Themes = {
    storyboard: {
        ...base,
        palette: {
            dark: '#333333',
            light: '#f2f2f2',
            neutral: '#bdbdbd',
            primary: '#4f4f4f',
            secondary: '#828282',
            invalid: 'red',
            valid: 'green'
        },
    },
    latte: {
        ...base,
        palette: {
            primary: 'rgba(73, 83, 91, 1)',
            secondary: 'rgba(113, 119, 122, 1)',
            neutral: 'rgba(211, 172, 129, 1)',
            light: 'rgba(242, 235, 205, 1)',
            dark: 'rgba(24, 23, 23, 1)',
            invalid: 'red',
            valid: 'green'
        }
    },
    americano: {
        ...base,
        palette: {
            primary: 'rgba(144, 124, 72, 1)',
            secondary: 'rgba(141, 114, 103, 1)',
            neutral: 'rgba(108, 104, 109, 1)',
            light: 'rgba(96, 72, 68, 1)',
            dark: 'rgba(107, 123, 139, 1)',
            invalid: 'red',
            valid: 'green'
        }
    }
};

export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: calc(0.5em + 1vw);

    }

    @media print {
        * {
            color: black !important;
            background: none !important;
        }
    }

    img {
        max-width: 100%;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        font-family: Lato, Arial, sans-serif;
    }

    //body * + * { margin-top: 1.5em;}

    .clearfix::after {
        display: block;
        content: " ";
        clear: both;
    }
`;
export const GlobalThemedStyles = styled.div`

    button, input, a {
        ::-moz-focus-inner, :active, :focus {
            outline: ${({theme}) => theme.palette.primary} solid 2px;
            outline-offset: -1px;
        }
    }
`;
