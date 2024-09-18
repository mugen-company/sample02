import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <Image
            src="/images/logo.png" // フッターに表示するロゴ画像のパス
            alt="Site Logo"
            width={150}
            height={50}
          />
        </div>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/about">会社情報</Link></li>
            <li><Link href="/services">サービス</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </nav>
        <div style={contactStyle}>
          <p>〒123-4567 東京都渋谷区1-2-3</p>
          <p>電話: 03-1234-5678</p>
          <p>メール: info@example.com</p>
        </div>
        <div style={socialMediaStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div style={copyRightStyle}>
        <p>© 2024 サイト名. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// スタイリングオブジェクト
const footerStyle: React.CSSProperties = {
  backgroundColor: '#f8f8f8',
  padding: '20px 0',
  textAlign: 'center',
  width: '100%',
  position: 'relative',
  left: 0,
  bottom: 0,
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const logoStyle: React.CSSProperties = {
  marginBottom: '20px',
};

const navStyle: React.CSSProperties = {
  marginBottom: '20px',
};

const ulStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  margin: 0,
};

const contactStyle: React.CSSProperties = {
  marginBottom: '20px',
};

const socialMediaStyle: React.CSSProperties = {
  marginBottom: '20px',
};

const copyRightStyle: React.CSSProperties = {
  borderTop: '1px solid #ddd',
  paddingTop: '10px',
  fontSize: '0.9rem',
  color: '#555',
};

export default Footer;
