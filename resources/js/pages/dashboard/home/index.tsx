import DashboardLayout from '@/layouts/DashboardLayout';
import { UserType } from '@/types/user';

interface Props {
    auth: UserType;
}
export default function Index({ auth }: Props) {
    return (
        <DashboardLayout auth={auth}>
            <section>asda</section>
        </DashboardLayout>
    );
}
