import SidebarDashboard from '@/components/ui/dashboard/sidebar';
import { UserType } from '@/types/user';
import { Head } from '@inertiajs/react';

interface Props {
    children: React.ReactNode;
    auth: UserType;
}
export default function DashboardLayout({ children }: Props) {
    return (
        <>
            <Head>
                <title>Cloud POS</title>
                <meta name="description" content="Your page description" />
            </Head>
            <div className="flex flex-row justify-start">
                <SidebarDashboard />
                <div className="bg-secondaryClr mb-5 flex h-screen w-full flex-col overflow-hidden">
                    <main>{children}</main>
                </div>
            </div>
        </>
    );
}
