import Link from "next/link";

export default function Footer() {
    return (
        <footer data-aos="fade-up" >
            <div className='flex justify-center items-center'>

                <img src="/email-icon.png" alt="email" className='pr-4 h-5 ' />
                <Link
                    href="mailto:admin@tmoraa.com"
                    className="text-[20px] hover:underline"
                >
                    admin@tmoraa.com
                </Link>
            </div>
            <div className='mt-8 pb-16 flex justify-center items-center'>© Tmoraa | 2025 All rights reserved.</div>

        </footer>
    )
}
