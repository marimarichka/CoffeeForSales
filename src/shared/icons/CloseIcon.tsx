import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const CloseIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    {...props}
  >
    <Path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </Svg>
)
export default CloseIcon