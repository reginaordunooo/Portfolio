import styles from './styles/Portafolio.module.css'
import Myself from "./components/Myself.tsx"
import Iot from './components/Iot.tsx'
import MotionLab from './components/MotionLab.tsx';
import SkyCheck from './components/SkyCheck.tsx';

const Portafolio = () => {
    return(
        <div className={styles['fondo']}>
            <Myself />
            <Iot />
            <SkyCheck />
            <MotionLab />
        </div>
    );
};

export default Portafolio