import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const ModelImage = (props) => {
    console.log(`/${props.currentYear} ${props.currentModel}.webp`)
    return (
        <div>
        {props.currentModel && props.currentYear
            ? <div className={styles.imgDim}>
                  <Image 
                    width={655}
                    height={400}
                    objectFit='cover'
                    alt={'car'}
                    loading='eager'
                    src={`/${props.currentYear} ${props.currentModel}.webp`}
                  />
              </div>
            : null
         }
        </div>
     )
  }
