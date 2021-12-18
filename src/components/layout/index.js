import Header from '../header';
import Footer from '../footer';

export const LayoutComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default LayoutComponent;
