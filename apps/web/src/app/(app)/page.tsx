import Container from '@/components/container'
import { Header } from '@/components/header'

export default async function Home() {
  return (
    <Container>
      <Header />
      <main className="mx-auto w-full max-w-[1200px] space-y-4">
        <p className="text-sm text-muted-foreground">Select an organization</p>
      </main>
    </Container>
  )
}
