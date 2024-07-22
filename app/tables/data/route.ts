import { mails } from '@/app/data';


export async function GET() {
    return Response.json(mails);
}