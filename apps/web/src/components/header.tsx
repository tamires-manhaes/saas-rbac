import { Atom, Slash } from 'lucide-react'

import { ability } from '@/auth/auth'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export async function Header() {
  const permissions = await ability()

  return (
    <header className="mx-auto flex max-w-[1200px] items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <Atom className="size-6" />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />
        {permissions?.can('get', 'Project') && <span>projects</span>}
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Separator orientation="vertical" className="h-5" />
        <ProfileButton />
      </div>
    </header>
  )
}
