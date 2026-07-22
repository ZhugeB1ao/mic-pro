import { useRouter } from 'next/router';

export default function BlogPost() {
    const router = useRouter();

    return (
        <div>
            <h1>Blog Post: {router.query.slug}</h1>
        </div>
    );
}
