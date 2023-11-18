import topBar from "./topBar"
import bottomBar from "./bottomBar"
import middleBar from './middleBar'

const intro = () => {
  topBar().intro(200)
  middleBar().intro(300)
  bottomBar().intro(0)
}
const outro = () => {
  topBar().outro(200)
  middleBar().outro(0)
  bottomBar().outro(300)
}

export default {
  intro,
  outro
}
