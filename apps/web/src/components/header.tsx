import { Atom, Slash } from 'lucide-react'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1200px] items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <Atom className="size-6" />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </header>
  )
}
