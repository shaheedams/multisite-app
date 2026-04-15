"use client"
import './navBar.css';

interface NavBar {
    brand: string;
    links?: linkType[];
}

interface linkType {
    name: string;
    link: string;
}

export const NavBar = ({ brand, links = [] }: NavBar) => {

    return (
        <nav>
            <div className="ctm-container ">
                <div className="nav_container">
                    <div className="brand">{brand}</div>
                    <div className="links">
                        {
                            links.map((t) => {
                                return <div key={t.name.trim()} className="link"><a href={t.link}>{t.name}</a></div>
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}