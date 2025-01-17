import { Link, NavLink } from "react-router-dom";
import styles from "./NavBarTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { taskActions } from "../Redux/taskSlice";
import { useDispatch } from "react-redux";

export default function NavBarTop() {
    const dispatch = useDispatch();
    const [isListVisible, setIsListVisible] = useState(false);

    function handleListClick(){
        setIsListVisible((prevState) => !prevState);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const dataObject = Object.fromEntries(formData.entries());
        console.log(dataObject.tasktitle);
        if(dataObject.tasktitle===""){return}
        dispatch(taskActions.addTask(dataObject.tasktitle));
        form.reset();

    }


    return (
        <header className={styles.header}>
            <div className={styles.mobileList}>
                <FontAwesomeIcon className={isListVisible ? styles.listVisible : styles.listInVisible} icon={faList} onClick={handleListClick} />
                {isListVisible &&
                    (<div className={styles.openList}>
                        <ul>
                            <Link to="/" className={styles.link} onClick={() => setIsListVisible(false)}>
                                All todos
                            </Link>
                            <Link to="/completedtasks" className={styles.link} onClick={() => setIsListVisible(false)}>
                                Completed todos
                            </Link>
                            <Link to="/incompletetasks" className={styles.link} onClick={() => setIsListVisible(false)}>
                                Incomplete todos
                            </Link>
                        </ul>
                    </div>)
                }
            </div>
        <nav className={styles.links}>
            <ul className={styles.nav}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
            >
                All todos
            </NavLink>
            <NavLink
                to="/incompletetasks"
                className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
            >
                Incomplete todos
            </NavLink>
            <NavLink
                to="/completedtasks"
                className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
            >
                Completed todos
            </NavLink>
            </ul>
        </nav>
        <form action="" onSubmit={handleSubmit} className={styles.newTask}>
                <button type="submit" className={styles.label}>Add todo </button>
                <input name="tasktitle" type="text" className={styles.input} />
                {/* <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} /> */}
        </form>
        </header>
    );
}
