import * as React from "react"
import { View } from "react-native"
import Svg, { SvgProps, Path } from "react-native-svg"

export const ArrowLeft = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </Svg>
)