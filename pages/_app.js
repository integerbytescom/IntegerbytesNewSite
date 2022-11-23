import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import '../styles/general/backgrounds.css';
import '../styles/general/buttons.css';
import "../styles/components/NavbarTop/NavbarTop.css";
import "../styles/components/Preview/Preview.css";
import "../styles/components/Services/Services.css";
import "../styles/components/About/About.css";
import "../styles/components/AboutProducts/AboutProducts.css";
import "../styles/components/Team/Team.css";
import "../styles/components/Contacts/Contacts.css";
import "../styles/components/Vacancies/Vacancies.css";
import "../styles/components/Vacancies/VacanciesModal.css";
import "../styles/components/FooterBottom/FooterBottom.css";

// media
import "../styles/components/NavbarTop/NavbarTopMedia.css";
import "../styles/components/Preview/PreviewMedia.css";
import "../styles/components/Services/ServicesMedia.css";
import "../styles/components/Vacancies/VacanciesMedia.css";
import "../styles/components/About/AboutMedia.css";
import "../styles/components/AboutProducts/AboutProductsMedia.css";
import "../styles/components/Team/TeamMedia.css";
import "../styles/components/Contacts/ContactsMedia.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
