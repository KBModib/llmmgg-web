import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: 'Dashboard', href: '/coach/dashboard' },
    { name: 'Tournaments', href: '/coach/tournaments' },
    { name: 'Teams', href: '/coach/teams' },
    { name: 'Players', href: '/coach/players' },
    { name: 'Fixtures', href: '/coach/fixtures' },
];

export function CoachSubNavTabs() {
    // Note: We use useRouter to dynamically highlight the active tab
    // If you are using Next.js 13+ App Router, you would use usePathname() instead.
    const router = useRouter(); 
    const currentPath = router.pathname;

    return (
        <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {navItems.map((item) => {
                    // Determine if the current item is active
                    const isActive = currentPath === item.href;
                    
                    return (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className={
                                isActive
                                    ? 'border-green-700 text-green-700 whitespace-nowrap py-3 px-1 border-b-2 font-semibold text-sm transition duration-150'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition duration-150'
                            }
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}