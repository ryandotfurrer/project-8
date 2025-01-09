import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const TopBanner: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: '#fffff',
                padding: '10px 20px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                }}
            >
                <a
                    href="https://discord.gg/A8Th9g8TaY"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#333',
                        textDecoration: 'none',
                    }}
                >
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>We are having lots of fun on  </span>
                    <FontAwesomeIcon icon={faDiscord} style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>  Discord. Come and join us!</span>
                </a>
                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        marginLeft: '10px',
                        color: '#333',
                    }}
                    aria-label="close discord message">
                </button>
            </div>
        </div>
    );
};

export default TopBanner;