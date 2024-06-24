import * as React from 'react'
import {Platform, Text as RNText} from 'react-native'
import {StyledTextProps} from './types'
import styled from 'styled-components'

const StyledText = styled(RNText)<StyledTextProps>`
  ${props => {
    return `
    font-size: 16px;
    font-family: Roboto;
    font-weight: ${Platform.OS === 'android' ? 'normal' : props.fontWeight};
    `
  }}
`

export const Text = ({font, fontWeight, text}: StyledTextProps) => {
  return (
    <StyledText font={font} fontWeight={fontWeight} text={text}></StyledText>
  )
}
