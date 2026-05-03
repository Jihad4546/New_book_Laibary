"use client"

import { useSpring, animated } from '@react-spring/web'
import Link from 'next/link';
const Anemated = () => {
    const styles = useSpring({
        from: { transform: 'translateY(0px)' },
        to: async (next) => {
            while (1) {
                await next({ transform: 'translateY(-10px)' });
                await next({ transform: 'translateY(0px)' });
            }
        },
        config: { tension: 300, friction: 10 },
        loop: { delay: 4000 } // 👈 every 2s pause before next bounce cycle
    });

    return (
        <Link href={'/all-book'}>
        <animated.button
            style={styles}
            className="my-5 rounded-full bg-white px-8 py-3 text-lg font-semibold text-indigo-900 hover:bg-gray-200"
        >
            Browse Now
        </animated.button></Link>
    );
};

export default Anemated;