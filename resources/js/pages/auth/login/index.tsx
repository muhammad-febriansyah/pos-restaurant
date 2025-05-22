import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/AuthLayout';
import { cn } from '@/lib/utils';
import { Head, useForm } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Index() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/checklogin', {
            onError: (errors) => {
                Object.values(errors).forEach((err) => {
                    toast.error(err, {
                        position: 'top-right',
                    });
                });
            },
        });
    };

    return (
        <AuthLayout>
            <Head title="Login" />
            <form className={cn('flex flex-col gap-6')} onSubmit={handleSubmit}>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Masuk ke CloudKafe</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        Silakan masukkan email dan password Anda untuk mulai menggunakan sistem.
                    </p>
                </div>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Masukkan email Anda"
                            required
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                            id="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type="password"
                            placeholder="********"
                            required
                        />
                    </div>
                    {processing ? (
                        <Button type="submit" disabled className="bg-primaryClr w-full">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
                        </Button>
                    ) : (
                        <Button type="submit" className="bg-primaryClr w-full">
                            Login
                        </Button>
                    )}
                </div>
                <div className="text-center text-sm">
                    Don&apos;t have an account?{' '}
                    <a href="#" className="underline underline-offset-4">
                        Sign up
                    </a>
                </div>
            </form>
        </AuthLayout>
    );
}
