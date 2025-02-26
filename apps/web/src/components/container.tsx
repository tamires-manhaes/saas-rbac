import { Header } from './header'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1200px] space-y-4 px-4 py-4">
      <Header />
      <>{children}</>
    </div>
  )
}
