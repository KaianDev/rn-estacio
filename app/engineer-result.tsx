import { View } from "tamagui"
import { EngineerResult } from "../components/engineer/result"
import { Footer } from "../components/layout/footer"
import { Header } from "../components/layout/header"

export default function EngineerResultPage() {
  return (
    <View backgroundColor={"$gray1"} flex={1}>
      <Header />
      <EngineerResult />
      <Footer />
    </View>
  )
}
