import './contact.css';

interface Contact {
    heading: string;
    link: string;
    cta: string;
}

export const Contact = ({ heading, link = '#', cta }: Contact) => {
    return (
        <div className='contact'>
            <div className="ctm-container">
                <div className="contact-container">
                    <div className="heading">{heading}</div>
                    <a className="contactCta" href={link} target="_blank" rel="noopener noreferrer">
                        {cta}
                    </a>
                </div>
            </div>
        </div>
    )
}