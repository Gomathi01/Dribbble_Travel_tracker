import React, { useEffect, useRef, useState } from 'react';
import scroll1 from './../../Assets/image/scroll1.webp';
import scroll2 from './../../Assets/image/scroll2.webp';
import scroll3 from './../../Assets/image/scroll3.webp';
import scroll4 from './../../Assets/image/scroll4.webp';
import scroll5 from './../../Assets/image/scroll5.webp';
import scroll6 from './../../Assets/image/scroll6.webp';
import scroll7 from './../../Assets/image/scroll7.webp';
import scroll8 from './../../Assets/image/scroll8.webp';

const Section4 = () => {
    const data = [scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7, scroll8];
    const dataCon = ['Animation', 'Print', 'Illustration', 'Typography',  'Branding',  'Mobile', 'Product Design', 'Web Design'];
    const scrollContainerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollWidth = scrollContainer.scrollWidth / 2;  

        const handleScroll = () => {
            if (!isHovered) {
                if (scrollContainer.scrollLeft >= scrollWidth) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1;  
                }
            }
        };

        const scrollInterval = setInterval(handleScroll, 10);  
        return () => clearInterval(scrollInterval);
    }, [isHovered]);

    return (
        <div className='container scroll-images' ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <div className="scroll-content" style={{ display: 'inline-flex' }}>
                {[...data, ...data].map((image, index) => (
                    <div key={index} className="text-center" style={{ display: 'inline-block', marginRight: 0 }}>
                        <img src={image} width="220" height="170" className="scroll-image" style={{ display: 'block' }} />
                        <p style={{
                            marginTop: 12,
                            color: 'rgb(76 76 83)',
                            fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontSize: 14,
                            fontWeight: 600,
                            textAlign:'left'
                        }}>{dataCon[index % dataCon.length]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section4;
