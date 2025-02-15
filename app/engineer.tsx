import { View } from "tamagui"
import { EngineerForm } from "@components/engineer/form"
import { Footer } from "@components/layout/footer"
import { Header } from "@components/layout/header"

export default function EngineerPage() {
  return (
    <View backgroundColor={"$gray1"} flex={1}>
      <Header />
      <EngineerForm />
      <Footer />
    </View>
  )
}
