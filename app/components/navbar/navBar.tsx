import './navBar.css';

interface NavBar {
    brand: string;
    links?: linkType[];
}

interface linkType {
    href: string;
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
                                return <div key={t.link.trim()} className="link"><a href={t.href}>{t.link}</a></div>
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}