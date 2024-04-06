import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';
"00b2a9"

export default function Header() {
    const { user } = useContext(UserContext);
    return (
        <header className = "flex justify-between">
            <Link to ={'/'} className ="flex items-center gap-1">
                <svg>

                </svg>
                <span className = "font-bold text-xl">Clinica Imbanaco</span>
            </Link>

            </header>
    )
}