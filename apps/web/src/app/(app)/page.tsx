import Container from '@/components/container'

export default async function Home() {
  return (
    <Container>
      <main className="mx-auto w-full max-w-[1200px] space-y-4">
        <p className="text-sm text-muted-foreground">Select an organization</p>
      </main>
    </Container>
  )
}
