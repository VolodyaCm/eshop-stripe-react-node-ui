import './footer.styles.scss';

const FooterComponent = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      {year} © NOMAD Store
    </div>
  );
}

export default FooterComponent;
