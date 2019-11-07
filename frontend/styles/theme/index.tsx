import emotionStyled, { CreateStyled } from '@emotion/styled'

interface Theme {
  black: string
  bs: string
  grey: string,
  lightGrey: string
  maxWidth: string
  offWhite: string
  red: string
}

const theme: Theme = {
  black     : '#393939',
  bs        : '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  grey      : '#3A3A3A',
  lightGrey : '#E1E1E1',
  maxWidth  : '1000px',
  offWhite  : '#EDEDED',
  red       : '#FF0000',
}

const styled = emotionStyled as CreateStyled<Theme>

export { theme }

export default styled
