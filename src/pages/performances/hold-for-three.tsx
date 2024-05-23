import React from 'react';
import Image from 'next/image';
import styles from './HoldForThree.module.css';

const HoldForThree = () => {
  return (
    <div className={styles.container}>
      <h1>HOLD FOR THREE</h1>
      <p className={styles.performanceYear}>Sonic Performance</p>
      <p className={styles.performanceYear}>2023</p>
      <p>
        ‘Hold for Three’ is a sonic performance which morphs bodies into machinehood and objects into organs. Kayla Elrod and Lottie Sebes probe the sonic capacities of various bellows, operating them as instruments, extensions and prosthetics.
      </p>
      <p>
        Sonic worlds are built from wheezing breath, creaking hinges, loosening screws, and hot air hissing.
      </p>
      <p>
        Outmoded objects of production are transformed into otherworldly organs, powered by mechanical respiration, a cycle of tension and release. What slips from a hosed mouth on the floor of an old ship?
      </p>
      <p><b>Funded by Neue Initiative Musik</b></p>
      <p>2023 Hošek Contemporary/ Berlin, Germany</p>

      <div className={styles.imageContainer}>
        <Image src="/images/performance/hold-for-three/Portada.jpg" alt="Hold for Three - Main Image" width={800} height={600} className={styles.image} />
        <Image src="/images/performance/hold-for-three/1.jpg" alt="Hold for Three - Image 1" width={800} height={600} className={styles.image} />
        <Image src="/images/performance/hold-for-three/2.jpg" alt="Hold for Three - Image 2" width={800} height={600} className={styles.image} />
        <Image src="/images/performance/hold-for-three/3.jpg" alt="Hold for Three - Image 3" width={800} height={600} className={styles.image} />
      </div>

      <div className={styles.description}>
        <p>
          Hold for three questions capitalist power structures by forging a nightmarish hallucination, one where labor and productivity reign supreme. This world is infused with eroticism, a kind that is laking in care and intimacy, steered by function and violence. This erotic monstrosity is fueled by machinic desire and the performers are mere tools of some greater force for perpetual operation.
        </p>
        <p>
          As the development of digital technology further entangles itself into our work and everyday lives, Hold For Three reflects on a much longer history of mechanisms which have sought to mimic human capacities, such as the form of bellows simulating the human lung. The piece counters patriarchal, tech-fetishistic music cultures in which absolute control and sleek functionality is paramount, while the body is often rendered invisible and immobile. By imagining new musical uses for outdated technology, the work questions what other possible futures emerge from the human-machine relationship. It wrestles with the narrative of technological ‘progress’ in the context of human labor.
        </p>
        <p><i>
          bellows (n.)
          Instrument for producing a current of air, especially for a fire, from middle English blæstbælg, literally “blowing bag” (compare German Blasebalg). Related to belly (n.) from Proto-Indo-European *bhel-” to blow, swell.”
        </i></p>
        <p><i>
          bellow (v.)
          From an imitative Proto-Indo-European root *bhel-” to sound, roar.” Originally of animals, used of human beings since c. 1600. As a noun, “a loud, deep cry”.
        </i></p>
      </div>

      <div className={styles.credits}>
        <h3>CREDITS</h3>
        <p>INITIAL CONCEPT & PERFORMANCE, OBJECT DESIGN ASSISTANCE BY Lottie Sebes</p>
        <p>CONCEPT DEVELOPMENT & PERFORMANCE, OBJECT DESIGN ASSISTANCE BY Kayla Elrod</p>
        <p>ASSISTANCE BY Kayla Elrod</p>
        <p>OBJECT & SET DESIGN BY Anna Maddalena Cingi</p>
        <p>SOUND DESIGN BY Aleksander Filipiak</p>
        <p>DRAMATURGIC COLLABORATION & ACTING COACH BY ONIX-Victoria Momeño</p>
        <p>GRAPHIC DESIGN BY David Luciani</p>
        <p>DOCUMENTATION BY Kim Wichera</p>
        <p>THANKS TO Field Notes Berlin Magazin</p>
      </div>
    </div>
  );
};

export default HoldForThree;

