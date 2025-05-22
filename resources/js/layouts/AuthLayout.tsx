import { Head } from '@inertiajs/react';
import { GalleryVerticalEnd } from 'lucide-react';

interface Props {
    children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
    return (
        <>
            <Head>
                <title>Cloud POS</title>
                <meta name="description" content="Your page description" />
            </Head>
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                        <a href="#" className="flex items-center gap-2 font-medium">
                            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
                                <GalleryVerticalEnd className="size-4" />
                            </div>
                            Cloud POS
                        </a>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">{children}</div>
                    </div>
                </div>
                <div className="bg-muted relative hidden lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image"
                        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </>
    );
}
