import AppNav from "../components/AppNav";
import Sidebar from "../components/sidebar";
import styles from './AppLayout.module.css'

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
    </div>
  ) 
}

export default AppLayout;
