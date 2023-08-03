import React, { useEffect, useRef } from 'react';
import Lotti, { AnimationDirection, AnimationItem } from "lottie-web";
import buildPath from '@/public/assets/lotti/build.json';

const LottiIcon = ({ name, icon }: any) => {
  const lottiRef = useRef<AnimationItem>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!icon) return;

    // lotti.destroy(path)

    lottiRef.current = Lotti.loadAnimation({
      name,
      container: containerRef.current!,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: icon, // path: buildPath.src,
    });

    let r : AnimationDirection = 1;
    if (true) {
      lottiRef.current?.addEventListener('complete', () => {
        r === 1 ? (r = -1) : r === -1 && (r = 1);
        lottiRef.current?.setDirection(r);
        lottiRef.current?.play();
      });
    }

    return () => Lotti.destroy(name);
  }, []);

  return <div ref={containerRef}></div>;
};

export default LottiIcon;
