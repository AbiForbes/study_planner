import * as styledComponents from 'styled-components/native'

export type ChosenTheme<T> = {
  [theme: string]: T
}

interface TextStyles {
  size: string
  fontFamily: string
}

export interface AppTheme {
  colors: {
    background: string
    header: string
  }
  textStyles: {
    xSmall: TextStyles
    small: TextStyles
    medium: TextStyles
    large: TextStyles
    xLarge: TextStyles
  }
}

export type Theme = AppTheme

export const Themes: ChosenTheme<Theme> = require('./themes/default.json')

const {
  default: styled,
  css,
  ThemeProvider: StyledComponentsThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<Theme>

export {css, StyledComponentsThemeProvider, styled}
