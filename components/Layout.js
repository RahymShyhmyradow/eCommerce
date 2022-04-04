
import Footer from './Footer'
import Menu from './Nav'
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}