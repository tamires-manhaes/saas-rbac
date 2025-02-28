import Container from '@/components/container'
import { Tabs } from '@/components/tabs'

export default async function OrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container>
      <Tabs />
      {children}
    </Container>
  )
}
