
import Copyright from '@/components/ui/copyright';
import FancyText from '@/components/ui/fancyText';
import InspirationGenerator from '@/components/ui/inspirationGenerator';

const year: number = new Date().getFullYear();


export default function Home() {

    return (
        <div>
            <h1>Home</h1>
            <FancyText title={true} text="This is Server Component" />
            <InspirationGenerator>
                <Copyright year={year} />
            </InspirationGenerator>
        </div>
    );
}
