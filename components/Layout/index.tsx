import SlideLayout from "./SlideLayout"
import { ILayout } from "./types"

const layoutContainers = {
  slide: SlideLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const Container = layoutContainers[type]

  return <Container>{children}</Container>
}

export default Layout
