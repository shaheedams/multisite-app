import './footer.css';

interface FooterType {
    brand: string;
    content: string;
    links?: linkType[];
}

interface linkType {
    href: string;
    link: string;
}

export const Footer = ({ brand, content, links = [] }: FooterType) => {
    return (
        <footer>
            <div className="ctm-container">
                <div className="footer-container">
                    <div className="contentContainer">
                        <div className="brand">{brand}</div>
                        <div className="content">{content}</div>
                    </div>
                    <div className="linksContainer">
                        {
                            links.map((t) => {
                                return <a key={t.link.trim()} href={t.href}>{t.link}</a>
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}